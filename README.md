This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form & email (Resend on AWS Amplify)

The contact form posts to a server route (`src/app/api/contact/route.ts`) that
sends email through [Resend](https://resend.com). This route needs a Node.js
runtime, so the site is **not** a pure static export — it deploys on Amplify as
a Next.js SSR/compute app (most pages are static; only `/api/contact` runs on
the server).

The API key is **never** committed. It lives in environment variables.

### Local development

```bash
cp .env.example .env.local   # then paste your real RESEND_API_KEY
npm run dev
```

`.env.local` is gitignored.

### Production (AWS Amplify Console)

1. App settings → **Environment variables** → add:
   - `RESEND_API_KEY` (required) — your Resend key (`re_...`)
   - `CONTACT_TO` (optional) — override the recipient (defaults to the site email)
   - `CONTACT_FROM` (optional) — sender address on a Resend-verified domain
2. Redeploy. The build (`amplify.yml`) copies these into `.env.production` on the
   build host so the SSR runtime can read them. That file is generated on the
   build host only and is gitignored.
3. To send from your own domain (not just to the account owner), verify the
   domain in Resend and set `CONTACT_FROM` accordingly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
