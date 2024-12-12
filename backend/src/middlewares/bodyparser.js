export const bodyparser = async (c, next) => {
    await c.req.parseBody();
    c.req.body = c.req.parsedBody;
    next();
};
//not working
