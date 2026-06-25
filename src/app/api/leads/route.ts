import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/api";
import { LeadPayload } from "@/lib/types";

// Proxies partial/abandoned-lead capture to Laravel POST /leads.
export async function POST(req: NextRequest) {
  const payload = (await req.json()) as LeadPayload;
  const { status, body } = await createLead(payload);
  return NextResponse.json(body, { status });
}
