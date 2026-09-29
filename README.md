# Rachit — Portfolio

A modern, animated and responsive personal portfolio.

## Structure

- `index.html` — page structure
- `style.css` — complete UI, responsive design and animations
- `script.js` — interactions and rendering
- `data/data.js` — **edit this file to add projects, skills, achievements and social links**
- `assets/` — images, certificates, project assets and resume

## Add a project

Open `data/data.js` and add another object inside `projects`:

```js
{
  title: "My New Project",
  description: "Project description",
  tags: ["Python", "ML"],
  link: "https://github.com/..."
}
```

## Run locally

Open `index.html` directly, or use VS Code Live Server.

## Deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload all files and folders.
3. Go to **Settings → Pages**.
4. Under Build and deployment choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save and wait for GitHub Pages to publish.

Then your portfolio will have a live GitHub Pages URL.

## Theme
The portfolio includes a dark/light mode toggle. The preference is remembered in the browser.

## Profile photo
Replace `assets/profile/profile.jpg` with another image whenever you want to update the profile photo.
