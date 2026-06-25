import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/api";
import { OrderPayload } from "@/lib/types";

// Proxies the browser's checkout submit to Laravel POST /orders, holding the
// private key (X-Private-Key) server-side. Never call Laravel directly from the client.
export async function POST(req: NextRequest) {
  const payload = (await req.json()) as OrderPayload;
  const { status, body } = await createOrder(payload);
  return NextResponse.json(body, { status });
}
