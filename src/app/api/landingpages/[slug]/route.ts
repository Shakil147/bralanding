import { NextRequest, NextResponse } from "next/server";
import { getMockLandingPage } from "@/lib/mock-products";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const page = getMockLandingPage(slug);

  if (!page) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  return NextResponse.json(page);
}
