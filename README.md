# Aakanksha Studios — Website Redesign

A responsive luxury photography studio website built with React and Vite.

## Features
- Luxury charcoal, ivory and gold visual identity
- Poppins body typography, Playfair Display headings and Great Vibes brand wordmark
- Portrait, family, baby/newborn and passport/ID photography services
- Filterable portfolio gallery with image lightbox
- Responsive mobile navigation
- Booking enquiry form that opens WhatsApp with the visitor's details prefilled
- Floating WhatsApp contact link
- SEO description and mobile theme color
- No backend required

## Run locally
```bash
npm install
npm run dev
```

Create a production build:
```bash
npm run build
npm run preview
```

## Important customisation before publishing
1. Open `src/App.jsx` and replace `WHATSAPP_NUMBER` with the studio's real WhatsApp number in international format, digits only. Example: `919876543210`.
2. Instagram is configured to `https://www.instagram.com/sandeep_aakanksha_st/` with the supplied tracking parameters.
3. Replace the demo Unsplash images in the `photos` object with your own licensed studio photographs for a distinctive portfolio.
4. Update service details, location, contact information and business hours as needed.

## Deploy
Run `npm run build`. Upload the generated `dist/` directory to a static host, or connect this repository to a host that supports Vite builds. Set the build command to `npm run build` and output directory to `dist`.

## Publish through GitHub Pages (no computer needed)

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. After the project files are committed to the repository's `main` or `master` branch:

1. Open the repository on GitHub in your phone browser.
2. Go to **Settings → Pages** and set the build/deployment source to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Build and deploy to GitHub Pages** to finish successfully.
4. The live site URL will be shown under **Settings → Pages**.

The workflow runs `npm install` and `npm run build` on GitHub's runner, so you do not need to install Node.js or run npm on your phone.

Important: upload/extract the contents of this ZIP into the repository root, including the hidden `.github/workflows/deploy.yml` file. Do not upload only the ZIP file itself.
