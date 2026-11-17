# MANSHAL — Official Agency & Founder Portfolio Website

**Tagline:** *Building Digital Experiences That Grow Businesses.*  
**Founder:** Manmit Raj — *Founder & Developer, MANSHAL* (`B.Tech Computer Science and Engineering (AI & ML)`)

---

## Verified Founder & Official Contact Details

All details are managed centrally in [`src/config/siteConfig.ts`](src/config/siteConfig.ts):

- **Founder:** Manmit Raj (`Founder & Developer, MANSHAL`)
- **Education:** B.Tech Computer Science and Engineering (AI & ML)
- **Email:** [manmitraj12@gmail.com](mailto:manmitraj12@gmail.com)
- **Mobile:** `9014792021` (`+91 9014792021`)
- **WhatsApp:** `+91 9014792021` (`https://wa.me/919014792021`)
- **LinkedIn:** `https://www.linkedin.com/in/manmitraj-raj-b859b5396/`
- **GitHub:** `https://github.com/manmitraj12-beep`

---

## Replacing the Founder Photograph Later

In [`src/config/siteConfig.ts`](src/config/siteConfig.ts), locate `SITE_CONFIG.founder.photoUrl`:
1. Place your real photograph in `public/assets/founder/` (for example, `public/assets/founder/manmit-raj.jpg`).
2. Set `photoUrl: '/assets/founder/manmit-raj.jpg'` in `src/config/siteConfig.ts`.
3. While `photoUrl` is empty (`""`), the Founder section renders a clean MANSHAL-branded `"MR"` portrait emblem without using any artificial face.

---

## Development & Build Commands

```bash
# Start local development server
npm run dev

# Run TypeScript check and production build
npm run build

# Preview production build
npm run preview
```
