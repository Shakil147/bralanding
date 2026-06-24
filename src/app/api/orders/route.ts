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
];

/**
 * Mocks the Laravel order-create endpoint. Same request/response shape
 * the real Laravel POST /api/orders must implement.
 */
export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<OrderPayload>;

  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: "validation_failed", fields: missing },
      { status: 422 }
    );
  }

  const product = getMockLandingPage(body.product_slug!);
  if (!product) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const shipping = product.shipping_options.find(
    (opt) => opt.label === body.shipping_option
  );
  const total = product.price + (shipping?.cost ?? 0);

  const response: OrderResponse = {
    order_id: `ORD-${Date.now()}`,
    status: "pending",
    total,
  };

  return NextResponse.json(response, { status: 201 });
}
