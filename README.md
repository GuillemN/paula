# Paula Navarro — Professional Dancer Portfolio SPA

A premium, high-performance professional portfolio single-page application (SPA) tailored for casting directors, talent agencies, and entertainment companies. Built with **React 19**, **Vite 6**, and **Tailwind CSS v4**.

---

## ✦ Key Features & Layout Sections

1. **Hero Section (`Hero.jsx`)**:
   - Full-screen cinematic landing with ambient stage photography / video backdrop.
   - Striking editorial typography using *Cinzel* and *Cormorant Garamond*.
   - Live casting availability badge (`Available for Tours • Film • Theater`).
   - Prominent **'View Showreel'** call-to-action button with smooth scroll.
   - Quick access to the casting **Comp Card (Z-Card)**.

2. **Showreel Section (`Showreel.jsx`)**:
   - Dedicated 16:9 cinematic video player located right below the fold.
   - Multi-reel playlist switcher (*Main Reel 2025/2026*, *Contemporary & Floorwork Solos*, *Commercial & World Tours*).
   - High-fidelity player controls (Play/Pause, time scrubber, volume mute/unmute, 4K resolution pill, and fullscreen toggle).
   - Accolades marquee (*Sadler's Wells, Global Arena Tours, UKMVA*).

3. **About & Stats Section (`AboutStats.jsx`)**:
   - **Column 1**: Concise professional biography, artistic philosophy, choreography endorsement quote, and interactive disciplines badges.
   - **Column 2**: Stylized, high-legibility physical casting specifications (Height, Hair Color, Eye Color, Shoe Size, Measurements, Vocal Range, SAG-AFTRA/Equity eligibility, and Passports).
   - One-click **'Copy Specs'** button providing formatted clipboard data for casting submissions.

4. **Experience Section (`Experience.jsx`)**:
   - Interactive vertical timeline displaying past work across **Theater**, **TV & Film**, and **Music Videos & Tours**.
   - Interactive category filters with real-time credit counts.
   - **Highly visible 'Download CV (PDF)' button** opening a standardized casting résumé modal with one-click print/PDF export.

5. **Gallery Section (`Gallery.jsx`)**:
   - Responsive masonry grid with variable heights.
   - UI tabs to switch between **'All'**, **'Headshots'**, and **'Action/Stage Shots'**.
   - Subtle hover zoom effects and credit reveals.
   - Full-screen **Lightbox Modal (`LightboxModal.jsx`)** with keyboard navigation (`Esc`, `←`, `→`).

6. **Contact Section (`Contact.jsx`) & Footer (`Footer.jsx`)**:
   - Direct agency representation details for London and Los Angeles offices.
   - Direct clickable booking email (`booking@paulanavarro.dance`).
   - Social links focusing on **Instagram** and **YouTube**.
   - Minimalist fast inquiry form with real-time feedback and state management.

---

## ✦ Modular Architecture & Supabase Integration

The architecture strictly decouples presentation from data:

- `src/data/dancerData.js`: Centralized data store matching relational database schemas.
- `src/services/portfolioService.js`: Supabase-ready service layer.
- `supabase_schema.sql`: Ready-to-execute SQL migration creating tables for `profiles`, `casting_stats`, `showreels`, `experience_credits`, `gallery_photos`, and `contact_inquiries` with Row Level Security (RLS).

To connect to Supabase:
1. Copy `.env.example` to `.env`.
2. Add your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. Run `supabase_schema.sql` in your Supabase SQL editor.

---

## ✦ Development & Build

```bash
# Start development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```
