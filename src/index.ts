import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (context) => {
  const cf = context.req.raw.cf;

  if (!cf) {
    return context.json({ error: "Geolocation data not available" }, 500);
  }

  return context.json({
    ip: context.req.header("cf-connecting-ip"),
    latitude: cf.latitude ? parseFloat(cf.latitude as string) : null,
    longitude: cf.longitude ? parseFloat(cf.longitude as string) : null,
    city: cf.city,
    country: cf.country,
    region: cf.region,
    timezone: cf.timezone,
    postalCode: cf.postalCode,
    metroCode: cf.metroCode,
    colo: cf.colo,
  });
});

export default app;
