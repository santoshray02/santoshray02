# Deployment Guide

## Prerequisites
- Firebase CLI installed (✓ already installed)
- Firebase project configured (✓ already set up)

## First-time Setup
1. Login to Firebase:
   ```bash
   firebase login
   ```

2. Follow the browser authentication flow

## Deployment Commands

### Deploy the Executive Website (Green Theme)
```bash
npm run build:executive && firebase deploy
```

### Deploy Other Versions
- Professional version: `npm run build:professional && firebase deploy`
- Minimal version: `npm run build:minimal && firebase deploy`

### Deploy Everything (GitHub + Firebase)
```bash
./deploy.sh
```
or
```bash
npm run deploy:all
```

## Manual Deployment Steps
1. Build the website: `npm run build:executive`
2. Deploy to Firebase: `firebase deploy`
3. Your site will be live at: https://santoshray.in/

## Switching Between Versions
- Edit `content/profile.json` for professional content
- Edit `content/website-config.json` for minimal version
- Use different build commands to generate different styles

## Current Status
- ✅ Website built and ready
- ⏳ Awaiting Firebase authentication
- ✅ GitHub profile updated