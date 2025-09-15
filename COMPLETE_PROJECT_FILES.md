# Complete Realtor Lead Generation Website Files

## Instructions
Copy each file content below and create the files in your GitHub repository or local project.

---

## File: package.json
```json
{
  "name": "realtor-lead-generation",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.1",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@stripe/stripe-js": "^7.9.0",
    "@types/pg": "^8.15.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.542.0",
    "motion": "^12.23.12",
    "next": "15.5.2",
    "next-themes": "^0.4.6",
    "pg": "^8.16.3",
    "react": "19.1.0",
    "react-day-picker": "^9.9.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.62.0",
    "react-resizable-panels": "^3.0.5",
    "recharts": "2.15.4",
    "sonner": "^2.0.7",
    "stripe": "^18.5.0",
    "tailwind-merge": "^3.3.1",
    "vaul": "^1.1.2",
    "zod": "^4.1.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.5.2",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.8",
    "typescript": "^5"
  }
}
```

---

## File: .env.example
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

---

## File: .gitignore
```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/

# Production
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
server.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# Temporary folders
tmp/
temp/

# Archive files
*.tar.gz
*.zip
```

---

## File: README.md
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

- **Frontend**: Next.js 15, React, TypeScript
- **UI Components**: shadcn/ui, Tailwind CSS
- **Payment**: Stripe Checkout & Subscriptions
- **Database**: PostgreSQL
- **Deployment**: Vercel (recommended)

## 📋 Quick Setup

### 1. Clone & Install
```bash
git clone https://github.com/mattglassie1/realtor-lead-generation.git
cd realtor-lead-generation
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and fill in your values:
- Your Stripe keys (secret, publishable, webhook secret)
- PostgreSQL database credentials

### 3. Run Development Server
```bash
npm run dev
```

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

## 🔧 Stripe Setup

1. Create Stripe account and get API keys
2. Set up webhook endpoint: `https://yourdomain.com/api/webhook`
3. Configure webhook events: `checkout.session.completed`, `customer.subscription.deleted`

## 📊 Database Setup

The app will automatically create the required tables on first run. Recommended database providers:
- **Vercel Postgres** (easiest integration)
- **Supabase** (free tier available)
- **Railway** (simple setup)
- **Neon** (serverless PostgreSQL)

## 📄 License

Proprietary - All rights reserved.
```

---

## File: next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

---

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## File: vercel.json
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "env": {
    "STRIPE_SECRET_KEY": "@stripe_secret_key",
    "STRIPE_PUBLISHABLE_KEY": "@stripe_publishable_key", 
    "STRIPE_WEBHOOK_SECRET": "@stripe_webhook_secret",
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY": "@stripe_publishable_key",
    "PGUSER": "@pguser",
    "PGPASSWORD": "@pgpassword",
    "PGDATABASE": "@pgdatabase",
    "PGHOST": "@pghost",
    "PGPORT": "@pgport"
  }
}
```

---

## File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, MapPin, TrendingUp } from 'lucide-react';

const packages = [
  {
    id: '20-leads',
    name: '20 Leads',
    price: '$449',
    description: '20 high-quality leads per month',
    features: ['Verified contact information', '15-mile radius targeting', 'Monthly delivery', 'Email support']
  },
  {
    id: '50-leads',
    name: '50 Leads',
    price: '$699',
    description: '50 high-quality leads per month',
    features: ['Verified contact information', '15-mile radius targeting', 'Monthly delivery', 'Priority support'],
    popular: true
  },
  {
    id: '100-leads',
    name: '100 Leads',
    price: '$1,299',
    description: '100 high-quality leads per month',
    features: ['Verified contact information', '15-mile radius targeting', 'Monthly delivery', 'Dedicated support', 'Lead analytics']
  }
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brokerage: '',
    zipCode: '',
    packageType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.brokerage && formData.zipCode && formData.packageType;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">RealEstate Leads Pro</h1>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Trusted by 1000+ Realtors
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get High-Quality Real Estate Leads
            <span className="text-blue-600"> Delivered Monthly</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop chasing leads. Start closing deals. Our verified leads are delivered directly to your inbox, 
            targeted to your specific zip code with a 15-mile radius.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">Verified Contact Info</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">15-Mile Targeting</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-purple-500" />
              <span className="text-gray-700">Monthly Delivery</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Cards */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Choose Your Package</h3>
            <div className="space-y-4">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    formData.packageType === pkg.id 
                      ? 'ring-2 ring-blue-500 shadow-lg' 
                      : 'hover:shadow-md'
                  } ${pkg.popular ? 'border-blue-500' : ''}`}
                  onClick={() => handleInputChange('packageType', pkg.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>
                    </div>
                    {pkg.popular && (
                      <Badge className="w-fit bg-blue-600 hover:bg-blue-700">Most Popular</Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Start Getting Leads Today</CardTitle>
                <CardDescription className="text-center">
                  Fill out your information below to get started with your monthly lead subscription
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brokerage">Brokerage Information *</Label>
                    <Textarea
                      id="brokerage"
                      value={formData.brokerage}
                      onChange={(e) => handleInputChange('brokerage', e.target.value)}
                      placeholder="RE/MAX Premier, License #12345"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Target Zip Code *</Label>
                    <Input
                      id="zipCode"
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      placeholder="90210"
                      maxLength={5}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      Leads will be targeted within a 15-mile radius of this zip code
                    </p>
                  </div>

                  {!formData.packageType && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        Please select a package above to continue
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      `Subscribe & Pay ${formData.packageType ? packages.find(p => p.id === formData.packageType)?.price : ''}`
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to our terms of service. Cancel anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Realtors Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">1000+ Active Realtors</h4>
              <p className="text-gray-600">Trusted by real estate professionals nationwide</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Verified Leads Only</h4>
              <p className="text-gray-600">Every lead is verified for accuracy and quality</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Proven Results</h4>
              <p className="text-gray-600">Average 15% conversion rate across all clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
