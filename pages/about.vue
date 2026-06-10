<template>
  <div class="page-about">

    <!-- ── PAGE HERO ──────────────────────────────────────── -->
    <section class="page-hero section--dark">
      <div class="dot-grid" aria-hidden="true" />
      <div class="container page-hero__inner">
        <div class="page-hero__meta">
          <span class="num-marker">01</span>
          <div class="rule mt-sm" style="background: rgba(255,255,255,0.15); opacity: 1;" />
        </div>
        <div>
          <p class="eyebrow eyebrow--light mb-sm">About</p>
          <h1 class="page-hero__heading">
            Building the<br />backbone<br />of Indonesia.
          </h1>
        </div>
      </div>
    </section>

    <!-- ── STORY ──────────────────────────────────────────── -->
    <section class="section story">
      <div class="container story__inner">
        <Parallax3D :speed="0.2">
          <div class="story__lead">
            <p>
              PT Cipta Ananta Dharma is a structural engineering consultancy
              dedicated to the art and science of safe, enduring structures.
              We work at the intersection of engineering rigour and architectural
              vision — translating bold concepts into structures that stand for
              generations.
            </p>
            <p class="mt-md">
              Our name reflects our purpose:
              <em>Cipta</em> (to create), <em>Ananta</em> (infinite), and
              <em>Dharma</em> (righteous duty). We create enduring structures
              as our righteous contribution to the built environment.
            </p>
          </div>
        </Parallax3D>

        <div class="story__visual">
          <div class="story__accent-block" />
        </div>
      </div>
    </section>

    <!-- ── MISSION & VALUES ───────────────────────────────── -->
    <section class="section section--light values">
      <div class="container">
        <div class="values__header mb-lg">
          <p class="eyebrow mb-sm">Our Mission</p>
          <h2 class="values__mission">
            To deliver world-class structural engineering that stands
            the test of time.
          </h2>
        </div>

        <div class="values__grid">
          <div
            v-for="(val, i) in values"
            :key="val.label"
            class="val-card"
          >
            <span class="num-marker">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="rule mt-sm mb-md" />
            <h3 class="val-card__label">{{ val.label }}</h3>
            <p class="val-card__desc mt-xs text-muted">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── EXPERTISE ──────────────────────────────────────── -->
    <section class="section expertise">
      <div class="container expertise__inner">
        <Parallax3D :speed="0.15" direction="down">
          <div>
            <p class="eyebrow mb-sm">Expertise</p>
            <h2 class="expertise__heading">
              Deep knowledge.<br />Proven results.
            </h2>
          </div>
        </Parallax3D>

        <ul class="expertise__list">
          <li
            v-for="(item, i) in expertise"
            :key="item"
            class="expertise__item"
          >
            <span class="num-marker">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="expertise__text">{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ── CTA ────────────────────────────────────────────── -->
    <section class="section section--blue about-cta text-center">
      <div class="container flex flex-col items-center">
        <p class="eyebrow eyebrow--light mb-sm">Work With Us</p>
        <h2 style="color: var(--c-white);">Let's build<br />something great.</h2>
        <a href="https://wa.me/6285102801168" class="btn btn--white mt-lg" target="_blank" rel="noopener">Get in Touch</a>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({ title: 'About — PT Cipta Ananta Dharma' })

const values = [
  {
    label: 'Precision',
    desc: 'Every calculation, every detail reviewed to the highest standard of engineering accuracy.',
  },
  {
    label: 'Safety',
    desc: 'The safety of occupants and the public is the non-negotiable foundation of our work.',
  },
  {
    label: 'Innovation',
    desc: 'We embrace advanced analysis tools and methods to solve complex structural challenges.',
  },
  {
    label: 'Partnership',
    desc: 'We collaborate closely with clients, architects, and contractors throughout every phase.',
  },
]

const expertise = [
  'Multi-storey reinforced concrete structures',
  'Steel frame and composite design',
  'Foundation engineering & pile design',
  'Seismic design & earthquake engineering',
  'Finite element analysis (FEA)',
  'Construction document production',
  'Peer review & independent checking',
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

/* ── Story ────────────────────────────────────────────────── */
.story__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.story__lead p {
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--c-text-2);
  max-width: 52ch;
}
.story__lead em { font-style: normal; color: var(--c-primary); font-weight: 600; }

.story__accent-block {
  width: 100%;
  aspect-ratio: 1;
  background: var(--c-primary);
  position: relative;
}
.story__accent-block::before {
  content: '';
  position: absolute;
  top: 2rem; left: 2rem; right: -2rem; bottom: -2rem;
  border: 1.5px solid var(--c-primary-pale);
}

/* ── Values ───────────────────────────────────────────────── */
.values__mission {
  font-size: clamp(1.375rem, 3vw, 2.25rem);
  max-width: 36ch;
  line-height: 1.25;
}

.values__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--c-light);
}

.val-card {
  padding: 2.5rem 2rem;
  border-right: 1px solid var(--c-light);
}
.val-card:last-child { border-right: none; }

.val-card__label {
  font-size: 1.125rem;
  font-weight: 700;
}
.val-card__desc {
  font-size: 0.875rem;
  line-height: 1.65;
}

/* ── Expertise ────────────────────────────────────────────── */
.expertise__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.expertise__heading {
  font-size: clamp(2rem, 4.5vw, 3.5rem);
}

.expertise__list { margin-top: 0.5rem; }

.expertise__item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 1rem;
  align-items: baseline;
  padding: 1rem 0;
  border-bottom: 1px solid var(--c-light);
}

.expertise__text {
  font-size: 1rem;
  font-weight: 500;
}

/* ── Responsive ───────────────────────────────────────────── */
@media (max-width: 900px) {
  .page-hero__inner { grid-template-columns: 1fr; }
  .page-hero__inner .page-hero__meta { display: none; }
  .story__inner { grid-template-columns: 1fr; }
  .story__visual { display: none; }
  .values__grid { grid-template-columns: 1fr 1fr; }
  .val-card:nth-child(even) { border-right: none; }
  .val-card:nth-child(-n+2) { border-bottom: 1px solid var(--c-light); }
  .expertise__inner { grid-template-columns: 1fr; gap: 3rem; }
}

@media (max-width: 768px) {
  .page-hero { padding: 5rem 0 3.5rem; }
  .story__lead p { font-size: 1rem; }
  .values__header { margin-bottom: 2rem; }
}

@media (max-width: 560px) {
  .values__grid { grid-template-columns: 1fr; }
  .val-card { border-right: none; border-bottom: 1px solid var(--c-light); }
  .val-card:last-child { border-bottom: none; }
  .expertise__item { grid-template-columns: 32px 1fr; }
}
</style>
