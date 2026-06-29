import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

const KNOWN_TAGS = ["landing-pages", "organization"];

// Laravel calls this after a write (landing page / organization change) so
// the site reflects it immediately instead of waiting for the 60s ISR window.
export async function POST(req: NextRequest) {
  const secret = req.headers.get("X-Revalidate-Secret");
  if (!secret || secret !== process.env.LARAVEL_API_SECRET_KEY) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const tags: string[] = Array.isArray(body.tags) && body.tags.length ? body.tags : KNOWN_TAGS;

  for (const tag of tags) {
    revalidateTag(tag, "max");
  }

  return NextResponse.json({ revalidated: true, tags, now: Date.now() });
}
