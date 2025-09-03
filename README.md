# MICA Landing Page

This is a minimalist landing page for MICA, inspired by sinnerellamusic.com. The design features a clean, modern interface with a full-screen background image and social media links.

## Features

- Responsive design for mobile and desktop
- Modal popup for email subscription
- Social media links
- Clean, minimalist aesthetic

## Customization

### Background Image

The landing page uses `img/mica-bg.jpg` as the background image. You can replace this with another image of your choice while keeping the same filename.

### Social Media Links

Update the social media links in `index.html` with your actual social media profiles:

```html
<div class="social-links">
    <a href="https://www.instagram.com/mica" target="_blank" class="social-link">INSTAGRAM</a>
    <a href="https://open.spotify.com/artist/mica" target="_blank" class="social-link">SPOTIFY</a>
    <a href="https://www.youtube.com/@mica" target="_blank" class="social-link">YOUTUBE</a>
    <a href="https://shop.mica.com" target="_blank" class="social-link">MERCH</a>
</div>
```

### Logo

Currently, the site uses a text-based logo. If you'd like to use an image logo instead, replace the logo section in `index.html` with:

```html
<div class="logo">
    <img src="img/mica-logo.png" alt="MICA Logo">
</div>
```

And add appropriate styling in the CSS file.

### Email Subscription

The current form is for demonstration purposes only. To make it functional, you'll need to implement a backend service to handle form submissions. Update the JavaScript in `script.js` to connect to your service.

## Deployment

To deploy this landing page:

1. Upload all files to your web hosting service
2. Ensure the file structure remains intact
3. Update social media links and any other customizations

## License

All rights reserved. This landing page is for MICA's use only.
