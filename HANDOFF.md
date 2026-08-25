# Engineering Handoff Document: Portfolio Enhancement Plan

> **Repository:** `herlandrotri-portofolio` (`my-portofolio`)  
> **Tech Stack:** Nuxt 4, Vue 3, Nuxt UI v4, Tailwind CSS v4, TypeScript, Nuxt MDC, VueUse  
> **Target Deployment:** Static SPA (Cloudflare Pages / Vercel)  
> **Purpose:** Modular task breakdown and technical specification to parallelize and execute portfolio enhancements.

---

## 📑 Workstream Overview

The enhancement roadmap is divided into **6 independent, self-contained workstreams** that can be assigned, split, or executed in parallel without merge conflicts.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             ENHANCEMENT ROADMAP                             │
├────────────────────────┬───────────────────────────┬────────────────────────┤
│ Workstream 1           │ Workstream 2              │ Workstream 3           │
│ SEO, Meta & Social     │ Copy, Data & Timeline Fix │ Performance & Directives│
│ (Isolated)             │ (Data Layer)              │ (Engine & Directives)  │
├────────────────────────┼───────────────────────────┼────────────────────────┤
│ Workstream 4           │ Workstream 5              │ Workstream 6           │
│ Hero, Resume & Contact │ Portfolio Filtering & Link│ Case Studies & Blog    │
│ (Component Layer)      │ (Feature Layer)           │ (Content Layer)        │
└────────────────────────┴───────────────────────────┴────────────────────────┘
```

---

## 🎯 Workstream 1: SEO, Meta & Social Sharing
**Scope:** Improve search engine visibility, Open Graph previews for LinkedIn/Twitter, and structured data.

### Relevant Files
- `app.vue` or `pages/index.vue`
- `nuxt.config.ts`
- `public/og-image.png` (Asset requirement)

### Specifications & Tasks
1. **Configure Global SEO Meta (`useSeoMeta`):**
   ```typescript
   useSeoMeta({
     title: 'Herlandro Tribiakto | Fullstack & Backend Developer',
     description: 'Portfolio of Herlandro Tribiakto — Fullstack Developer with deep backend expertise in Laravel, PHP, Vue, and System Architecture.',
     ogTitle: 'Herlandro Tribiakto | Fullstack & Backend Developer',
     ogDescription: 'Explore project case studies, game development, and fullstack engineering experience.',
     ogImage: '/assets/images/og-cover.png',
     ogType: 'website',
     twitterCard: 'summary_large_image',
     twitterTitle: 'Herlandro Tribiakto | Fullstack & Backend Developer',
     twitterDescription: 'Explore project case studies, game development, and fullstack engineering experience.',
     twitterImage: '/assets/images/og-cover.png',
   })
   ```
2. **Add JSON-LD Structured Data Schema:**
   - Inject Schema.org `Person` & `WebSite` structured data for Google Search snippet recognition:
   ```typescript
   useHead({
     htmlAttrs: { lang: 'en' },
     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
     script: [
       {
         type: 'application/ld+json',
         innerHTML: JSON.stringify({
           '@context': 'https://schema.org',
           '@type': 'Person',
           name: 'Herlandro Tribiakto',
           jobTitle: 'Fullstack Developer',
           url: 'https://herlandrotri.dev',
           sameAs: [
             'https://github.com/herlandroando',
             'https://www.linkedin.com/in/herlandro-tribiakto/',
             'https://www.instagram.com/herlandrotri/'
           ]
         })
       }
     ]
   })
   ```

### Definition of Done
- [x] Rich preview cards render properly when sharing URLs on LinkedIn, Discord, and Twitter card validator.
- [x] Valid JSON-LD schema with zero errors in Google Rich Results Test.

---

## 🎯 Workstream 2: Copy, Data Integrity & Timeline Sorting
**Scope:** Fix grammar, improve storytelling narrative in `data/index.ts`, and fix chronological ordering of the career timeline.

### Relevant Files
- `data/index.ts`
- `components/Page/Home/ExperienceSection.vue`
- `components/Timeline/Item.vue`

### Specifications & Tasks
1. **Fix Timeline Sorting in `ExperienceSection.vue`:**
   - **Current Bug:** `experiences.sort()` mutates the array without a comparison function, causing unstable/string-based ordering.
   - **Solution:** Sort reverse-chronologically (Newest first, starting with *PT. Panorama JTB Tours Indonesia (2024–Now)* down to *Freelance / Lide Dev (2019)*) or maintain explicit ordering keys.
2. **Copy Polish in `data/index.ts`:**
   - **About Me Card 3:**
     - *Before:* `"On top of that, I had been slapped with the harshness of life. So yeah, I became a web developer..."`
     - *After:* `"Transitioning to web engineering, I developed a strong passion for scalable backend architectures and modern web apps, mastering technologies through hands-on practice, documentation, and continuous building."`
   - **Educations (Master Degree):**
     - *Before:* `"I want to thanks to my parents and my family who have supported me to make me able completed my master degree."`
     - *After:* `"Special gratitude to my family for their continuous support throughout my master's degree journey."`
   - **Portfolio Descriptions:**
     - `lp-ire`: Fix `"We developed a they website..."` ➔ `"We developed their organizational website with an intuitive custom CMS..."`
     - `tanpamerek`: Note that **Tanpamerek** is the app/product name. Refine the description to fix the duplicate phrase: `"We developed Tanpamerek, a platform to serve on-demand asset download services connecting to premium subscription-based digital asset providers."`
3. **Typing & Schema Safety:**
   - Ensure all `skills` arrays in `portofolio` and `experiences` have valid corresponding keys in `utils/createSkillMeta.ts`.

### Definition of Done
- [x] Experiences are sorted with the most recent job displayed at the top.
- [x] Clean, professional English copy across all sections.

---

## 🎯 Workstream 3: Performance, Nuxt Image & Intersection Observer
**Scope:** Eliminate scroll event listeners, remove bundle bloat, and implement optimized image pipeline.

### Relevant Files
- `plugins/scroll-detect-directive.client.ts`
- `components/Portofolio/Item.vue`
- `components/Page/Home/AboutMeSection.vue`
- `utils/fetchingLocalData.ts`
- `nuxt.config.ts`

### Specifications & Tasks
1. **Modernize Scroll Detection (Replace `window.onscroll` with `IntersectionObserver`):**
   - Refactor `plugins/scroll-detect-directive.client.ts` to use native `IntersectionObserver` API or `@vueuse/core` `useIntersectionObserver`.
   - Avoid calling `getBoundingClientRect()` on every scroll tick.
2. **Implement `<NuxtImg>` / Responsive Images:**
   - Add `@nuxt/image` into `modules` array in `nuxt.config.ts`.
   - Replace standard `<img>` tags in `PortofolioItem.vue`, `AboutMeSection.vue`, and `pages/portofolio/[slug].vue` with `<NuxtImg format="webp" loading="lazy" placeholder />`.
3. **Drop Axios in favor of Native Nuxt `$fetch`:**
   - In `utils/fetchingLocalData.ts`, replace `axios.get(...)` with native `$fetch(...)` / `useAsyncData(...)`.
   - Remove `axios` from `package.json` to reduce client bundle size.

### Definition of Done
- [x] Zero unthrottled scroll event listeners on `window` or `document`.
- [x] Images served in modern WebP format with lazy loading placeholders.
- [x] Nuxt build succeeds without Axios dependency.

---

## 🎯 Workstream 4: Hero, Resume CTA & Contact Interactivity
**Scope:** Maximize recruiter/visitor conversion with direct actions.

### Relevant Files
- `pages/index.vue`
- `layouts/default.vue`
- `components/Page/Home/ContactSection.vue`
- `public/resume.pdf` (Asset requirement)

### Specifications & Tasks
1. **"Download CV / Resume" Action:**
   - Add a prominent Resume button in Hero section (`pages/index.vue`) next to social links:
     ```html
     <UButton
       to="/resume.pdf"
       target="_blank"
       icon="mdi:file-document-outline"
       color="primary"
       variant="solid"
     >
       Download CV / Resume
     </UButton>
     ```
   - Add a compact "Resume" link/button in the desktop header and mobile drawer (`layouts/default.vue`).
2. **Interactive Contact Copy-to-Clipboard:**
   - In `ContactSection.vue`, enhance the Email and Discord links with a one-click copy toast or tooltip (using `@vueuse/core`'s `useClipboard`).
   - Example: Clicking Discord copies `herlandrotri#...` or username with visual confirmation: `"Discord ID copied to clipboard!"`.

