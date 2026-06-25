import { NextRequest, NextResponse } from "next/server";
import { createVisitorSession } from "@/lib/api";
import { VisitorSessionPayload } from "@/lib/types";

// Proxies attribution tracking to Laravel POST /visitor-sessions, once per page load.
export async function POST(req: NextRequest) {
  const payload = (await req.json()) as VisitorSessionPayload;
  const { status, body } = await createVisitorSession(payload);
  return NextResponse.json(body, { status });
}
