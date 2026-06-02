# Red Crab Seafood

![App Preview](https://imgix.cosmicjs.com/fdc033b0-5e5c-11f1-b0c4-116f33f477c7-autopilot-photo-1414235077428-338989a2e8c0-1780388891235.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A bold, modern, and fully responsive website for **Red Crab Seafood** — a destination for seafood lovers craving fresh flavors and an unforgettable Cajun seafood boil experience. Built with Next.js and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🦞 **Dynamic Menu** — Browse seafood favorites like crab legs, shrimp, lobster, and crawfish with spice levels and pricing
- 📍 **Locations** — View restaurant locations with addresses, hours, phone numbers, and order links
- ⭐ **Customer Testimonials** — Real reviews from happy guests with star ratings
- 👤 **Team Members** — Meet the people behind the bold flavors
- 📱 **Fully Responsive** — Beautiful layouts that work across all devices
- ⚡ **Server-Side Rendering** — Fast, SEO-optimized pages powered by Next.js App Router
- 🎨 **Bold Coastal Design** — Warm reds, deep navy, and clean typography inspired by the Red Crab brand

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a1e93b74f8c03c5a96d38ac&clone_repository=6a1e94db4f8c03c5a96d38fd)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: Red Crab Sea Foods is the perfect destination for seafood lovers looking for fresh flavors and a memorable dining experience. Our menu features a wide variety of seafood favorites, including crab legs, shrimp, lobster, crawfish, and more, all prepared with bold seasonings and high-quality ingredients. Whether you're planning a family dinner, a casual meal with friends, or a special celebration, we provide a welcoming atmosphere and exceptional service. Known for delivering delicious meals packed with flavor, Red Crab Sea Foods has become a favorite choice for anyone searching for juicy seafood arlington and an unforgettable seafood feast."

### Code Generation Prompt

> Build a Next.js application for a company website called "Redcrab Seafood". The content is managed in Cosmic CMS with the following object types: menu-items, team-members, locations, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) — Strict typing throughout
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) or Node.js 18+
- A Cosmic account with a bucket containing the content types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are configured automatically when you deploy via Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all menu items with depth for connected objects
const response = await cosmic.objects
  .find({ type: 'menu-items' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const menuItems = response.objects
```

## Cosmic CMS Integration

This app leverages four Cosmic object types:

- **menu-items** — name, description, price, category, spice_level, featured_image
- **team-members** — name, role, bio, photo
- **locations** — location_name, address, phone, hours, description, delivery_link, pickup_link, featured_image
- **testimonials** — customer_name, review, rating, source, location

All data is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) for optimal performance and security.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Connect your repository
2. Set build command to `bun run build`
3. Add environment variables
4. Deploy

<!-- README_END -->