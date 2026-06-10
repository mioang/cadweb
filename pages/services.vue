<template>
  <div class="page-services">

    <!-- ── PAGE HERO ──────────────────────────────────────── -->
    <section class="page-hero section--dark">
      <div class="dot-grid" aria-hidden="true" />
      <div class="container page-hero__inner">
        <div class="page-hero__meta">
          <span class="num-marker">02</span>
          <div class="rule mt-sm" style="background: rgba(255,255,255,0.15); opacity: 1;" />
        </div>
        <div>
          <p class="eyebrow eyebrow--light mb-sm">Services</p>
          <h1 class="page-hero__heading">
            What we<br />bring to<br />every project.
          </h1>
        </div>
      </div>
    </section>

    <!-- ── SERVICE LIST ───────────────────────────────────── -->
    <section
      v-for="(svc, i) in services"
      :key="svc.title"
      class="svc-section section"
      :class="{ 'svc-section--alt': i % 2 !== 0 }"
    >
      <div class="container svc-section__inner">
        <Parallax3D :speed="0.2">
          <div class="svc-section__text">
            <span class="num-marker">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="rule mt-sm mb-md" />
            <p class="eyebrow mb-sm">{{ svc.category }}</p>
            <h2 class="svc-section__title">{{ svc.title }}</h2>
            <p class="svc-section__desc mt-md text-muted">{{ svc.desc }}</p>

            <ul class="svc-section__points mt-lg">
              <li v-for="point in svc.points" :key="point" class="svc-section__point">
                <span class="svc-section__bullet" />
                {{ point }}
              </li>
            </ul>
          </div>
        </Parallax3D>

        <div class="svc-section__visual">
          <div class="svc-section__block" :style="{ background: svc.color }">
            <span class="svc-section__number">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── STANDARDS ──────────────────────────────────────── -->
    <section class="section section--light standards">
      <div class="container">
        <p class="eyebrow mb-sm">Standards & Codes</p>
        <h2 class="standards__heading mb-lg">
          We design to international<br />and local standards.
        </h2>
        <div class="standards__grid">
          <div v-for="std in standards" :key="std.code" class="std-card">
            <p class="std-card__code">{{ std.code }}</p>
            <p class="std-card__name text-muted mt-xs">{{ std.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ────────────────────────────────────────────── -->
    <section class="section section--blue text-center">
      <div class="container flex flex-col items-center">
        <p class="eyebrow eyebrow--light mb-sm">Start a Project</p>
        <h2 style="color: var(--c-white);">Ready to discuss<br />your structure?</h2>
        <a href="https://wa.me/6285102801168" class="btn btn--white mt-lg" target="_blank" rel="noopener">Contact Us</a>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({ title: 'Services — PT Cipta Ananta Dharma' })

const services = [
  {
    title: 'Structural Analysis & Design',
    category: 'Core Engineering',
    color: '#0A3352',
    desc: 'We deliver comprehensive structural engineering solutions from early-stage concept development through to full construction documentation. Our team performs rigorous analysis and produces detailed designs that satisfy both performance and safety requirements.',
    points: [
      'Finite element analysis (FEA) and linear/non-linear modelling',
      'Reinforced concrete frame and slab design',
      'Steel and composite structure design',
      'Foundation and retaining wall design',
      'Structural calculations and construction documents',
      'Building code compliance review',
    ],
  },
  {
    title: 'Construction Supervision',
    category: 'Site Services',
    color: '#0F4C75',
    desc: 'Our experienced engineers provide on-site oversight and quality assurance throughout the construction phase. We verify that built work conforms to the approved design drawings and specifications, identifying and resolving deviations before they become costly problems.',
    points: [
      'Regular site inspections and progress monitoring',
      'Review and approval of shop drawings',
      'Material and workmanship quality control',
      'RFI (Request for Information) responses',
      'Non-conformance identification and remediation',
      'Completion and handover documentation',
    ],
  },
  {
    title: 'Seismic & Load Assessment',
    category: 'Advanced Analysis',
    color: '#1A6BA0',
    desc: 'Indonesia sits within one of the world\'s most seismically active regions. We apply advanced earthquake engineering principles and dynamic analysis techniques to ensure structures can safely withstand seismic events as well as wind, blast, and other dynamic loads.',
    points: [
      'Seismic hazard analysis and site classification',
      'Response spectrum and time-history analysis',
      'Performance-based earthquake engineering (PBEE)',
      'Wind and blast load assessments',
      'Existing structure vulnerability assessment',
      'Structural retrofitting design and documentation',
    ],
  },
]

const standards = [
  { code: 'SNI 1726',   name: 'Seismic Design of Buildings (Indonesia)' },
  { code: 'SNI 2847',   name: 'Structural Concrete Requirements (Indonesia)' },
  { code: 'ACI 318',    name: 'Building Code for Structural Concrete' },
  { code: 'AISC 360',   name: 'Specification for Structural Steel Buildings' },
  { code: 'ASCE 7',     name: 'Minimum Design Loads for Buildings' },
  { code: 'Eurocode 8', name: 'Seismic Design of Structures' },
]
</script>

<style scoped>
/* ── Page Hero ────────────────────────────────────────────── */
.page-hero {
  position: relative;
  overflow: hidden;
  padding: 8rem 0 6rem;
}

.page-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 3rem;
  align-items: start;
}

.page-hero__heading {
  font-size: clamp(2.5rem, 7vw, 6.5rem);
  color: var(--c-white);
  margin-top: 0.5rem;
}

/* ── Service Sections ─────────────────────────────────────── */
.svc-section__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.svc-section--alt .svc-section__inner {
  direction: rtl;
}
.svc-section--alt .svc-section__text {
  direction: ltr;
}
.svc-section--alt { background: var(--c-off-white); }

.svc-section__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
}

