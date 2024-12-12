import { Hono } from "hono";
import router from "./auth.controller/api.v1.controller";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const prisma = new PrismaClient({
    datasources: {
        db: {
            //@ts-ignore
            url: c.env.DATABASE_URL,
            //@ts-ignore
            engineType: 'library', // Add this line
        },
    },
}).$extends(withAccelerate());
const app = new Hono();
app.get("/", (c) => {
    return c.text("Hello Hono!");
});
app.route("/api/v1", router);
export default app;
