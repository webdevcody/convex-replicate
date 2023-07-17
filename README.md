# Use Convex with Replicate to create images from doodles

Stack:
- [Convex](https://convex.dev)
- [Replicate](https://replicate.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

Install packages:
```bash
npm install
```

Continuously deploy to the Convex backend
(this will create a (free) Convex account if you don't have one):
```bash
npx convex dev
```

Get a [Replicate API key](https://replicate.com/account/api-tokens)
(free to try) and add it to your
[environment variables](https://docs.convex.dev/production/environment-variables)
in the [Convex Dashboard](https://dashboard.convex.dev)

In another terminal, run the frontend:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Editing files in `convex/` will auto-update your "Dev" deployment in Convex.

## Learn More

To learn more about Convex, check out the following resources:
- [Docs](https://docs.convex.dev) has details on the platform and APIs.
- [Stack](https://stack.convex.dev) has tips and best practices.

## Deploy the frontend on Vercel or Netlify

The easiest way to deploy your Next.js frontend is to use the [Vercel Platform](https://vercel.com/new?filter=next.js) from the creators of Next.js, or [Netlify](https://netlify.com).

See the [Convex docs on production deployments](https://docs.convex.dev/production/hosting/)
for details on deploying a production backend.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
