import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            greeting: 'Hello',
        }),
        {
            headers: {
                'content-type': 'application/json',
            },
        }
    )
}
