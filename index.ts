import {serve} from 'https://deno.land/std@0.158.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'

//jwt
import { create } from "https://deno.land/x/djwt@v2.7/mod.ts";

const app = new Hono()

const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"],
  );

app.get('/', async(c) => {
    const jwt: string = await create({alg: "HS512", typ: "JWT"}, {foo: "name"}, key)
    return c.json(jwt)
})

serve(app.fetch)