# GitHub Pages Deployment Guide with Custom Domain

Complete guide for deploying a Vite/React application to GitHub Pages with custom domain configuration.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Git Setup](#initial-git-setup)
3. [Configure Project for GitHub Pages](#configure-project-for-github-pages)
4. [Deploy to GitHub Pages](#deploy-to-github-pages)
5. [Custom Domain Setup](#custom-domain-setup)
6. [DNS Configuration](#dns-configuration)
7. [Troubleshooting](#troubleshooting)
8. [Future Updates](#future-updates)

---

## Prerequisites

- Node.js and npm installed
- Git installed
- GitHub account
- GitHub repository created
- Custom domain (optional)

---

## Initial Git Setup

### 1. Check Git Status

```powershell
git status
```

**If not initialized:**
```powershell
git init
```

### 2. Add Remote Repository

```powershell
git remote add origin https://github.com/USERNAME/REPOSITORY.git
```

**Verify:**
```powershell
git remote -v
```

### 3. Stage and Commit Files

```powershell
# Stage all files
git add .

# Commit
git commit -m "Initial commit"

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Configure Project for GitHub Pages

### 1. Install gh-pages Package

```powershell
npm install --save-dev gh-pages
```

### 2. Update `vite.config.ts`

**For GitHub subdirectory (username.github.io/repository-name):**

```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

**For custom domain:**

```typescript
export default defineConfig({
  base: '/',
  // ... rest of config
})
```

### 3. Update `package.json`

Add deployment scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 4. Update `App.tsx` (React Router)

**For GitHub subdirectory:**

```tsx
<BrowserRouter basename="/repository-name">
  <Routes>
    {/* routes */}
  </Routes>
</BrowserRouter>
```

**For custom domain:**

```tsx
<BrowserRouter>
  <Routes>
    {/* routes */}
  </Routes>
</BrowserRouter>
```

---

## Deploy to GitHub Pages

### 1. Build and Deploy

```powershell
npm run deploy
```

**What happens:**
- Runs `npm run build` (creates `dist/` folder)
- Creates/updates `gh-pages` branch
- Pushes build files to `gh-pages` branch

### 2. Enable GitHub Pages

1. Go to repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### 3. Verify Deployment

Your site will be live at:
```
https://username.github.io/repository-name/
```

Wait 2-5 minutes for deployment to complete.

---

## Custom Domain Setup

### 1. Add Custom Domain on GitHub

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter:
   ```
   subdomain.yourdomain.com
   ```
3. Click **Save**
4. Wait for DNS check

### 2. Update Code for Custom Domain

**Update `vite.config.ts`:**
```typescript
base: '/',  // Change from '/repository-name/' to '/'
```

**Update `App.tsx`:**
```tsx
<BrowserRouter>  // Remove basename prop
```

### 3. Redeploy

```powershell
npm run deploy
```

---

## DNS Configuration

### Cloudflare Setup

1. Log in to Cloudflare dashboard
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **Add record**
5. Configure:
   - **Type:** CNAME
   - **Name:** subdomain (e.g., `jwellery-store`)
   - **Target:** `username.github.io`
   - **Proxy status:** DNS only (gray cloud ☁️)
   - **TTL:** Auto
6. Click **Save**

### Other DNS Providers

**GoDaddy:**
```
Type: CNAME
Name: subdomain
Value: username.github.io
TTL: 1 Hour
```

**Namecheap:**
```
Type: CNAME Record
Host: subdomain
Value: username.github.io
TTL: Automatic
```

### Verify DNS Propagation

```powershell
nslookup subdomain.yourdomain.com
```

**Expected result:**
```
Name:    username.github.io
Addresses:  185.199.108.153
            185.199.109.153
            185.199.110.153
            185.199.111.153
```

---

## Enable HTTPS

1. Wait for DNS verification (5-30 minutes)
2. Go to **Settings** → **Pages**
3. Click **"Check again"** if DNS check failed
4. After successful verification, check **"Enforce HTTPS"**

**Note:** HTTPS certificate may take 24-48 hours to provision.

---

## Troubleshooting

### 404 Error After Deployment

**Cause:** Missing `basename` in React Router or incorrect `base` in Vite config.

**Solution:**
- Verify `vite.config.ts` has correct `base` value
- Verify `BrowserRouter` has correct `basename`
- Redeploy: `npm run deploy`

### DNS Check Unsuccessful

**Cause:** DNS record not configured or not propagated.

**Solution:**
- Verify CNAME record in DNS settings
- Wait 10-30 minutes for propagation
- Use `nslookup` to verify DNS
- Click "Check again" on GitHub

### Assets Not Loading (CSS/JS 404)

**Cause:** Incorrect `base` path in `vite.config.ts`.

**Solution:**
- For GitHub subdirectory: `base: '/repository-name/'`
- For custom domain: `base: '/'`
- Redeploy after fixing

### Cloudflare Proxy Issues

**Cause:** Orange cloud (proxied) instead of gray cloud (DNS only).

**Solution:**
- Change proxy status to "DNS only" (gray cloud)
- Wait 5 minutes
- Click "Check again" on GitHub

---

## Future Updates

### Making Changes and Redeploying

```powershell
# 1. Make code changes

# 2. Commit to main branch
git add .
git commit -m "Update: description of changes"
git push

# 3. Deploy to GitHub Pages
npm run deploy
```

**Note:** You don't need to push to `main` before deploying, but it's good practice to keep your repository in sync.

---

## Common Commands Reference

```powershell
# Check Git status
git status

# View commit history
git log --oneline

# Check current branch
git branch

# View remote repository
git remote -v

# Pull latest changes
git pull

# Deploy to GitHub Pages
npm run deploy

# Check DNS
nslookup your-domain.com

# Kill Node processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
```

---

## Configuration Summary

### For GitHub Subdirectory Deployment

**vite.config.ts:**
```typescript
base: '/repository-name/'
```

**App.tsx:**
```tsx
<BrowserRouter basename="/repository-name">
```

**URL:**
```
https://username.github.io/repository-name/
```

### For Custom Domain Deployment

**vite.config.ts:**
```typescript
base: '/'
```

**App.tsx:**
```tsx
<BrowserRouter>
```

**DNS:**
```
CNAME: subdomain → username.github.io
```

**URL:**
```
https://subdomain.yourdomain.com
```

---

## Important Notes

- Always use `base: '/'` for custom domains
- Always use `base: '/repository-name/'` for GitHub subdirectory
- DNS propagation can take 5 minutes to 48 hours
- HTTPS certificate provisioning takes 24-48 hours
- Clear browser cache (`Ctrl + Shift + R`) when testing
- Use incognito/private window to avoid cache issues

---

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [DNS Checker Tool](https://dnschecker.org/)
- [Cloudflare DNS Documentation](https://developers.cloudflare.com/dns/)

---

**Last Updated:** January 2026
