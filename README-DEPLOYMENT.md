# Deploying Your Realtor Lead Generation Website to Vercel

## Quick Setup Instructions

### 1. Create Vercel Account
- Go to https://vercel.com and sign up with GitHub/GitLab/Bitbucket
- Connect your Git provider

### 2. Deploy Your Site
You have two options:

#### Option A: Deploy from Git (Recommended)
1. Push your code to a GitHub repository
2. Import the repository in Vercel dashboard
3. Vercel will auto-detect Next.js and deploy

#### Option B: Deploy via CLI
```bash
export PATH="/var/alt_home/.cache/.bun/bin:$PATH"
vercel login
vercel --prod
```

### 3. Set Environment Variables in Vercel Dashboard
Go to your project settings → Environment Variables and add:

```
STRIPE_SECRET_KEY = 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
STRIPE_PUBLISHABLE_KEY = pk_live_51S7TqKBWNf0QYApPrBVAllYw123d5umd0o7Pf73WnIxLcCSNTFEFx0mXx6JAISJkESid5Ik8wm3GM5YjYIJqB0Jg00NtL7KbU5
STRIPE_WEBHOOK_SECRET = whsec_mc7NkS03gDfoL3sGpRQSnbRjBnYBX8HG
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_51S7TqKBWNf0QYApPrBVAllYw123d5umd0o7Pf73WnIxLcCSNTFEFx0mXx6JAISJkESid5Ik8wm3GM5YjYIJqB0Jg00NtL7KbU5
```

### 4. Database Setup
You'll need a PostgreSQL database. Options:
- **Vercel Postgres** (easiest - built-in)
- **Supabase** (free tier available)
- **Railway** (simple setup)
- **Neon** (serverless Postgres)

Add these environment variables once you have your database:
```
PGUSER = your_db_user
PGPASSWORD = your_db_password
PGDATABASE = realtor_leads
PGHOST = your_db_host
PGPORT = 5432
```

### 5. Custom Domain Setup
1. In Vercel dashboard → Domains
2. Add your custom domain (e.g., yourcompany.com)
3. Update your DNS records as instructed by Vercel
4. SSL certificate will be automatically provisioned

### 6. Stripe Webhook Configuration
1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhook`
3. Select events: `checkout.session.completed`, `customer.subscription.deleted`
4. Use webhook secret: `whsec_mc7NkS03gDfoL3sGpRQSnbRjBnYBX8HG`

## Your Site Features
- ✅ Complete lead capture form
- ✅ 3 subscription tiers ($449, $699, $1,299)
- ✅ Stripe payment processing
- ✅ PostgreSQL data storage
- ✅ Success/cancel page flows
- ✅ Mobile responsive design
- ✅ Professional UI with shadcn/ui

## Performance & Monitoring
- Vercel provides automatic performance monitoring
- Set up alerts in Vercel dashboard
- Consider adding analytics (Google Analytics, Mixpanel, etc.)

## Support
Your website is production-ready and optimized for lead generation campaigns!
