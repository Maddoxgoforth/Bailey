// Serves the Apple Pay merchant domain association file Whop issued, via an
// explicit route handler rather than a static file under public/.
//
// Vercel's static-asset pipeline can silently drop files whose path starts
// with a dot (like public/.well-known/...) even though they work fine in a
// local `next start` — a well-documented gotcha for exactly this file. A
// route handler is compiled into the server/function bundle instead, so it
// isn't subject to that static-asset filtering.
const FILE_CONTENT =
  '{"version":1,"pspId":"646A8BB624914FB2E855B9D516FB5503381A2DDF85EAFCF60236D80A0DCB53F2","createdOn":1760664777432}';

export function GET() {
  return new Response(FILE_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
