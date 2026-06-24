import { NextResponse } from "next/server";
import { getMockLandingPages } from "@/lib/mock-products";

export async function GET() {
  return NextResponse.json(getMockLandingPages());
}
