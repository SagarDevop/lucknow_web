# Reference Website Benchmark: Serein Spaces (sereinspaces.com)

## Executive Summary
This document provides an exhaustive architectural, visual, interaction, and structural breakdown of [Serein Spaces](https://sereinspaces.com/), serving as the design and experience benchmark for our client website development (**Ambient Engineers**).

Our objective is to match or exceed the editorial elegance, whitespace discipline, seamless animations, and image-led narrative of Serein Spaces, while completely adapting the brand identity, MEP & interior engineering content, project portfolio, and metadata to our client.

---

## 1. Header and Navigation Behaviour
- **Positioning**: Sticky header with fixed top positioning (`position: sticky` / `fixed`), subtle box-shadow or bottom border on scroll (`border-bottom: 1px solid rgba(0,0,0,0.06)`).
- **Background**: Translucent white (`rgba(255, 255, 255, 0.95)` with backdrop-filter blur `blur(10px)`) ensuring smooth overlay contrast as dark hero images scroll underneath.
- **Layout**: Clean 3-tier horizontal distribution:
  - Left: Minimalist brand wordmark + mark icon (`height: 38px–44px`).
  - Center/Right: Primary navigation links (`Our Team`, `Our Work`, `Services`, `Why Us`, `Blog`, `Connect`).
  - Far Right: High-prominence conversion pill button (`Book a Consultation` / `Request a Quote` / `Get in Touch`).
- **Typography & States**: Uppercase or semi-bold title case, letter-spacing `0.05em`, font size `14px–15px`, color `#111111`. Hover state creates subtle underline sweep or orange accent indicator.
- **Mobile Navigation**: Minimalist hamburger icon triggering a full-screen or slide-in editorial drawer menu with oversized links (`24px–28px`), social links, and contact CTA.

---

## 2. Hero Section Layout, Image Presentation & Text Transitions
- **Format**: Full-viewport or high-impact hero slider (`min-height: 85vh` to `100vh`).
- **Slider Mechanism**: Autoplay carousel with custom navigation (minimal pill indicators, previous/next arrows, slide counters like `01 / 03`).
- **Visual Presentation**: Large high-resolution architectural photography with subtle dark gradient vignette (`linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55))`) ensuring crisp typography contrast.
- **Text Entrance & Transitions**:
  - Pre-headline / badge (`12px–13px`, uppercase, tracking `2px`, muted accent).
  - Main Headline (`48px–64px` on desktop, `32px–40px` on mobile, line-height `1.15–1.2`): Staggered fade-up (`translateY(24px)` to `translateY(0)` with opacity transition).
  - Subtitle (`18px–20px`, light/regular weight, color `#E0E0E0`, max-width `640px`).
  - Action Group: Primary solid CTA button paired with secondary ghost/outline or phone link button.

---

## 3. Typography, Font Sizes, Weights and Line Heights
- **Headings (Display / H1 / H2)**:
  - Font Family: Clean, high-end geometric grotesk or modern sans-serif (such as *Plus Jakarta Sans*, *Outfit*, or *Inter* paired with elegant editorial accents).
  - H1 (Hero): `48px – 64px`, `font-weight: 700`, `letter-spacing: -0.02em`, `line-height: 1.15`.
  - H2 (Section Title): `34px – 44px`, `font-weight: 600–700`, `letter-spacing: -0.015em`, `line-height: 1.25`. Often features italicized or accented keyword (e.g. *The Difference*).
  - H3 (Card / Sub-feature): `20px – 24px`, `font-weight: 600`, `line-height: 1.35`.
  - H4 (Stat Number): `42px – 56px`, `font-weight: 700`, `letter-spacing: -0.02em`.
- **Body & Secondary Text**:
  - Body Large: `17px – 18px`, `font-weight: 400`, `line-height: 1.65`, color `#444444`.
  - Body Standard: `15px – 16px`, `font-weight: 400`, `line-height: 1.6`, color `#666666`.
  - Caption / Meta: `12px – 13px`, `font-weight: 500`, uppercase, tracking `1.5px`, color `#888888`.
- **Discipline**: Strictly limited weights (400, 500, 600, 700). High contrast between headers and body for effortless scanning.

---

## 4. Container Widths, Margins, Padding and Spacing
- **Max Container Widths**:
  - Default Container: `1200px – 1280px` centered.
  - Wide Editorial Container: `1400px` for immersive showcases.
  - Full Bleed: For hero slider, before-after transformation, and image reels.
- **Section Spacing**:
  - Desktop vertical padding: `100px – 130px` top and bottom (`py-24` to `py-32`).
  - Mobile vertical padding: `60px – 80px`.
  - Content gap: `32px – 48px` between grid items.
- **Whitespace Principle**: Generous negative space around headers and cards gives an unhurried, luxury feel.

---

## 5. Image Aspect Ratios and Positioning
- **Hero Slides**: `16:9` to `21:9` widescreen banner format.
- **Service & Solution Cards**: `4:3` and `16:10` landscape ratios for technical and fit-out accuracy.
- **Project Grid Showcase**: Dynamic asymmetric grid mixing `4:3`, `1:1`, and `3:4` vertical editorial frames.
- **Before / After Comparison**: Fixed uniform `16:9` ratio with synchronized zoom and cropping.
- **Object Fit**: `object-fit: cover` with subtle focal-point pinning (`object-position: center`).

---

## 6. Section Layouts and Background Transitions
- **Alternating Rhythm**:
  1. Hero: Dark immersive image backdrop.
  2. Intro / Trust Bar: Crisp `#FFFFFF` with muted client logos strip.
  3. Solution Splitting (Turnkey vs. Bespoke): Soft secondary background `#FAFAF8` with elevated white cards.
  4. Stats & Credibility: `#FAFAF8` or `#FFFFFF` with crisp metric counters and side architectural visual.
  5. Core Engineering Services: Modern grid with minimalist icons and subtle hover borders (`#EAEAEA`).
  6. Before / After Transformation: Full-width container with high interactive focus.
  7. Value Proposition / Feature Grid: Clean 4-card matrix with bespoke icons.
  8. Mid-page CTA: High-impact dark charcoal (`#111111`) or accented banner with high-contrast text.
  9. Portfolio Showcase: Editorial grid with hover overlays and client badges.
  10. Footer: Deep dark `#111111` or `#161616` with organized column structure.

---

## 7. Hover Interactions
- **Cards**: Subtle `transform: translateY(-6px)`, box shadow transition from flat/subtle to `0 20px 40px rgba(0, 0, 0, 0.08)`.
- **Images**: Inner container `overflow: hidden`, image scales smoothly (`transform: scale(1.05)`) over `0.6s cubic-bezier(0.25, 1, 0.5, 1)`.
- **Buttons**:
  - Primary button: Background color shift to subtle dark orange/amber, arrow icon shifts right `4px`.
  - Ghost / Outline button: Fills background with primary text color, inverse typography.
- **Links**: Subtle bottom border expansion (`transform: scaleX(0)` to `scaleX(1)` from left to right).

---

## 8. Scroll-Triggered Animations
- **Intersection Observer**: Elements trigger entrance once they enter `20%` into viewport (`threshold: 0.15`).
- **Stagger Effect**: Grid cards enter with incremental delays (`0.1s, 0.2s, 0.3s, 0.4s`).
- **Animated Number Counters**: Numbers count up smoothly from 0 to target (e.g. `500+`, `100%`, `15+`) over 1.8 seconds with easing when in view.

---

## 9. Entrance and Exit Transitions
- **Duration**: `0.6s` to `0.8s` with custom bezier `cubic-bezier(0.16, 1, 0.3, 1)` (snappy start, silky finish).
- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)` by disabling transforms and using instantaneous opacity shifts.

---

## 10. Image Sliders and Carousels
- **Controls**: Minimalist circular arrow buttons (`w-12 h-12`), progress dots or fraction indicator (`01 / 04`).
- **Touch / Swipe Support**: Smooth swipe gesture handling on mobile and tablet.
- **Autoplay**: Pauses automatically on user hover or focus.

---

## 11. Before/After Image Comparison Slider
- **Interaction**: Split slider with a central drag handle (`divider bar + circular handle with dual arrows < >`).
- **Technology**: Interactive mousemove, touchmove, and keyboard accessible slider container.
- **Visuals**: Left side displays "Before / Under Construction / Raw Space", Right side displays "After / Completed Engineering & Luxury Fit-Out".
- **Floating Badges**: Pill badges marking "BEFORE" and "AFTER" for immediate clarity.

---

## 12. Button Interactions
- **Style 1 (Primary)**: Rounded pill or `border-radius: 6px`, padding `14px 28px`, semi-bold `15px`, paired with arrow icon `→`.
- **Style 2 (Secondary / Outline)**: `border: 1px solid #EAEAEA`, hover border `#111111` or `#E06D37`, background `#FFFFFF`.
- **Style 3 (Subtle Accent)**: Very light muted orange highlight for key interactive tags and primary CTAs.

