# Quick Start Guide - 5 Minute Setup

## Fastest Path to Deployment

### 1. Create GitHub Repo (2 minutes)
1. Go to GitHub.com
2. Click "+" → New repository
3. Name: `yourusername.github.io` (use YOUR username!)
4. Public, no README
5. Create repository

### 2. Push Code (2 minutes)
```bash
cd portfolio-site
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Munongedzi/munongedzi.github.io.git
git branch -M main
git push -u origin main
```

### 3. Enable Pages (1 minute)
1. Repo → Settings → Pages
2. Source: Deploy from branch
3. Branch: main, Folder: / (root)
4. Save
5. Wait 2 minutes, then visit: https://yourusername.github.io

## Done! 🎉

## Essential Customization (Do This First)

### Replace in `index.html`:
- Search for "mmunongedzi@gmail.com" → your email
- Search for "placeholder" → your LinkedIn username
- Search for "+1 <placeholder>" → your phone

### Upload to `assets/img/`:
- `portrait.jpg` - your photo
- `about-photo.jpg` - your photo
- `contact-photo.jpg` - your photo

### Edit `_config.yml`:
```yaml
title: Your Name
email: your@email.com
```

Then:
```bash
git add .
git commit -m "Update contact info and photos"
git push
```

Wait 2 minutes → See updates live!

## Common Commands

**Update site:**
```bash
git add .
git commit -m "Description of changes"
git push
```

**Add new project:**
1. Create file: `_projects/project-name.md`
2. Copy template from README
3. Commit and push

**Add blog post:**
1. Create file: `_posts/2024-12-15-post-title.md`
2. Copy template from README
3. Commit and push

**View locally:**
```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

## Help!

**Site not showing:** Wait 5 minutes, check Actions tab for errors

**Images broken:** Check filenames match exactly, including .jpg extension

**Need more help:** See DEPLOYMENT.md for detailed guide

---

That's it! You now have a live portfolio website. 🚀
