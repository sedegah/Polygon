# Polygon

Polygon is a personal project showcase built with Next.js (App Router), TypeScript, and Tailwind CSS. It presents featured projects, detailed project pages, and a responsive UI with light/dark theme support.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI primitives
- PNPM

## Getting Started

### Prerequisites

- Node.js 20+
- PNPM 10+

### Installation

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `pnpm dev`: Start local development server
- `pnpm build`: Build production app
- `pnpm start`: Start production server
- `pnpm lint`: Run linting

## Project Structure

```text
app/                Next.js app routes and layouts
components/         Shared UI and feature components
hooks/              Reusable React hooks
lib/                Project data and utility logic
public/             Static assets
styles/             Global style files
```

## Content Management

Project entries are defined in `lib/projects.ts`.

Each project can include:

- `id`
- `name`
- `description`
- `url`
- `image`
- `tags`
- `year`
- `color`

## Deployment

This project includes `netlify.toml` and can be deployed to Netlify.

General deployment flow:

1. Connect repository to Netlify
2. Set build command to `pnpm build`
3. Set publish directory according to your Netlify configuration
4. Add any required environment variables

You can also deploy to Vercel with default Next.js settings.

## Notes

- If TypeScript reports missing Next.js types, ensure `next-env.d.ts` exists and dependencies are installed.
- Keep project image assets in `public/` and update paths in `lib/projects.ts`.
