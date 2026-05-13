# AGENT MKS-2409 — Portfolio Upgrade Changelog
> **Status:** Pending Approval  
> **Scope:** Hero Section · Agent Dossier · Projects · Skills · New Sections · All-site Fixes  
> **File:** `index.html` (primary), `projects-data.js` (project additions)

---

## 🔴 SECTION 1 — IMMEDIATE FIXES (Bugs)

### 1.1 — Top-Right Social Bar: Icons/Links Not Visible
**Problem:** The GitHub, LinkedIn, and Twitter icon-links in the top-right HUD widget are rendering as broken/invisible symbols because Lucide Icons isn't initializing them in time, or the SVG color is blending with the dark pill background.

**Fix:**
- Inline the SVG paths directly for GitHub, LinkedIn, and Twitter so they don't depend on Lucide's lazy init
- Increase contrast: set icon color to `#e5e5e5` (light grey) on default, `#00f3ff` on hover for GitHub, `#0077b5` for LinkedIn, `#1DA1F2` for Twitter
- Add a subtle `border` or `background` highlight on hover so each icon is clearly tappable
- Verify the `lucide.createIcons()` call runs **after** all elements are rendered

---

### 1.2 — About Section: Garbled Unicode Symbols (â—†, â˜…, â€")
**Problem:** The `◆`, `★`, and `—` characters are stored as mis-encoded UTF-8 sequences (`â—†`, `â˜…`, `â€"`). They appear as garbage text in the browser.

**Fix:**
- Replace every encoded symbol with its correct HTML entity or literal UTF-8 character:
  - `â—†` → `◆`
  - `â˜…` → `★`
  - `â€"` → `—`
- Affected lines: Classification Banner text, "MY STORY" subheading, "WHAT I DO" subheading, quote attribution

---

## 🟡 SECTION 2 — HERO PANEL CONTENT UPDATES

### 2.1 — Remove "CONNECTED TO" Label
**Location:** `index.html` ~line 1925  
**Change:** Delete the `<p class="text-[9px] font-mono text-gray-400 tracking-wider">CONNECTED TO</p>` line entirely. The name `KRISHNA SRINIVAS` stands on its own without it.

---

### 2.2 — B.Tech Year Update
**Location:** `index.html` ~line 1928  
**Change:**
```
BEFORE: B.TECH 3RD YEAR // AIML
AFTER:  B.TECH FINAL YEAR // AIML
```

---

### 2.3 — STATUS Field
**Location:** `index.html` ~line 1941  
**Change:**
```
BEFORE: LEARNING
AFTER:  ARCHITECTING
```
*(Reflects current focus as an AI Architect-in-the-making, not just a learner)*

---

### 2.4 — SPECIALIZATION Field
**Location:** `index.html` ~line 1945  
**Change:**
```
BEFORE: AI & FULL-STACK
AFTER:  AGENTIC & AI ARCHITECT
```

---

### 2.5 — MISSION Field
**Location:** `index.html` ~line 1949  
**Change:**
```
BEFORE: BUILD & EXPLORE
AFTER:  ARCHITECT & ENGINEER
```

---

### 2.6 — Mission Statement / Tagline
**Location:** `index.html` ~line 1955-1962 (the paragraph below the data grid)  
**Change:**
```
BEFORE:
"A curious mind on a journey to build cool things. Passionate about AI & Machine Learning,
always experimenting with new ideas. I love turning curiosity into working code."

AFTER:
"Building agentic AI systems and scalable software that transform ambitious ideas into
intelligent, real-world products."
```
*(Cleaner, more senior, goal-oriented)*

---

## 🔵 SECTION 3 — AGENT DOSSIER SECTION OVERHAUL

### 3.1 — Remove "[CLEARANCE REQUIRED]" Tag
**Location:** `index.html` ~line 2047  
**Change:** Delete the `<p class="text-[9px] font-mono text-hot-red tracking-widest mb-2">[CLEARANCE REQUIRED]</p>` line entirely.

---

### 3.2 — Fix Classification Banner Symbols
**Location:** `index.html` ~line 2058-2059  
**Change:**
```
BEFORE: âˆ— EXCEPTIONAL INDIVIDUAL âˆ—   (garbled)
AFTER:  ★ EXCEPTIONAL INDIVIDUAL ★     (clean UTF-8)
```

---

### 3.3 — Fix "MY STORY" and "WHAT I DO" Sub-Headers
**Location:** `index.html` ~lines 2064, 2119  
**Change:**
```
BEFORE: â—† MY STORY      →  ◆ MY STORY
BEFORE: â—† WHAT I DO     →  ◆ WHAT I DO
```

---

### 3.4 — Upgrade "MY STORY" Body Text
**Location:** `index.html` ~lines 2066-2084 (the three `<p>` paragraphs + quote)  
**Change:** Replace the entire story block with the new version:

