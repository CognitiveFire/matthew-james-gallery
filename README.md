# Art Gallery Website

A minimalist and elegant website for displaying artwork with a built-in CMS system.

## Features

- **Minimalist Design**: Clean, elegant layout with beautiful typography using Playfair Display and Inter fonts
- **Gallery View**: Display up to 10 paintings with hover effects and smooth transitions
- **Individual Artwork Pages**: Detailed pages for each artwork with name, description, materials, and price
- **Contact Form**: Inquiry form for purchase requests with form validation
- **Shipping Information**: Comprehensive shipping details and pricing
- **Basic CMS**: Admin panel for managing artwork content
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive Design** with mobile-first approach

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── admin/             # CMS admin panel
│   ├── artwork/[id]/      # Individual artwork pages
│   ├── contact/           # Contact form page
│   ├── shipping/          # Shipping information
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   └── Navigation.tsx     # Main navigation
├── data/                  # Sample data
│   └── artwork.ts         # Artwork data and utilities
├── types/                 # TypeScript type definitions
│   └── artwork.ts         # Artwork interface
└── public/               # Static assets
    └── images/           # Image files
```

## Customization

### Adding Real Images
Replace the placeholder images in `/public/images/` with your actual artwork photos. Update the `imageUrl` field in the artwork data accordingly.

### Styling
The design uses a carefully crafted color palette:
- **Cream**: `#FAF8F3` - Background color
- **Charcoal**: `#2C2C2C` - Primary text and accents
- **Warm Gray**: `#8B8B8B` - Secondary text
- **Accent**: `#D4A574` - Highlight color

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Inter (clean sans-serif)

### Content Management
Access the admin panel at `/admin` to:
- Add new artworks
- Edit existing artwork details
- Mark pieces as sold or featured
- Manage pricing and descriptions

## Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (Recommended)
   ```bash
   npx vercel --prod
   ```

3. **Deploy to Other Platforms**
   The project can be deployed to any platform that supports Next.js:
   - Netlify
   - AWS Amplify
   - Railway
   - DigitalOcean App Platform

## Future Enhancements

- **Multi-language Support**: Norwegian translation ready
- **Image Optimization**: Automatic image resizing and optimization
- **Payment Integration**: Stripe or PayPal integration for direct purchases
- **Advanced CMS**: Database integration for persistent data storage
- **SEO Optimization**: Meta tags and structured data
- **Analytics**: Google Analytics integration

## License

This project is open source and available under the MIT License.
