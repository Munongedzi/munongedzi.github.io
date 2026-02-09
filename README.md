# Portfolio Website - Munongedzi "Muno" Mabhoko

A professional portfolio website built with Jekyll for GitHub Pages, featuring a warm neutral design aesthetic with editorial serif headings and dark panel sections.

## 🚀 Deployment to GitHub Pages

### Step 1: Create Repository
1. Go to GitHub and create a new repository
2. Name it exactly: `<yourusername>.github.io` (replace `<yourusername>` with your GitHub username)
3. Make it public
4. Don't initialize with README (we'll push this code)

### Step 2: Push Code to GitHub
```bash
# Initialize git in your local project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: `main` and folder: `/ (root)`
6. Click "Save"

### Step 4: Wait for Build
- GitHub will automatically build your site (takes 1-3 minutes)
- Your site will be live at: `https://yourusername.github.io`
- Check the "Actions" tab to see build progress

## 📸 Adding Your Images

Replace the placeholder images with your own photos. Recommended sizes:

### Required Images:
1. **Hero portrait** (`/assets/img/portrait.jpg`)
   - Size: 800x1000px
   - Format: JPG
   - Aspect ratio: 4:5 (vertical)

2. **About photo** (`/assets/img/about-photo.jpg`)
   - Size: 600x800px
   - Format: JPG
   - Aspect ratio: 3:4 (vertical)

3. **Contact photo** (`/assets/img/contact-photo.jpg`)
   - Size: 400x400px
   - Format: JPG
   - Square format

### Project Images:
Add project screenshots to `/assets/img/projects/`:
- `bias-detection.jpg`
- `churn-prediction.jpg`
- `document-classification.jpg`
- `executive-dashboard.jpg`
- `recommendation-engine.jpg`
- `fraud-detection.jpg`

Recommended size: 640x480px (4:3 ratio)

## ✏️ Editing Content

### Update Your Information
Edit `_config.yml`:
```yaml
title: Your Name
email: your.email@example.com
description: Your professional tagline
```

Edit the homepage (`index.html`) to update:
- Name and headline
- Value proposition
- Contact information
- Quick stats
- About bio
- Skills and highlights

### Add a New Project

1. Create a new file in `_projects/` folder
2. Name it: `your-project-name.md`
3. Copy this template:

```markdown
---
layout: project
title: Your Project Title
outcome: Brief outcome statement
tags: [Tag1, Tag2, Tag3]
image: /assets/img/projects/your-image.jpg
github_url: https://github.com/yourusername/repo
demo_url: https://demo-link.com
---

## Problem
Describe the problem you solved...

## Approach
Explain your approach...

## Tech Stack
List technologies used...

## What I Built
Detail what you created...

## Results
Share measurable outcomes...

## Screenshots
Add screenshots section...

## Lessons Learned
Share what you learned...
```

4. Add your project image to `/assets/img/projects/`
5. Commit and push to GitHub

### Add a New Blog Post

1. Create a file in `_posts/` folder
2. Name it: `YYYY-MM-DD-post-title.md` (e.g., `2024-12-15-my-new-post.md`)
3. Use this template:

```markdown
---
layout: post
title: "Your Blog Post Title"
date: 2024-12-15
excerpt: A brief 1-2 sentence summary of your post
---

Your blog post content here in Markdown format...

## Subheading

Paragraphs, lists, etc.
```

4. Commit and push to GitHub

## 🎨 Customizing Colors

Edit CSS variables in `/assets/css/style.css`:

```css
:root {
  --ivory: #F6F1E9;
  --sand: #D8C8B6;
  --warm-taupe: #B9A89A;
  --deep-mocha: #2B1E18;
  --charcoal: #111111;
  --rose-accent: #C46A6A;
  --gold-accent: #C9A46B;
}
```

## 📱 Testing Locally

If you want to test before deploying:

1. Install Jekyll:
```bash
gem install jekyll bundler
```

2. Create a `Gemfile` in your project root:
```ruby
source "https://rubygems.org"
gem "jekyll", "~> 4.3"
gem "webrick"
```

3. Install dependencies:
```bash
bundle install
```

4. Run local server:
```bash
bundle exec jekyll serve
```

5. Visit: `http://localhost:4000`

## 🔧 Troubleshooting

### Site not showing up
- Check repository name is exactly `yourusername.github.io`
- Verify GitHub Pages is enabled in Settings
- Check Actions tab for build errors
- Wait 3-5 minutes after first push

### Images not loading
- Verify image paths start with `/assets/img/`
- Check file extensions match (jpg vs jpeg)
- Ensure images are committed to git

### Styling looks broken
- Clear browser cache
- Check `/assets/css/style.css` was committed
- Verify Google Fonts are loading (check browser console)

## 📂 Project Structure

```
.
├── _config.yml              # Jekyll configuration
├── index.html               # Homepage with all sections
├── _layouts/
│   ├── default.html        # Main layout template
│   ├── project.html        # Project detail layout
│   └── post.html           # Blog post layout
├── _includes/
│   ├── nav.html            # Navigation component
│   ├── footer.html         # Footer component
│   ├── project-card.html   # Project card component
│   └── post-card.html      # Blog post card component
├── _projects/              # Project collection
│   ├── bias-detection-pipeline.md
│   ├── churn-prediction.md
│   └── ...
├── _posts/                 # Blog posts
│   ├── 2024-09-15-ml-production-pitfalls.md
│   └── ...
├── assets/
│   ├── css/
│   │   └── style.css      # All styles
│   ├── js/
│   │   └── main.js        # JavaScript
│   └── img/               # Images
├── projects/
│   └── index.html         # Projects page
└── blog/
    └── index.html         # Blog index page
```

## 🎯 Next Steps

1. Replace all placeholder images with your photos
2. Update contact information (LinkedIn, phone, etc.)
3. Customize the "About Me" section
4. Add your real projects (delete or modify sample projects)
5. Write your first blog post
6. Update social media links in footer
7. Test all links and navigation
8. Share your new portfolio!

## 📞 Support

For Jekyll documentation: https://jekyllrb.com/docs/
For GitHub Pages help: https://docs.github.com/en/pages

---

Built with ❤️ using Jekyll and GitHub Pages
