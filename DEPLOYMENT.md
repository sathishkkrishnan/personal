# Quick GitHub Pages Deployment Guide

This is a quick reference for deploying your resume to GitHub Pages.

## 🚀 Quick Deploy (3 Steps)

### 1. Update Configuration
Edit `config.js` and set the correct `pathPrefix`:

**For personal site (yourusername.github.io):**
```javascript
pathPrefix: `/`,
```

**For project site (yourusername.github.io/repository-name):**
```javascript
pathPrefix: `/repository-name/`,
```

### 2. Deploy
Run the deploy command:
```bash
npm run deploy
```

### 3. Enable GitHub Pages
1. Go to your repository **Settings**
2. Scroll to **Pages** section
3. Select **gh-pages** branch as source
4. Save

Your site will be live at:
- Personal: `https://yourusername.github.io`
- Project: `https://yourusername.github.io/repository-name`

## 🔧 Configuration Files to Update

### gatsby-config.js
```javascript
module.exports = {
  pathPrefix: `/repository-name`, // Remove for personal site
  // ... rest of config
}
```

### config.js
```javascript
module.exports = {
  pathPrefix: `/repository-name/`, // Set to `/` for personal site
  // ... rest of config
}
```

## ⚠️ Common Issues

**404 Error:** Check pathPrefix matches repository name
**Missing Styles:** Ensure you used `npm run deploy` not `npm run build`
**Images Not Loading:** Use relative paths in config, not absolute URLs

## 🎯 Repository Naming

**For Personal Site:**
- Repository name: `yourusername.github.io`
- URL: `https://yourusername.github.io`
- pathPrefix: `/`

**For Project Site:**
- Repository name: `my-resume` (or any name)
- URL: `https://yourusername.github.io/my-resume`
- pathPrefix: `/my-resume/`

## 🔄 Update and Redeploy

After making changes:
1. Edit `config.js` with new content
2. Run `npm run deploy`
3. Changes will be live in a few minutes

That's it! Your professional resume is now live on GitHub Pages. 🎉
