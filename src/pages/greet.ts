import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
    console.log("Shouldn't this be logged?")
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
