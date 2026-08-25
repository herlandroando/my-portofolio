# System & UI Design Specification: Herlandro Tribiakto Portfolio

> **Project Name:** `my-portofolio` (`herlandrotri-portofolio`)  
> **Author:** Herlandro Tribiakto  
> **Role:** Fullstack Developer (Backend-Focused)  
> **Tech Stack:** Nuxt 4, Vue 3, Nuxt UI, Tailwind CSS, TypeScript, Nuxt MDC, VueUse  
> **Deployment Target:** Static (Cloudflare Pages / Vercel / Static Hosting)

---

## 1. Overview & Design Vision

This project is a personal developer portfolio built with modern web technologies. The design emphasizes a **clean, modern, developer-centric aesthetic** with interactive scroll animations, dynamic theme toggling (Light/Dark mode), responsive layout structures, and decoupled content management for project case studies.

### Core Design Goals
- **Developer Identity:** Showcase strong backend proficiency while highlighting fullstack and game development versatility.
- **Micro-Interactions & Fluidity:** Provide tactile user feedback via scroll detection directives, slide animations, card elevation, and interactive navigation dots.
- **Performance & Simplicity:** Static Single Page Application (SPA) architecture with zero client-side lag, modular Vue components, and lazy content loading.
- **Extensibility:** Simple schema-driven data models for timeline entries, skills, and portfolio case studies.

---

## 2. Visual Identity & Brand System

### 2.1 Brand Logo
The brand logo (`components/Logo.vue`) presents an interactive, developer-themed monogram:
- **Symbol:** `HT_`
- **Typography:** Extrabold (`font-extrabold`), Responsive sizing (`md:text-3xl text-2xl`), Primary color (`text-primary`).
- **Animation:** Continuous blinking underscore (`animate-underscore` utilizing `@keyframes ping` with ease cubic-bezier pulse).
- **Behavior:** Clicking resets the scroll smoothly to page top (`window.scrollTo(0, 0)`).

### 2.2 Color System & Design Tokens
The design uses a custom curated primary color palette named **Cloudburst** paired with standard Tailwind neutral scales (Slate, Stone, Gray) and situational accents.

```
Cloudburst (Primary Brand Blue/Indigo)
├── 50:  #f2f5fc  (Lightest tint, subtle hover/borders)
├── 100: #e1e8f8
├── 200: #cad7f3
├── 300: #a5beeb
├── 400: #7a9ce0  (Accent indicators, active scroll dots)
├── 500: #5b7bd6  (Brand icon badges, timeline nodes)
├── 600: #4760c9  (Hero underlines, prominent interactive highlights)
├── 700: #3d4eb8
├── 800: #374296
├── 900: #303a78
└── 950: #262b54  (Deep dark tone)
```

#### Theme & Mode Hierarchy
| Mode | Surface Background | Header / Footer Background | Primary Text | Muted / Secondary Text | Card Background |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Light** | `bg-white` | `bg-slate-50` | `text-slate-900` | `text-gray-500` / `text-gray-400` | `bg-white` / `shadow-sm` |
| **Dark** | `dark:bg-slate-900` | `dark:bg-stone-950` | `text-slate-100` | `text-gray-400` | `dark:bg-slate-800` / `dark:bg-stone-900` |

#### Accent & Semantic Colors
- **Orange (`orange` / `#f97316`):** Primary skill tags (Laravel, PHP, Vue, JS, MySQL, REST API) and attention alerts.
- **Gray (`gray` / Slate):** Secondary/general skills (Payment Gateway, C++, etc.).
- **Red (`red` / `#ef4444`):** Dismissive buttons (e.g. Under Construction modal close).

---

### 2.3 Typography & Type Scale
- **Font Family:** `Montserrat`, Arial, Helvetica, sans-serif (imported via `@nuxtjs/google-fonts`).
- **Base Rendering:** Smooth scrolling enabled on `body` (`scroll-behavior: smooth`).

| Role / Tag | Font Size (Mobile / Desktop) | Font Weight | Class / Component | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display Title** | `text-5xl` / `md:text-6xl` | `900` (Black) | `h2.font-black` | Hero Section Name |
| **Section Title** | `text-3xl` / `md:text-4xl` | `900` (Black) | `<TextTitle tag="h2">` | Section Headers (About, Experience, etc.) |
| **Sub Title** | `text-base` / `md:text-lg` | `700` (Bold) | `<TextSubTitle tag="h3">` | Timeline Roles, Project Card Titles |
| **Hero Badge** | `text-xl` / `md:text-2xl` | `500` (Medium) | `<UBadge>` | Hero Role: `<FullStackDeveloper />` |
| **Body Large** | `text-lg` / `md:text-2xl` | `500` (Medium) | `p.font-medium` | Hero summary sentence |
| **Body Standard** | `text-sm` / `md:text-base` | `400` (Regular) | `p` / `prose` | General narrative text & case studies |
| **Microcopy / Meta** | `text-xs` / `text-sm` | `400` (Regular) | `text-xs text-gray-400` | Dates, timeline locations, footer links |

