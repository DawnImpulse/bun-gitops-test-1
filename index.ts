import { Hono } from "hono";

const app = new Hono();

app.get("/random", (c) => {
  return c.text(crypto.randomUUID());
});

app.get("/", (c) => {
  return c.text("WORKING");
});

const port = parseInt(process.env.PORT || "3000");

export default {
  port,
  fetch: app.fetch,
};