```
I'm KRISHNA SRINIVAS — an AI & ML engineer focused on building agentic AI systems,
scalable software, and intelligent products that create real-world impact.

Currently pursuing B.Tech in Artificial Intelligence & Machine Learning at GITAM University,
I'm driven by a relentless obsession with learning, building, and pushing beyond limits —
both as an engineer and as a person.

From AI-powered applications and automation systems to full-stack development and system
design, I enjoy transforming ambitious ideas into functional, scalable solutions.

For me, technology isn't just about writing code — it's about engineering systems that solve
meaningful problems, automate intelligently, and shape the future.

"Not just building systems. Building what comes next."
— Krishna Srinivas
```

---

## 🟣 SECTION 4 — VISUAL & DESIGN UPGRADES (All-of-them list)

### 4.1 — Hero Background: Particle/Constellation Effect
**Current:** Static cyan grid lines  
**Upgrade:** Add a canvas-based particle system behind the hero — ~80-100 floating dots connected by faint lines when near each other, slowly drifting. Color: `rgba(0, 243, 255, 0.4)`. The grid stays as a subtle base layer underneath.

---

### 4.2 — Achievement / Metrics Bar (New Subsection in Hero)
**Location:** Below the mission statement, above the Action Buttons  
**Add:** A horizontal row of 4 metrics cards:
| Metric | Value |
|--------|-------|
| Projects Shipped | 15+ |
| GitHub Repos | 20+ |
| Hackathons | SIH Finalist |
| Cloud Champion | Google Cloud Arcade |

Styled as mini HUD panels with animated count-up on scroll-enter.

---

### 4.3 — Scroll-Triggered Animations
**Current:** All sections use a basic `reveal` class with a single opacity fade  
**Upgrade:** Implement an `IntersectionObserver`-based animation system:
- **Hero → Down:** Staggered slide-in for each data grid cell (50ms delay between cells)
- **Dossier:** Slide-in-from-left for the story column, slide-in-from-right for capabilities
- **Projects:** Folder cards scale-in with bounce (`cubic-bezier(0.34, 1.56, 0.64, 1)`)
- **Skills:** Node labels fade+scale-in as the canvas enters view
- **Experience/Blog:** Cards stagger in from bottom

---

### 4.4 — Mobile Navigation Overhaul
**Current:** Simple hamburger → basic vertical link list  
**Upgrade:**
- Full-screen dark overlay with a more dramatic slide-in (transform from right)
- Each link staggers in with delay (0ms, 50ms, 100ms, 150ms, 200ms)
- Add section icons next to each nav label matching the desktop tooltips
- Add social links row at the bottom of the mobile menu with proper sizing

---

### 4.5 — New Projects Added (projects-data.js)
**Under `fullstack` category:**
- **SchoolSnap** — Biometric-enabled parent portal for school photo retrieval (FAISS, React, FastAPI)

**Under `ai` category:**
- **OMNITRIX-V01** — JARVIS-style local AI assistant with 13 specialized agent personas (Ollama, Gemma, Python)

**Under `tools` category:**
- **Madtown** — [add your description here — I'll populate from context]

---

### 4.6 — Contact Section (New)
**Add a new section** `#contact` with:
- Section header in HUD style: "OPEN A CHANNEL"
- A styled contact form: Name, Email, Message fields + Send button
- Social links bar (GitHub, LinkedIn, Twitter, Email)
- A short note: "Response within 24 hours. Always open to collaborations, projects, and conversations."
- The form will use a `mailto:` fallback or can be wired to Formspree/EmailJS if desired

---

## ✅ SECTION 5 — TASKS NOT YET CLARIFIED (Open Questions)

| # | Item | Your Input Needed |
|---|------|------------------|
| 1 | Contact form destination | Should it send to your email? Which service — Formspree, EmailJS, or just `mailto:`? |
| 2 | New projects | Any other projects beyond SchoolSnap, OMNITRIX, Madtown to add? |
| 3 | Madtown description | What does Madtown do? (I have some context but want the exact framing) |
| 4 | STATUS field value | I proposed `ARCHITECTING` — is that good or prefer something else like `BUILDING`/`SHIPPING`/`INNOVATING`? |
| 5 | Color scheme change | Keep current cyan/dark/red theme or want any accent color shifted? |
| 6 | Blog/Intel section | The nav has an "INTEL" link pointing to `#blog` — does this section have content, or should it be updated/removed? |

---

## 📋 EXECUTION ORDER (Once Approved)

1. Fix encoding bugs (symbols) across all sections
2. Fix social icon links in top-right bar
3. Update Hero panel text fields (2.1–2.6)
4. Update Dossier section (3.1–3.4)
5. Add particle background to Hero
6. Implement scroll-triggered animations
7. Overhauled mobile nav
8. Add metrics bar to Hero
9. Add new projects to `projects-data.js`
10. Add Contact section
11. Final cross-browser check & server refresh

---
> **Note to Krishna:** Once you approve this plan (or tell me what to adjust), I'll execute all changes in one pass so you see the full upgraded portfolio in one shot. Just say "go" or specify any changes to this plan!
