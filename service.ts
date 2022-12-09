import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", async (ctx: any) => {
  ctx.response.body = "Hello deno XXX github XXX";
});

app.use(router.routes());
app.use(router.allowedMethods());

serve(async (req: Request) => await app.handle(req) as any);