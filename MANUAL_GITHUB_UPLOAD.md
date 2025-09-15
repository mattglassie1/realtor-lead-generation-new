# Manual GitHub Upload Guide

## Step 1: Sign into GitHub
1. Go to: https://github.com/mattglassie1/realtor-lead-generation
2. Sign in with your GitHub credentials

## Step 2: Create Files One by One

### Essential Files (Create these first):

#### 1. package.json
Click "Add file" → "Create new file" → Name: `package.json`
Copy this content:
```json
{
  "name": "realtor-lead-generation",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.1",
    "@radix-ui/react-alert-dialog": "^1.1.2",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.1",
    "@radix-ui/react-checkbox": "^1.1.2",
    "@radix-ui/react-collapsible": "^1.1.1",
    "@radix-ui/react-context-menu": "^2.2.2",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-hover-card": "^1.1.2",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.2",
    "@radix-ui/react-navigation-menu": "^1.2.1",
    "@radix-ui/react-popover": "^1.1.2",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.1",
    "@radix-ui/react-scroll-area": "^1.2.0",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.3",
    "@stripe/stripe-js": "^7.9.0",
    "@types/pg": "^8.15.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.5.1",
    "framer-motion": "^12.0.0",
    "input-otp": "^1.4.1",
    "lucide-react": "^0.468.0",
    "next": "15.1.0",
    "next-themes": "^0.4.4",
    "pg": "^8.16.3",
    "react": "^19.0.0",
    "react-day-picker": "8.10.1",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.0",
    "sonner": "^1.7.1",
    "stripe": "^18.5.0",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "eslint": "^9.17.0",
    "eslint-config-next": "15.1.0",
    "postcss": "^8.5.1",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}
```

#### 2. .env.example
Create file: `.env.example`
```
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key

PGUSER=your_db_user
PGPASSWORD=your_db_password
PGDATABASE=realtor_leads
PGHOST=your_db_host
PGPORT=5432

NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

#### 3. README.md
Create file: `README.md`
```markdown
# Realtor Lead Generation Website

A complete lead generation website for real estate professionals with automated subscription billing and lead management.

## 🚀 Features

- **Professional Landing Page** - High-converting design optimized for realtor sign-ups
- **3 Subscription Tiers** - $449, $699, and $1,299 monthly packages
- **Stripe Integration** - Secure payment processing with automatic billing
- **Lead Management** - PostgreSQL database to store and track all leads
- **Responsive Design** - Mobile-optimized with modern UI components
- **Success/Cancel Flows** - Complete user experience with proper redirects

## 💰 Subscription Packages

| Package | Price | Leads/Month | Features |
|---------|-------|-------------|----------|
| Starter | $449 | 20 leads | Verified contacts, 15-mile radius, Email support |
| Popular | $699 | 50 leads | All Starter features + Priority support |
| Pro | $1,299 | 100 leads | All features + Dedicated support + Analytics |

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **UI Components**: shadcn/ui, Tailwind CSS
- **Payment**: Stripe Checkout & Subscriptions
- **Database**: PostgreSQL
- **Deployment**: Vercel (recommended)

## 📋 Quick Setup

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd realtor-leads
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and fill in your values.

### 3. Run Development Server
```bash
npm run dev
```

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

## 📄 License

Proprietary - All rights reserved.
```

## Step 3: Create Folder Structure

Create these folders by clicking "Create new file" and using folder/filename format:

1. `app/page.tsx` (this creates the app folder)
2. `app/layout.tsx`
3. `app/api/create-checkout/route.ts`
4. `app/api/webhook/route.ts`
5. `app/success/page.tsx`
6. `app/cancel/page.tsx`
7. `components/ui/button.tsx`
8. `lib/db.ts`
9. `lib/stripe.ts`

## Step 4: File Contents

I'll provide the contents for each file in the next steps...
