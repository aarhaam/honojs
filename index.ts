import {serve} from 'https://deno.land/std@0.158.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello! Hono!'))

serve(app.fetch)