### Definition of Done
- [x] Resume PDF downloads/opens in new tab smoothly from both Hero and Header.
- [x] Email/Discord copy interaction provides instant visual feedback.

---

## 🎯 Workstream 5: Portfolio Grid & Filtering System
**Scope:** Allow visitors to filter projects by discipline (Backend, Fullstack, Game Dev) and provide direct links on cards.

### Relevant Files
- `components/Page/Home/PortofolioSection.vue`
- `components/Portofolio/Item.vue`
- `data/index.ts`
- `types/data.ts`

### Specifications & Tasks
1. **Extend `PortofolioItem` Type:**
   - Add optional `category: 'backend' | 'fullstack' | 'game' | 'web'` and `directLinks?: { github?: string; demo?: string }`.
2. **Add Category Filter Tabs in `PortofolioSection.vue`:**
   - Add `<UTabs>` or button pills: `[All (9), Backend & APIs (4), Fullstack (3), Game Development (2)]`.
   - Filter projects smoothly with Vue transition group.
3. **Card Quick-Actions:**
   - On `PortofolioItem.vue`, if `item.detailAction` is not yet available, show direct GitHub / Demo button links instead of only showing "Under Construction".

### Definition of Done
- [ ] Switching filter tabs immediately filters displayed portfolio items.
- [ ] Cards without full case studies allow direct navigation to source code or live previews.

