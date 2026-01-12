export function middleware() {
  return new Response('MIDDLEWARE IS RUNNING', { status: 503 })
}
