# Design Replication Strategy: WellCopy.net

## Design Philosophy
The goal is to create a pixel-perfect replica of WellCopy.net. The design is a modern, high-contrast, conversion-focused landing page characterized by a distinct "Tech/SaaS" aesthetic with a bold accent color.

<response>
<text>
**Design Movement**: Modern SaaS / High-Conversion Landing Page
**Core Principles**:
1.  **High Contrast & Clarity**: Black text on white background with a vibrant green accent (#22C55E) ensures maximum readability and directs attention to CTAs.
2.  **Bold Typography**: Utilization of heavy font weights (700/800) for headlines to create strong visual hierarchy.
3.  **Visual Rhythm**: Alternating sections of text, stats, and visual proof (logos, testimonials) to maintain user engagement.
4.  **Conversion-Centric**: Every section leads to a clear Call to Action (CTA).

**Color Philosophy**:
-   **Primary Green (#22C55E)**: Used for the logo, buttons, and key visual accents. It conveys energy, growth, and "go" (positive action).
-   **Black & White**: A strict monochrome base provides a professional, clean canvas that makes the green pop.
-   **Red Accents**: Dashed borders in red are used sparingly for decorative emphasis, adding a dynamic, almost "drafting" or "work in progress" energy.

**Layout Paradigm**:
-   **Single-Column Mobile / Multi-Column Desktop**: Standard responsive behavior.
-   **Section-Based**: Distinct horizontal bands for Hero, Social Proof, Value Prop, Process, Testimonials.
-   **Asymmetric Hero**: Text on the left, large visual on the right.

**Signature Elements**:
-   **The Lightning Bolt**: The brand icon, used in the logo and as a standalone graphic.
-   **Dashed Borders**: Red dashed lines around client logos or sections.
-   **Green Drop Shadows**: Buttons often have a hard green shadow or glow.

**Interaction Philosophy**:
-   **Direct & Punchy**: Hover effects should be snappy (e.g., button transforms).
-   **Scroll-Triggered**: Elements might fade in or slide up as the user scrolls.

**Animation**:
-   **Subtle Entrances**: Fade-in-up for text blocks.
-   **Hover States**: Buttons lift or change brightness.

**Typography System**:
-   **Headings**: A geometric sans-serif (likely 'Inter', 'Montserrat', or similar), bold/black weight.
-   **Body**: Clean sans-serif, readable size (16px+).
</text>
<probability>0.05</probability>
</response>

<response>
<text>
**Design Movement**: Brutalist Pop
**Core Principles**:
1.  **Raw & Unapologetic**: Uses bold borders and high saturation colors.
2.  **Functional Decoration**: Elements like dashed lines serve as visual containers.
3.  **Directness**: Large text, clear messaging.

**Color Philosophy**:
-   **Lime Green**: Electric and attention-grabbing.
-   **Stark Black**: For maximum contrast.

**Layout Paradigm**:
-   **Grid-Breaking**: Elements might overlap or break standard alignment slightly for effect.

**Signature Elements**:
-   **Thick Borders**: Buttons and cards might have distinct outlines.
-   **Iconography**: Simple, bold icons.

**Interaction Philosophy**:
-   **Tactile**: Buttons feel like physical switches.

**Animation**:
-   **Snappy**: Instant state changes.

**Typography System**:
-   **Display**: Heavy, perhaps slightly condensed sans-serif.
</text>
<probability>0.02</probability>
</response>

<response>
<text>
**Design Movement**: Clean Corporate
**Core Principles**:
1.  **Trust & Reliability**: Standard layouts that users are familiar with.
2.  **Minimal Distraction**: Focus on the content.

**Color Philosophy**:
-   **Green**: Associated with money and success.

**Layout Paradigm**:
-   **Centered Container**: Content is safely contained within a central column.

**Signature Elements**:
-   **Rounded Corners**: Softening the UI.
-   **Shadows**: Soft drop shadows for depth.

**Interaction Philosophy**:
-   **Smooth**: Gentle transitions.

**Animation**:
-   **None/Minimal**: Only functional animations.

**Typography System**:
-   **Standard Sans**: Open Sans or Roboto.
</text>
<probability>0.01</probability>
</response>

## Selected Approach
I will proceed with the **Modern SaaS / High-Conversion Landing Page** approach as it most accurately reflects the source material.

**Implementation Plan**:
1.  **Theme Setup**: Configure `index.css` with the specific Green (#22C55E) and Red accent colors.
2.  **Assets**: Generate a hero illustration (wireframe/line art style with green bolt) and use Lucide icons for UI elements.
3.  **Components**: Build reusable `Section`, `Button` (with specific green style), and `Card` components.
4.  **Content**: Populate with the text extracted from the site.
