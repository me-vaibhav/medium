import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const router = new Hono();
router.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.parseBody();
    const { email, password } = body;
    return c.text(`email: ${email}, password: ${password}`);
});
router.get("/logout", (c) => {
    return c.text("logout");
});
router.post("/signin", (c) => {
    return c.text("signin");
});
router.post("/blog", (c) => {
    return c.text("blog");
});
router.put("/blog", (c) => {
    return c.text("blog put");
});
router.get("/blog", (c) => {
    return c.text("blog get");
});
router.get("/blog/:id", (c) => {
    const id = c.req.param("id");
    return c.text(id);
});
export default router;
