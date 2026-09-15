import { createElement } from "react";
import Script from "next/script";

/**
 * Stands in for the real VSL until one exists. Pass `wistiaMediaId` (or a
 * generic `embedUrl` for a Wistia/YouTube/Loom iframe URL) once the real
 * video is hosted, and this renders it instead of the placeholder — no
 * other call sites need to change. Pass `vertical` for a TikTok/Reels-style
 * 9:16 video instead of landscape.
 */
export default function VideoSlot({
  label,
  spec,
  embedUrl,
  wistiaMediaId,
  vertical = false,
}: {
  label: string;
  spec: string;
  embedUrl?: string;
  wistiaMediaId?: string;
  vertical?: boolean;
}) {
  const aspectRatio = vertical ? 9 / 16 : 16 / 9;
  const aspectClass = vertical ? "aspect-[9/16]" : "aspect-video";
  const sizeClass = vertical ? "mx-auto w-full max-w-[380px]" : "w-full";

  if (wistiaMediaId) {
    const placeholderPaddingTop = ((1 / aspectRatio) * 100).toFixed(2);
    return (
      <div
        className={`${sizeClass} overflow-hidden rounded-2xl border-[3px] border-ink shadow-pop`}
      >
        <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
        <Script
          src={`https://fast.wistia.com/embed/${wistiaMediaId}.js`}
          strategy="afterInteractive"
          type="module"
        />
        <style
          // Blurred swatch placeholder shown until the wistia-player
          // custom element finishes defining itself.
          dangerouslySetInnerHTML={{
            __html: `wistia-player[media-id='${wistiaMediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${wistiaMediaId}/swatch'); display: block; filter: blur(5px); padding-top:${placeholderPaddingTop}%; }`,
          }}
        />
        {createElement("wistia-player", {
          "media-id": wistiaMediaId,
          aspect: String(aspectRatio),
        })}
      </div>
    );
  }

  if (embedUrl) {
    return (
      <div
        className={`${sizeClass} ${aspectClass} overflow-hidden rounded-2xl border-[3px] border-ink shadow-pop`}
      >
        <iframe
          src={embedUrl}
          title={label}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={`group relative ${sizeClass} ${aspectClass} flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border-[3px] border-ink bg-background-elevated px-6 text-center shadow-pop transition-transform duration-200 hover:-translate-y-1`}
    >
      <span
        aria-hidden
        className="absolute top-4 left-4 -rotate-6 rounded-full border-[3px] border-ink bg-accent-2 px-3 py-1 text-xs font-bold text-ink shadow-pop-sm"
      >
        NEW 🔥
      </span>
      <span className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-ink bg-accent text-2xl text-white shadow-pop-sm transition-transform duration-200 group-hover:scale-110">
        ▶
      </span>
      <p className="font-display text-sm font-bold text-accent-3">{label}</p>
      <p className="max-w-sm text-xs leading-relaxed text-muted">{spec}</p>
    </div>
  );
}
