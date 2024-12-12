import { Context } from "hono";

export const bodyparser = async (c: Context, next: () => Promise<void>) => {
    await c.req.parseBody();
    (c.req as any ).body = (c.req as any).parsedBody;
     next();
};
//not working