.svc-section__desc {
  font-size: 1.0625rem;
  line-height: 1.7;
  max-width: 52ch;
}

.svc-section__points {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.svc-section__point {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  font-size: 0.9375rem;
  color: var(--c-text-2);
}

.svc-section__bullet {
  display: block;
  width: 6px;
  height: 6px;
  background: var(--c-primary);
  flex-shrink: 0;
  margin-top: 0.45em;
}

/* Visual block */
.svc-section__visual {
  position: sticky;
  top: calc(var(--header-h) + 2rem);
}

.svc-section__block {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1.5rem;
  position: relative;
}
.svc-section__block::before {
  content: '';
  position: absolute;
  top: 1.5rem; left: 1.5rem; right: -1.5rem; bottom: -1.5rem;
  border: 1.5px solid var(--c-primary-pale);
  z-index: -1;
}

.svc-section__number {
  font-family: var(--font-head);
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 700;
  line-height: 1;
  color: rgba(255,255,255,0.12);
  letter-spacing: -0.05em;
}

/* ── Standards ────────────────────────────────────────────── */
.standards__heading {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

.standards__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--c-light);
}

.std-card {
  padding: 1.75rem 2rem;
  border-right: 1px solid var(--c-light);
  border-bottom: 1px solid var(--c-light);
}
.std-card:nth-child(3),
.std-card:nth-child(6) { border-right: none; }

.std-card__code {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--c-primary);
}
.std-card__name {
  font-size: 0.8125rem;
  line-height: 1.5;
}

/* ── Responsive ───────────────────────────────────────────── */
@media (max-width: 900px) {
  .page-hero__inner { grid-template-columns: 1fr; }
  .page-hero__inner .page-hero__meta { display: none; }
  .svc-section__inner, .svc-section--alt .svc-section__inner {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 3rem;
  }
  .svc-section__visual { display: none; }
  .standards__grid { grid-template-columns: 1fr 1fr; }
  .std-card:nth-child(even) { border-right: none; }
  .std-card:nth-child(3) { border-right: 1px solid var(--c-light); }
}

@media (max-width: 768px) {
  .page-hero { padding: 5rem 0 3.5rem; }
  .svc-section__desc { font-size: 1rem; }
}

@media (max-width: 560px) {
  .standards__grid { grid-template-columns: 1fr; }
  .std-card { border-right: none; }
  .svc-section__points { gap: 0.5rem; }
}
</style>
