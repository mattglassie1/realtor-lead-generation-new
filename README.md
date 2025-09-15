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
bun install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

Required variables:
- Stripe keys (secret, publishable, webhook secret)
- PostgreSQL database credentials

### 3. Database Setup
The app will automatically create the required tables on first run.

### 4. Run Development Server
```bash
bun run dev
```

## 🚀 Deployment to Vercel

### Option 1: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Option 2: Direct Deploy
```bash
vercel --prod
```

## 🔧 Configuration

### Stripe Setup
1. Create Stripe account and get API keys
2. Set up webhook endpoint: `https://yourdomain.com/api/webhook`
3. Configure webhook events: `checkout.session.completed`, `customer.subscription.deleted`

### Database Options
- **Vercel Postgres** (easiest integration)
- **Supabase** (free tier available)
- **Railway** (simple setup)
- **Neon** (serverless PostgreSQL)

## 📊 Lead Data Structure

The system captures and stores:
- Full name and contact information
- Brokerage details and license info
- Target zip code (15-mile radius)
- Selected subscription package
- Stripe customer and subscription IDs
- Signup timestamp

## 🎯 Marketing Ready

This website is optimized for:
- **Google Ads** campaigns
- **Facebook/Instagram** advertising
- **SEO** with proper meta tags
- **Conversion tracking** integration
- **A/B testing** capabilities

## 📈 Performance Features

- **99.99% Uptime** with Vercel hosting
- **Global CDN** for fast loading worldwide
- **Automatic SSL** certificates
- **Performance monitoring** built-in
- **Auto-scaling** for traffic spikes

## 🔒 Security

- **Stripe PCI Compliance** for payment processing
- **Environment variable** protection
- **Webhook signature** verification
- **SQL injection** prevention
- **HTTPS** enforcement

## 📞 Support

For technical support or customization requests, contact your development team.

## 📄 License

Proprietary - All rights reserved.
