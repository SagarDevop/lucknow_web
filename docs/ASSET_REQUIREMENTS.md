
# Asset Requirements & Visual Direction Specification

> **CRITICAL RESTRICTION**:  
> DO NOT extract, crop, screenshot or reuse any images from the client's PDF (`1.jpg.pdf`). The PDF is strictly a source of business information and visual reference.  
> All images for the website must be sourced independently from high-resolution, royalty-free photography libraries (Unsplash, Pexels, licensed architectural photography).

---

## 1. Global Visual Direction & Aesthetic Standards

- **Mood & Style**: Editorial, architectural, high-end engineering, clean, modern, uncluttered.
- **Lighting**: Bright natural daylight paired with deliberate warm architectural lighting (3000K–4000K), crisp highlights, deep clean shadows without digital noise.
- **Color Temperature**: Neutral white with soft warm ambient glow, punctuated by subtle metallic accents (ductwork, chillers) and clean glass facades.
- **Human Presence**: Subtle, professional engineers in safety helmets and hi-vis vests inspecting blueprints or HVAC installations, or uncluttered spaces highlighting pure architectural volume.
- **Prohibited Imagery**: Low-resolution stock photos, cheesy handshake stock models, dated generic 2000s office cubicles, watermarked images, or poorly lit smartphone photos.

---

## 2. Section-by-Section Asset Specifications

### Section 1: Hero Banner Carousel (3 Slides)
- **Role**: Immediate visual authority and immersive tone-setting.
- **Aspect Ratio**: `16:9` to `21:9` widescreen banner (Desktop: `1920x1080` min; Mobile: responsive crop `1080x1350` or center-cropped `16:9`).
- **Subject Matters**:
  1. **Slide 1 (Engineering & HVAC Excellence)**: Modern corporate interior with visible exposed spiral ductwork, architectural linear diffusers, and luxury wooden ceiling accents.
  2. **Slide 2 (Turnkey Workplace Execution)**: Sleek, high-ceilinged modern executive office or reception area with glass partitions and sophisticated lighting design.
  3. **Slide 3 (Large Scale Commercial Infrastructure)**: High-tech rooftop HVAC chiller units against clean sunrise/sunset sky, or expansive commercial retail floor with seamless airflow.
- **Recommended Palette**: Deep slate, cool blue glass, warm oak interior timber, crisp white.

### Section 2: Credibility & Overview (Side Image)
- **Role**: Accompany the core company introduction and stats counters.
- **Aspect Ratio**: `4:5` portrait or `1:1` square (`800x1000` or `800x800`).
- **Subject Matter**: Modern commercial building facade at dusk with lit glass windows, or an engineer reviewing blueprints on an active high-end site.

### Section 3: Dual Pathway (Panorama Split Cards)
- **Role**: Two interactive visual cards for "Turnkey Design & Build" vs. "MEP & HVAC Engineering".
- **Aspect Ratio**: `16:10` or `3:2` (`800x500`).
- **Subjects**:
  - **Card 1 (Turnkey Design & Build)**: Finished luxury commercial office workspace with bespoke furniture and accent lighting.
  - **Card 2 (MEP Engineering & HVAC)**: Clean industrial-grade commercial mechanical room or ceiling MEP coordination with color-coded pipes and clean ducting.

### Section 4: Core Services Matrix (4 Services)
- **Role**: Visual anchors for the four primary service pillars.
- **Aspect Ratio**: `4:3` or `16:9` (`600x450`).
- **Subjects**:
  1. **HVAC Systems**: Commercial VRF outdoor units or neat indoor cassette installation.
  2. **MEP Works**: Pristine electrical main distribution panel / HT-LT switchgear room or stainless steel fire sprinkler header.
  3. **Interior Fit-Outs**: Luxury showroom or corporate boardroom with acoustic ceiling and minimalist aesthetic.
  4. **AMC & Operations**: Professional technician using digital manifold gauges or thermal inspection scanner on cooling equipment.

### Section 5: The Transformation (Before / After Comparison)
- **Role**: Interactive visual comparison demonstrating engineering impact.
- **Aspect Ratio**: `16:9` widescreen uniform ratio (`1400x787`).
- **Subjects**:
  - **Before (Left)**: Raw commercial space during grey-structure phase (unpainted concrete, unfinished rough ceiling, unorganized conduits, bare floor).
  - **After (Right)**: Exactly matched perspective of a completely transformed corporate office (sleek linear lighting, concealed HVAC, polished marble/wood flooring, glass partitions).

### Section 6: Quality, Safety & Process Highlights (4 Step Cards)
- **Role**: Visual support for the 5-step methodology (Site Coordination, Installation, Testing, Commissioning, Handover).
- **Aspect Ratio**: `3:2` (`600x400`).
- **Subjects**: Close-up of engineering blueprints with digital tablet, precision electrical multimeter testing, safety gear inspection.

### Section 7: Project Portfolio Grid (6 Highlighted Landmark Projects)
- **Role**: Editorial gallery representing our client's diverse completed commercial sectors.
- **Aspect Ratio**: Mixed editorial grid (`4:3` landscape and `3:4` portrait).
- **Subjects**:
  1. **Star Light Palace (Banquet/Palace)**: Grand, illuminated architectural hospitality hall.
  2. **Azorte / Reliance Fashion (Retail Superstore)**: High-end retail showroom with dynamic track lighting and open ceilings.
  3. **IDFC First Bank (Financial Institution)**: Clean, contemporary corporate banking branch with glass entrance and crisp branding.
  4. **Physics Wallah / Vidyapeeth (Educational Complex)**: Modern institutional auditorium or contemporary academic facility.
  5. **Maruti Suzuki Arena / Nexa (Automotive Showroom)**: Glazed automobile dealership showroom with gleaming vehicles under ceiling spot arrays.
  6. **Emerald Paper / Adani Infrastructure (Commercial/Industrial)**: Modern industrial facility or logistics center with high-bay lighting and ventilation.

---

## 3. Technical Image Standards & Optimization

| Parameter | Desktop Standard | Mobile Standard | Format |
| :--- | :--- | :--- | :--- |
| Hero Slides | `1920x1080px`, < 250KB | `1080x1350px`, < 120KB | WebP / AVIF with JPG fallback |
| Featured Cards | `800x600px`, < 100KB | `600x450px`, < 60KB | WebP / AVIF |
| Thumbnails & Avatars | `200x200px`, < 30KB | `150x150px`, < 20KB | WebP / SVG |
| Loading Strategy | `loading="eager"` (Slide 1 only) | `loading="lazy"` (all below fold) | Native HTML5 with fetchpriority |
| Contrast & Accessibility | 40%–55% dark scrim overlay when text is placed directly over imagery |