---

### 2.4 Iconography System
Iconography is provided by `@nuxt/icon` supporting multi-collection vector glyphs:
- **Material Design Icons (`mdi:*`):** General UI, social platforms (`mdi:github`, `mdi:linkedin`, `mdi:instagram`, `mdi:discord`, `mdi:email`), navigation (`mdi:menu`, `mdi:close`, `mdi:chevron-up`), section motifs (`mdi:briefcase`, `mdi:school`, `mdi:account-group`, `mdi:traffic-cone`).
- **Simple Icons (`simple-icons:*`):** Engine / Game logos (`simple-icons:godotengine`).
- **Devicon (`devicon-plain:*`):** Tech stacks (`devicon-plain:mysql`).
- **Material Symbols (`material-symbols:*`):** Color mode indicators (`material-symbols:clear-day-rounded`, `material-symbols:nightlight`).

---

## 3. Layout Structure & Grid System

```
+-------------------------------------------------------------------------+
| [Header] Fixed h-20 (80px), z-10 | Logo (HT_) | Nav Links | Dark/Light  |
+-------------------------------------------------------------------------+
|                                                                     [o] |
| [Hero / Intro] h-[calc(100vh-6.25rem)]                              [o] |
|                                                                     [o] |
| [About Me] Interactive Sticky Slider h-[calc(400vh-5rem)]           [o] |
|                                                                     [o] |
| [Experience Timeline]                                               [o] |
|                                                                     [•] |
| [Education Timeline]                                                    |
|                                                                         |
| [Portfolio Grid] 2-Column Responsive Cards                              |
|                                                                         |
| [Contact CTA] Social Icon Badges                                        |
|                                                                         |
| [Scroll-to-top] Floating Button (bottom-right)                          |
+-------------------------------------------------------------------------+
| [Footer] bg-slate-50 / dark:bg-stone-950 | Credits & Links              |
+-------------------------------------------------------------------------+
```

### 3.1 Container & Sizing
- **Main Container:** `<UContainer>` wrapping the central viewport width with consistent responsive paddings.
- **Reading / Prose Constraint:** `max-w-[65ch]` applied to detail pages and article bodies to guarantee optimal reading line length.
- **Header Offset:** `h-20` (80px) top fixed bar with an intentional spacer `<div class="mt-[80px]">` preventing content clipping.

### 3.2 Navigation & Floating Indicators
1. **Desktop Navbar (`lg:flex`):** Horizontal inline links with smooth anchor scrolling (`/#about-me`, `/#experience`, etc.) and under-construction modal triggers.
2. **Mobile Sidebar Drawer (`USlideover side="left"`):** Touch-friendly slide-over menu triggered by hamburger button.
3. **Floating Progress Dot Navigation (`fixed top-[50%] right-1 md:right-8`):** Vertical pill indicators for all 6 core sections. Active section lights up with `bg-cloudburst-400`, inactive sections stay `bg-gray-200`.
4. **Floating Scroll-To-Top Button (`fixed bottom-4 right-4 z-30`):** Automatically appears when window scroll Y > 100px.

---

## 4. Component Architecture & Design Patterns

```
components/
├── AlertOnConstruction.vue       # Modal notification for in-progress features
├── Logo.vue                      # Animated brand mark
├── SkillTag.vue                  # Dynamic icon + label badge for tech stacks
├── Navbar/
│   └── Link.vue                  # Reusable navigation button wrapper
├── Page/
│   └── Home/
│       ├── AboutMeSection.vue    # Sticky multi-slide visual story slider
│       ├── ContactSection.vue    # Contact call-to-action & social links
│       ├── EducationSection.vue  # Chronological education timeline
│       ├── ExperienceSection.vue # Career journey timeline
│       └── PortofolioSection.vue # Project showcase grid
├── Portofolio/
│   ├── Avatar.vue                # Contributor avatar & LinkedIn link
│   └── Item.vue                  # Portfolio card with scroll entrance & tags
├── Text/
│   ├── Title.vue                 # Configurable tag (h1/h2/h3) display heading
│   └── SubTitle.vue              # Configurable tag secondary heading
└── Timeline/
    ├── Item.vue                  # Connected timeline entry with icon badge
    └── Link.vue                  # In-text link renderer for timeline descriptions
```

### 4.1 Key Component Specifications

#### `SkillTag.vue`
- Automatically resolves skill metadata (formatted label + icon name) via `utils/createSkillMeta.ts`.
- Encapsulated inside `<UBadge>` supporting custom colors (`orange`, `cloudburst`, `gray`).

#### `TimelineItem.vue`
- Features a vertical connecting line (`border-l-2 border-gray-300`) dynamically omitted for the terminal entry (`isLastItem`).
- Circular icon badge (`rounded-[100%] bg-cloudburst-500 text-white`).
- Supports the template interpolation pattern `{::}` inside text descriptions to dynamically inject Vue components (`<TimelineLink>`).

