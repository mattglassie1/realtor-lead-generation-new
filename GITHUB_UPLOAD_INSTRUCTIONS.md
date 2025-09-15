# Upload Your Realtor Lead Generation Website to GitHub

## Method 1: GitHub Web Interface (Easiest)

### Step 1: Prepare Your Files
Your project is ready at: `/home/code/realtor-leads/`

### Step 2: Upload to GitHub
1. Go to: https://github.com/mattglassie1/realtor-lead-generation
2. Click "uploading an existing file" or "Add file" → "Upload files"
3. Upload these key files from your project:

**Essential Files to Upload:**
- `app/` folder (entire directory)
- `components/` folder (entire directory) 
- `lib/` folder (entire directory)
- `hooks/` folder (entire directory)
- `public/` folder (entire directory)
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `components.json`
- `vercel.json`
- `README.md`
- `.env.example`
- `.gitignore`

**DO NOT UPLOAD:**
- `.env.local` (contains your secret keys)
- `node_modules/` folder
- `.next/` folder
- `server.log`
- `.git/` folder

### Step 3: Commit the Files
- Add commit message: "Initial commit: Complete realtor lead generation website"
- Click "Commit changes"

## Method 2: GitHub Desktop (Alternative)

1. Download GitHub Desktop
2. Clone your repository: https://github.com/mattglassie1/realtor-lead-generation.git
3. Copy all files (except .env.local, node_modules, .next) to the cloned folder
4. Commit and push through GitHub Desktop

## Method 3: Command Line (If you have Git credentials)

```bash
cd /home/code/realtor-leads
git remote add origin https://github.com/mattglassie1/realtor-lead-generation.git
git branch -M main
git push -u origin main
```

## After Upload: Deploy to Vercel

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - STRIPE_SECRET_KEY
   - STRIPE_PUBLISHABLE_KEY
   - STRIPE_WEBHOOK_SECRET
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
6. Deploy!

Your website will be live with a custom domain and ready for traffic!
