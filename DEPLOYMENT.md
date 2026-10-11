# Deployment Guide for Top Rise Fusion Restaurant Website

## 🎯 Overview

This guide will help you deploy the Top Rise Fusion restaurant website to production.

## 📋 Pre-Deployment Checklist

- [ ] Update phone numbers in `lib/data.ts`
- [ ] Update email addresses in `lib/data.ts`
- [ ] Update WhatsApp number in `lib/data.ts`
- [ ] Add actual restaurant images to `/public/gallery/`
- [ ] Add hero background image `/public/hero-bg.jpg`
- [ ] Add Open Graph image `/public/og-image.jpg`
- [ ] Update domain in `app/layout.tsx`
- [ ] Add favicon to `/public/`

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Custom Domain**:
   - Go to Project Settings > Domains
   - Add `toprise.co.ke` or your chosen domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build and Deploy**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect to GitHub for continuous deployment

### Option 3: Self-Hosted / VPS

1. **Install Dependencies**:
   ```bash
   npm install --production
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Start Server**:
   ```bash
   npm start
   ```

4. **Configure PM2** (optional):
   ```bash
   npm install -g pm2
   pm2 start npm --name "top-rise-restaurant" -- start
   pm2 save
   pm2 startup
   ```

## 🔧 Post-Deployment Configuration

### 1. Add Google Maps Embed

Edit `app/contact/page.tsx` and replace the placeholder with actual Google Maps embed code:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

### 2. Update Analytics

Add Google Analytics in `app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 3. Set Up Email Integration

For reservation form submissions, integrate with:

**Option A: Email Service (SendGrid)**
```bash
npm install @sendgrid/mail
```

**Option B: Form Service**
- Formspree
- Netlify Forms
- Getform

### 4. Configure WhatsApp Business API

1. Register with WhatsApp Business API
2. Update the WhatsApp link in `lib/data.ts`
3. Create WhatsApp templates for auto-responses

### 5. SEO Setup

1. **Google Search Console**:
   - Add your site
   - Submit sitemap.xml

2. **Google Business Profile**:
   - Create/claim business listing
   - Add photos, hours, menu link

3. **Submit to Directories**:
   - TripAdvisor
   - Yelp
   - Zomato (if available in Kenya)

## 📱 Social Media Integration

### Update Social Links

Edit `lib/data.ts`:

```typescript
social: {
  instagram: "",
  facebook: "",
  google: "https://maps.google.com/?cid=Top RiseFusion",
},
```

### Add Social Meta Tags

Already configured in `app/layout.tsx`. Just update:
- OG image: `/public/og-image.jpg` (1200x630px)
- Twitter card image: Same as OG image

## 🔒 Security Checklist

- [ ] Use HTTPS (automatic on Vercel/Netlify)
- [ ] Validate form inputs (already implemented)
- [ ] Sanitize user inputs
- [ ] Set up rate limiting for forms
- [ ] Configure CORS if using API

## 📊 Monitoring

### Set Up Uptime Monitoring

Services:
- UptimeRobot (free tier available)
- StatusCake
- Pingdom

### Error Tracking

Add Sentry:
```bash
npm install @sentry/nextjs
npx @sentry/wizard
```

## 🔄 Continuous Deployment

With GitHub + Vercel:
1. Push to main branch
2. Automatic deployment triggers
3. Preview deployments for PRs

## 📞 Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs

## ✅ Launch Checklist

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Mobile responsive design verified
- [ ] SEO metadata verified
- [ ] Social sharing works
- [ ] Contact information updated
- [ ] Analytics configured
- [ ] Backup strategy in place
- [ ] SSL certificate active

## 🎉 You're Live!

Your Top Rise Fusion restaurant website is now live and ready to welcome customers!