---

## 13. Footer Layout
- **Structure**: 4-column modern grid:
  - Col 1: Brand Logo, company summary, corporate philosophy.
  - Col 2: Core Solutions & Services (HVAC Systems, MEP Engineering, Fit-Outs, AMC).
  - Col 3: Key Sectors & Completed Projects (Retail, Banks, Corporate Offices, Showrooms).
  - Col 4: Direct Contact (Office address in Indira Nagar, Lucknow, phone numbers, direct email).
- **Bottom Bar**: Copyright, privacy policy, terms, design attribution.

---

## 14. Mobile and Tablet Responsiveness
- **Desktop (>= 1024px)**: Full multi-column layouts, extensive whitespace, hover states enabled.
- **Tablet (768px – 1023px)**: 2-column grids, collapsed navigation into sleek hamburger menu, comfortable touch targets (`>= 48px`).
- **Mobile (< 768px)**: Single column stacked layout, sticky bottom or top quick call button, touch-friendly before/after slider with visual drag cue, responsive typography scaled using `clamp()`.

---

## 15. Overall Visual Hierarchy
1. High-impact visual first (Hero imagery establishes authority).
2. Immediate trust validation (Adani, Reliance, Maruti Suzuki logos).
3. Clear choice architecture (Turnkey Design & Build vs. Specialized MEP Engineering).
4. Concrete proof (Quantifiable project stats and before-after transformation).
5. Comprehensive capability breakdown (HVAC, Electrical, Plumbing, Fire, Interior Fit-Out).
6. Real regional projects (Completed landmarks in Lucknow and UP).
7. Transparent contact accessibility (Direct phone, Lucknow headquarters, quick inquiry form).

