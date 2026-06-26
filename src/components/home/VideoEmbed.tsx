"use client";

import { useState } from "react";

// Lightweight YouTube facade: shows the poster thumbnail until clicked, then
// swaps in the real iframe. Avoids loading ~1MB of YouTube player JS on every
// page load — the single biggest initial-load cost on these landing pages.
export default function VideoEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`${title} — ভিডিও চালান`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
        padding: 0,
        cursor: "pointer",
        backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* YouTube-style play badge */}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 68,
          height: 48,
          borderRadius: 12,
          background: "rgba(0,0,0,.65)",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
