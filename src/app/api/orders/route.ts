import { NextRequest, NextResponse } from "next/server";
import { getMockLandingPage } from "@/lib/mock-products";
import { OrderPayload, OrderResponse } from "@/lib/types";

const REQUIRED_FIELDS: (keyof OrderPayload)[] = [
  "product_slug",
  "name",
  "phone",
  "address",
  "size",
  "shipping_option",
  "offer_label",
];

const BD_PHONE_REGEX = /^(?:\+?880|0)1[3-9]\d{8}$/;

/**
 * Mocks the Laravel order-create endpoint. Same request/response shape
 * the real Laravel POST /api/orders must implement.
 */
export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<OrderPayload>;

  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      {
        message: "The given data was invalid.",
        errors: Object.fromEntries(missing.map((f) => [f, ["This field is required."]])),
      },
      { status: 422 }
    );
  }

  if (!BD_PHONE_REGEX.test(body.phone!.trim())) {
    return NextResponse.json(
      {
        message: "The given data was invalid.",
        errors: { phone: ["Invalid phone number."] },
      },
      { status: 422 }
    );
  }

  const product = getMockLandingPage(body.product_slug!);
  if (!product) {
    return NextResponse.json({ message: "Landing page not found" }, { status: 404 });
  }

  const shipping = product.shipping_options.find(
    (opt) => opt.label === body.shipping_option
  );
  const offer = product.offers.find((o) => o.label === body.offer_label);
  if (!offer || !shipping) {
    return NextResponse.json(
      {
        message: "The given data was invalid.",
        errors: !offer ? { offer_label: ["Invalid offer."] } : { shipping_option: ["Invalid shipping option."] },
      },
      { status: 422 }
    );
  }
  const total = offer.price + shipping.cost;

  const response: OrderResponse = {
    order_id: `ORD-${Date.now()}`,
    status: "pending",
    total,
  };

  return NextResponse.json(response, { status: 201 });
}
