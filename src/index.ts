import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (context) => {
  return context.text("Hello Hono!");
});

export default app;
