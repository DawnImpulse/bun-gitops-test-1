import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text(crypto.randomUUID());
});
const port = parseInt(process.env.PORT || "3000");

export default {
  port,
  fetch: app.fetch,
};
