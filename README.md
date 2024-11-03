# NextKit Form - A Waitlist & Newsletter Powered By KIT API

![Image](/public/nextkit-hero.png)

A simple Next.js template for waitlist or newsletter sign-ups, integrated with the KIT API (formerly ConvertKit). Features Headless UI for customization and Framer Motion for smooth animations—ideal for capturing emails with style and ease.

You can follow the steps below, or you can see the full code in the [GitHub Repo](https://github.com/JPerez00/next-kit-form). If you do check it out, then don't forget the star the project 😉

If you want to follow step by step and understand the reasoning behind it, check out the blog [here](https://www.jorge-perez.dev/blog/nextkit-form-template)

## Live Demo

[https://next-kit-form.vercel.app/](https://next-kit-form.vercel.app/)

## Main Features

- Built with Next.js 14 and the App Router
- TypeScript Integration
- Framer Motion Animations
- Headless UI Components
- Kit API Integration (Formerly ConvertKit)
- Client-Side Email Validation & Server-Side Validation
- Secure API Routes
- Environment Variables Configuration

## Prerequisites

- Node.js version 14 or later
- npm version 6 or later (or yarn)

## Customize & Edit

- Modify the content in app/page.tsx to change headings, descriptions, and other text.
- To use a different email service provider, update the API route in app/api/subscribe/route.ts accordingly.
- Ensure you update environment variables and API endpoints as needed.

## Clone & Run Locally

First, execute create-next-app with npx to bootstrap the example:

```bash
npx create-next-app --example https://github.com/JPerez00/next-kit-form your-project-name-here
```

Create a `".env.local"` file (which should never be committed to version control), and add your info:

```bash
CONVERTKIT_API_SECRET=your_convertkit_api_secret
CONVERTKIT_FORM_ID=your_form_id_number
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Clone & Deploy

When deploying the project to Vercel, add the same environment variable to your Vercel project.

Navigate to your Vercel dashboard, select your project, go to the "Settings" tab, and then to "Environment Variables."

```bash
CONVERTKIT_API_SECRET=your_convertkit_api_secret
CONVERTKIT_FORM_ID=your_form_id_number
```

## License

This project is open source and available under the MIT License.
