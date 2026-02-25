# Deployment Guide for Exelus Engineering Website

## Platform-Specific Instructions

### 1. Vercel Deployment (Recommended)

#### Option A: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: Vercel Dashboard (Git Integration)
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Framework Preset: Select "Vite"
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click "Deploy"

#### Option C: Vercel Dashboard (Manual Upload)
1. Run `npm run build` locally
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project" → "Upload" tab
4. Drag and drop the `dist` folder
5. Project name: `exelus-engineering`
6. Click "Deploy"

### 2. Hostinger Deployment

#### Option A: File Manager (hPanel)
1. Run `npm run build` locally
2. Zip the `dist` folder contents (not the folder itself)
3. Log in to Hostinger hPanel
4. Go to "Websites" → "Manage" → "File Manager"
5. Navigate to `public_html` (or your domain folder)
6. Delete existing files (backup first if needed)
7. Upload the zip file and extract
8. Ensure `.htaccess` file is present in root

#### Option B: FTP Upload
1. Run `npm run build` locally
2. Use FileZilla or any FTP client
3. Connect to Hostinger FTP (credentials in hPanel)
4. Upload `dist` folder contents to `public_html`
5. Verify `.htaccess` file is uploaded

#### Option C: Git Integration (Hostinger Business/Cloud plans)
1. In hPanel, go to "Git" section
2. Connect your GitHub repository
3. Set deployment branch: `main` or `master`
4. Set deployment directory: `public_html`
5. Add build command: `npm install && npm run build`
6. Set source directory: `dist`

## Pre-Deployment Checklist

- [ ] Run `npm run build` locally without errors
- [ ] Test all pages and navigation
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form functionality
- [ ] Verify brochure download works
- [ ] Check all external links

## Environment Variables (if needed)

Create `.env` file in project root:
```env
# For local development
VITE_API_KEY=your_api_key_here
```

## Build Output

The build creates a `dist` folder containing:
- `index.html` - Main entry point
- `assets/` - JS, CSS, and media files
- `.htaccess` - Apache configuration (for Hostinger)

## Troubleshooting

### 404 Errors on Refresh (Hostinger)
- Ensure `.htaccess` file is in the root directory
- Check Apache mod_rewrite is enabled

### 404 Errors on Refresh (Vercel)
- `vercel.json` is already configured for SPA routing
- No additional action needed

### Images Not Loading
- Check image paths use relative paths (`/image.jpg` not `image.jpg`)
- Verify images are in the `public` folder

### Build Fails
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version is 18 or higher: `node --version`
