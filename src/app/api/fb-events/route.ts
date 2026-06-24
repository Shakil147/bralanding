import { NextRequest, NextResponse } from "next/server";
import { FbEventPayload } from "@/lib/types";

/**
 * Mocks Facebook's Graph API Conversions endpoint
 * (graph.facebook.com/v19.0/{pixel_id}/events). Swapping the mock for the
 * real call later only needs this handler's body replaced - the shape of
 * the request from the client and the response stay the same.
 */
export async function POST(req: NextRequest) {
  const body = (await req.json()) as FbEventPayload;

  if (!body.event_name || !body.event_id) {
    return NextResponse.json(
      { error: "validation_failed", fields: ["event_name", "event_id"] },
      { status: 422 }
    );
  }

  console.log("[fb-events:mock]", body);

  return NextResponse.json({ events_received: 1, fbtrace_id: `mock-${body.event_id}` });
}
