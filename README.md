# GeoIP API

A lightweight Cloudflare Worker that returns geolocation data (latitude, longitude, and more) for incoming requests using Cloudflare's built-in geolocation capabilities.

## Features

- Returns precise geolocation data for any incoming request
- Built with [Hono](https://hono.dev/) - a fast, lightweight web framework
- Runs on Cloudflare's global edge network
- Zero external dependencies for geolocation
- TypeScript support

## Installation

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

The API will be available at `http://localhost:8787`

## API Endpoint

### `GET /`

Returns geolocation information for the requesting IP address.

**Response:**

```json
{
  "ip": "203.0.113.1",
  "latitude": 37.7749,
  "longitude": -122.4194,
  "city": "San Francisco",
  "country": "US",
  "region": "California",
  "timezone": "America/Los_Angeles",
  "postalCode": "94102",
  "metroCode": "807",
  "colo": "SFO"
}
```

**Response Fields:**

- `ip` - The requesting IP address
- `latitude` - Latitude coordinate (number)
- `longitude` - Longitude coordinate (number)
- `city` - City name
- `country` - ISO 3166-1 alpha-2 country code
- `region` - Region/state name
- `timezone` - IANA timezone identifier
- `postalCode` - Postal/ZIP code
- `metroCode` - Metro code (US only)
- `colo` - Cloudflare datacenter code serving the request

## Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

## Type Generation

Generate TypeScript types based on your Worker configuration:

```bash
npm run cf-typegen
```

## How It Works

This worker leverages Cloudflare's automatic geolocation capabilities. When a request hits a Cloudflare Worker, the platform automatically adds geolocation data to the `request.cf` object based on the incoming IP address. This means:

- No external API calls required
- Fast response times
- No additional costs
- High accuracy using Cloudflare's global network data

## Tech Stack

- [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless execution environment
- [Hono](https://hono.dev/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) - CLI for Cloudflare Workers

## License

MIT
