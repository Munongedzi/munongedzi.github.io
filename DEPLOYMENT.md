# Complete Deployment Guide for GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your computer
- Text editor (VS Code, Sublime, etc.)
- Your photos ready (see IMAGE_INSTRUCTIONS.txt)

## Step-by-Step Deployment

### 1. Prepare Your Repository

**A. Create GitHub Repository:**
1. Log into GitHub
2. Click the "+" icon in top-right → "New repository"
3. Repository name: `yourusername.github.io` 
   - CRITICAL: Replace "yourusername" with YOUR actual GitHub username
   - Example: If your username is "mmabhoko", name it: `mmabhoko.github.io`
4. Description: "Professional portfolio website"
5. Make it Public
6. Do NOT check "Initialize with README"
7. Click "Create repository"

**B. Note Your Repository URL:**
- It will look like: `https://github.com/yourusername/yourusername.github.io`

### 2. Set Up Your Local Files

**A. Download/Navigate to This Project:**
```bash
cd path/to/portfolio-site
```

**B. Initialize Git:**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

**C. Connect to GitHub:**
```bash
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Example:
# git remote add origin https://github.com/mmabhoko/mmabhoko.github.io.git
```

**D. Push to GitHub:**
```bash
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. In left sidebar, click "Pages"
4. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
5. Click "Save"

### 4. Wait for Deployment

- GitHub Actions will automatically build your site
- Click "Actions" tab to watch progress
- Build typically takes 1-3 minutes
- Once complete, a green checkmark appears
- Your site is now live at: `https://yourusername.github.io`

### 5. Verify Deployment

Visit `https://yourusername.github.io` to see your live site!

## Customization Steps

### BEFORE You Deploy (Recommended):

**1. Add Your Photos:**
Place these files in `/assets/img/`:
- `portrait.jpg` (hero section)
- `about-photo.jpg` (about section)
- `contact-photo.jpg` (contact section)

**2. Update Contact Information:**

Edit `index.html` and find the contact section. Update:
- Email: mmunongedzi@gmail.com → your email
- LinkedIn URL: update placeholder
- Phone: add your number
- Location: verify it's correct

**3. Update config:**

Edit `_config.yml`:
```yaml
title: Your Full Name
email: your.email@example.com
description: Your professional tagline
```

**4. Customize About Section:**

Edit `index.html`, find the About section and update:
- Bio paragraph
- Highlights list
- Skills pills

**5. Add Social Links:**

Edit `_includes/footer.html`:
- Update LinkedIn URL (2 places)
- Update GitHub URL
- Keep email as is (pulls from config)

### AFTER Initial Deployment:

**6. Replace Sample Projects:**

Option A - Keep samples and add yours:
- Add new `.md` files to `_projects/` folder
- Follow the template in README.md

Option B - Remove samples entirely:
- Delete files from `_projects/` folder
- Add your own project files

**7. Write Real Blog Posts:**
- Delete sample posts from `_posts/`
- Add your own following the naming: `YYYY-MM-DD-title.md`

**8. Update Professional Info:**
Edit `index.html` to customize:
- Quick stats (years experience, domains, etc.)
- Tools icons and labels
- Social proof items

## Making Updates After Deployment

Every time you want to update your site:

```bash
# 1. Make your changes to files

# 2. Stage changes
git add .

# 3. Commit with a message
git commit -m "Update: describe what you changed"

# 4. Push to GitHub
git push

# 5. Wait 1-2 minutes for automatic rebuild
# 6. Refresh your site to see changes
```

## Common Issues & Solutions

### Issue: Site shows README instead of homepage
**Solution:** Make sure you have `index.html` in root directory

### Issue: CSS/styling not working
**Solution:** 
- Check file paths in `_layouts/default.html`
- Verify `style.css` exists in `/assets/css/`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Images not showing
**Solution:**
- Verify image filenames match exactly (case-sensitive)
- Check paths start with `/assets/img/`
- Make sure images were committed: `git add assets/img/` then push

### Issue: Navigation links not working
**Solution:**
- For homepage sections, links should be: `/#section-id`
- For other pages: `/page-name`
- Verify IDs match in HTML

### Issue: Projects/Blog posts not appearing
**Solution:**
- Check file naming: Projects in `_projects/`, posts in `_posts/`
- Posts must be named: `YYYY-MM-DD-title.md`
- Verify front matter is correct (the --- section at top)

### Issue: Build failing in Actions
**Solution:**
- Check Actions tab for error message
- Usually a YAML formatting error in front matter
- Verify all `.md` files have proper front matter

## Testing Locally (Optional)

To test before pushing:

```bash
# Install Jekyll
gem install jekyll bundler

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## File Organization Tips

### Content Files:
- Homepage content: `index.html`
- Projects: `_projects/*.md`
- Blog posts: `_posts/*.md`
- Config: `_config.yml`

### Template Files:
- Layouts: `_layouts/`
- Components: `_includes/`
- Don't modify these unless you know what you're doing

### Assets:
- Styles: `assets/css/style.css`
- Scripts: `assets/js/main.js`
- Images: `assets/img/`

## Security & Privacy

### Public Repository:
- Your code is visible to everyone
- Don't commit sensitive information
- API keys, passwords, etc. should never be in code

### Contact Form:
- The contact form is visual only (disabled)
- Direct users to email you instead
- To add a working form, use services like Formspree or Netlify Forms

## Custom Domain (Optional)

To use your own domain like `yourname.com`:

1. Buy a domain from registrar (Namecheap, Google Domains, etc.)
2. In your repo, create file: `CNAME` (no extension)
3. Add one line with your domain: `yourname.com`
4. Commit and push
5. In DNS settings at your registrar, add:
   - A record: 185.199.108.153
   - A record: 185.199.109.153
   - A record: 185.199.110.153
   - A record: 185.199.111.153
6. Wait 24-48 hours for DNS propagation

## Performance Tips

### Optimize Images:
- Compress before uploading (use TinyPNG.com)
- Keep under 500KB each
- Use appropriate dimensions (don't upload 4000px images)

### Mobile Testing:
- Test on actual mobile devices
- Use Chrome DevTools device emulation
- Check navigation menu works on mobile

## Getting Help

### Resources:
- Jekyll Docs: https://jekyllrb.com/docs/
- GitHub Pages Docs: https://docs.github.com/en/pages
- Markdown Guide: https://www.markdownguide.org/

### Troubleshooting:
1. Check GitHub Actions for build errors
2. Look at browser console for JavaScript errors (F12)
3. Verify file paths are correct
4. Ensure all files are committed and pushed

## Checklist Before Going Live

- [ ] All placeholder images replaced with your photos
- [ ] Contact information updated everywhere
- [ ] About section customized with your info
- [ ] Sample projects removed/replaced
- [ ] Sample blog posts removed/replaced  
- [ ] Social media links updated
- [ ] Config file updated with your info
- [ ] Tested all navigation links
- [ ] Viewed on mobile device
- [ ] Checked for typos and errors
- [ ] Removed any placeholder text

## Next Steps

1. Share your portfolio link on LinkedIn
2. Add link to your resume
3. Include in email signature
4. Keep it updated with new projects
5. Write blog posts regularly (once per month is great)
6. Monitor GitHub Actions for any build issues

---

Good luck with your portfolio! 🚀