---

## 🎯 Workstream 6: Markdown Case Studies & Content Expansion
**Scope:** Complete case studies for existing projects and create a roadmap for technical blog posts.

### Relevant Files
- `public/assets/portofolio/*.json`
- `public/assets/portofolio/*.md`
- `pages/portofolio/[slug].vue`

### Specifications & Tasks
1. **Add Case Study Content for Key Projects:**
   - `story-of-nature-spirit` (Godot / GDScript RPG Game)
   - `sipus` (Bantul Fertile Age Couples system - Laravel API + React)
   - `laron` / `jiwa-jenu` (BUMDESA Marketplace & Payment Gateway)
2. **Enhance `pages/portofolio/[slug].vue`:**
   - Add "Back to Portfolio" navigation button with smooth return.
   - Support image gallery or screenshot carousel within the markdown renderer.
   - Add Next/Previous project footer links.

### Definition of Done
- [ ] Case study pages load fast with responsive TOC (Table of Contents), syntax highlighting, and contributor meta.
- [ ] 404 handler correctly redirects invalid slugs.

---

## 📋 Execution Checklist & Verification

| Workstream | Priority | Estimated Complexity | Assignee | Status |
|---|---|---|---|---|
| **WS1: SEO & Meta** | High | Low (1-2 hrs) | AI Assistant | Completed |
| **WS2: Copy & Data** | High | Low (1-2 hrs) | AI Assistant | Completed |
| **WS3: Performance & Nuxt Image** | High | Medium (2-3 hrs) | AI Assistant | Completed |
| **WS4: Hero & Contact Actions** | Medium | Low (1-2 hrs) | AI Assistant | Completed |
| **WS5: Portfolio Filtering** | Medium | Medium (2-3 hrs) | Open | Pending |
| **WS6: Case Studies Content** | Low | Medium (Content writing) | Open | Pending |

---
*Created for Herlandro Tribiakto Portfolio Project — Ready for execution.*