#### `AboutMeSection.vue` (Scroll-Pinned Storyteller)
- Section height spans `h-[calc(400vh-5rem)]` to allocate scroll distance.
- Uses `useWindowScroll()` to pin a fixed card container when scrolling within the section boundaries.
- Stacks story cards with progressive 3D offset transforms (`translate(x em, y em)`) and slide/fade transitions as the user scrolls through the narrative chapters.

#### `PortofolioItem.vue`
- 2-column grid item encapsulated in `<UCard>`.
- Alternating entrance animation (even items slide from right, odd items from left) triggered by scroll intersection.
- Cover image aspect ratio standardizer (`h-[340px] object-cover rounded`).
- Footer action: Links directly to case study (`detailAction`) or gracefully triggers `<AlertOnConstruction>`.

---

## 5. Motion, Transitions & Scroll Directives

### 5.1 Custom Scroll Detect Directive (`v-scroll-detect`)
Implemented as a client-only Nuxt plugin (`plugins/scroll-detect-directive.client.ts`):
- Monitors `window.onscroll` against element bounding rectangles (`getBoundingClientRect()`).
- Configurable `startOffset` and `endOffset` thresholds.
- Dispatches `isOnElement(el)` and `isNotOnElement(el)` callbacks to activate entrance animations and update current section dot indicators.

### 5.2 Vue Transition Catalog
| Transition Name | Enter Class | Leave Class | Usage |
| :--- | :--- | :--- | :--- |
| `fade-down` | `translate-y-0 opacity-100` | `translate-y-[5em] opacity-0` | Timeline card drop-in |
| `fade-up` | `translate-y-0 opacity-100` | `translate-y-[5em] opacity-0` | Section reveal |
| `slide-down` / `slide-up` | `translate(0.5em, 0.5em)` | `translate(-40em, 0em)` | About Me card slide stack |
| `fade` | `opacity-100` | `opacity-0` | Image swap & modal overlays |

---

## 6. Information Architecture & Routing

```
/ (pages/index.vue)
├── #introduction   (Hero, skills badges, social links)
├── #about-me       (Scroll-driven interactive story)
├── #experience     (Work timeline)
├── #education      (Academic history)
├── #portofolio     (Project showcase grid)
└── #contact        (Social channels CTA)

/portofolio/[slug]  (pages/portofolio/[slug].vue)
├── Hero banner with project image & tech badges
├── Table of Contents card (parsed from Markdown headings)
├── Markdown article body (rendered via MDCRenderer)
└── Project Info Card (URLs, contributors, notes)

error.vue (Global 404/500 Error Page)
```

### Decoupled Content Schema (`/public/assets/portofolio/`)
Case studies are loaded on-demand via `utils/fetchingLocalData.ts`:
1. **Metadata JSON (`[slug].json`):**
   ```json
   {
     "applicationName": "Project Title",
     "url": {
       "github": "https://github.com/...",
       "file": "https://..."
     },
     "note": "Optional release notes",
     "createdBy": [
       { "name": "Herlandro Tribiakto", "role": "Fullstack Developer" }
     ]
   }
   ```
2. **Markdown Article (`[slug].md`):**
   Parsed into an AST by `@nuxtjs/mdc` and styled with `@tailwindcss/typography` (`prose dark:prose-invert`).

---

## 7. Responsive & Accessibility (a11y) Guidelines

- **Mobile First Design:** Layout collapses cleanly from multi-column grids (`md:grid-cols-2`) to single-column streams on mobile screens.
- **Touch-Friendly Tap Targets:** Minimum 44px tap target size on mobile navigation triggers, social icons, and modal buttons.
- **ARIA & Accessibility:**
  - Social media buttons incorporate descriptive `aria-label` attributes.
  - Links to external websites specify `target="_blank"` with `rel="noopener noreferrer"` (handled by `<ULink external>`).
  - High color contrast maintained across both Light and Dark mode surfaces.

---

## 8. Extension & Developer Guidelines

### Adding a New Skill
1. Edit `utils/createSkillMeta.ts`:
   ```typescript
   skillNameKey: { label: "Display Name", icon: "icon-collection:icon-name" }
   ```
2. Reference the key in `data/index.ts` within the `skills` array.

### Adding a New Timeline Item
1. Open `data/index.ts`.
2. Append a new object to `experiences` or `educations` satisfying the `TimelineItem` type interface.
3. For embedded interactive links inside the `content` string, insert `{::}` and provide corresponding objects in `contentAppend`.

### Adding a New Portfolio Project
1. Add project summary in `data/index.ts` under the `portofolio` array.
2. If full case study is available:
   - Set `detailAction: "/portofolio/<slug>"`.
   - Create `public/assets/portofolio/<slug>.json` for metadata.
   - Create `public/assets/portofolio/<slug>.md` for markdown body.

