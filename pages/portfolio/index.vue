<template>
  <div class="page-portfolio">

    <!-- ── PAGE HERO ──────────────────────────────────────── -->
    <section class="page-hero section--dark">
      <div class="dot-grid" aria-hidden="true" />
      <div class="container page-hero__inner">
        <div class="page-hero__meta">
          <span class="num-marker">03</span>
          <div class="rule mt-sm" style="background: rgba(255,255,255,0.15); opacity: 1;" />
        </div>
        <div>
          <p class="eyebrow eyebrow--light mb-sm">Portfolio</p>
          <h1 class="page-hero__heading">
            Our recent<br />work &<br />projects.
          </h1>
        </div>
      </div>
    </section>

    <!-- ── FILTER TABS ─────────────────────────────────────── -->
    <div class="filter-bar">
      <div class="container filter-bar__inner">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-tab"
          :class="{ 'filter-tab--active': activeFilter === cat }"
          @click="activeFilter = cat"
        >{{ cat }}</button>
      </div>
    </div>

    <!-- ── GRID ───────────────────────────────────────────── -->
    <section class="section portfolio-grid-section">
      <div class="container">
        <TransitionGroup name="fade" tag="div" class="portfolio-grid">
          <NuxtLink
            v-for="project in filteredProjects"
            :key="project.id"
            :to="`/portfolio/${project.slug}`"
            class="pf-card"
          >
            <!-- Card header -->
            <div
              class="pf-card__head"
              :class="'pf-card__head--' + project.type"
              :style="project.image ? `background-image: url(${project.image})` : ''"
            >
              <div class="pf-card__head-top">
                <span class="pf-card__id">{{ project.id }}</span>
                <span class="pf-card__badge">{{ project.category }}</span>
              </div>
              <div v-if="!project.image" class="pf-card__diagram" v-html="project.diagram" />
            </div>

            <!-- Card body -->
            <div class="pf-card__body">
              <h3 class="pf-card__title">{{ project.title }}</h3>
              <p class="pf-card__desc">{{ project.summary }}</p>
              <div class="pf-card__footer">
                <span class="pf-card__loc">{{ project.location }}</span>
                <span class="pf-card__cta">View Project →</span>
              </div>
            </div>
          </NuxtLink>
        </TransitionGroup>
      </div>
    </section>

    <!-- ── CTA ────────────────────────────────────────────── -->
    <section class="section section--blue text-center">
      <div class="container flex flex-col items-center">
        <p class="eyebrow eyebrow--light mb-sm">Collaborate</p>
        <h2 style="color: var(--c-white);">Your project<br />could be next.</h2>
        <a href="https://wa.me/6285102801168" class="btn btn--white mt-lg" target="_blank" rel="noopener">Start a Conversation</a>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({ title: 'Portfolio — PT Cipta Ananta Dharma' })

const { projects } = useProjects()
const categories   = ['All', 'Structural', 'Industrial']
const activeFilter = ref('All')

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)
</script>

<style scoped>
/* ── Page Hero ────────────────────────────────────────────── */
.page-hero { position: relative; overflow: hidden; padding: 8rem 0 6rem; }

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

/* ── Filter bar ───────────────────────────────────────────── */
.filter-bar {
  border-bottom: 1px solid var(--c-light);
  background: var(--c-white);
  position: sticky;
  top: var(--header-h);
  z-index: 10;
}

.filter-bar__inner {
  display: flex;
  gap: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.filter-tab {
  font-family: var(--font-head);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 1.1rem 1.75rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--c-mid);
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;
}

.filter-tab:hover   { color: var(--c-primary); }
.filter-tab--active { color: var(--c-primary); border-color: var(--c-primary); }

/* ── Grid ─────────────────────────────────────────────────── */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* ── Card ─────────────────────────────────────────────────── */
.pf-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--c-light);
  background: var(--c-white);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.25s var(--ease-out), transform 0.25s var(--ease-out);
}

.pf-card:hover {
  box-shadow: 0 8px 32px rgba(15,76,117,0.12);
  transform: translateY(-3px);
}

.pf-card__head {
  position: relative;
  height: 180px;
  background: var(--c-primary);
  overflow: hidden;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pf-card__head--seismic { background-color: #0A3352; }
.pf-card__head--bridge  { background-color: #163f60; }
.pf-card__head--portal  { background-color: #1A6BA0; }
.pf-card__head--frame   { background-color: var(--c-primary); }

/* Photo card */
[style*="background-image"] {
  background-size: cover;
  background-position: center;
}
[style*="background-image"]::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 30, 50, 0.45) 0%,
    rgba(10, 30, 50, 0.15) 50%,
    rgba(10, 30, 50, 0.55) 100%
  );
}

.pf-card__head-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
}

.pf-card__id {
  font-family: var(--font-head);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.5);
}

.pf-card__badge {
  font-family: var(--font-head);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 0.2rem 0.6rem;
}

.pf-card__diagram {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 0.5rem;
}

.pf-card__diagram :deep(svg) {
  width: 100%;
  height: 100%;
}

.pf-card__body {
  padding: 1.75rem 1.75rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top: 3px solid var(--c-primary);
}

.pf-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--c-dark);
}

.pf-card__desc {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--c-text-2);
  flex: 1;
  max-width: none;
}

.pf-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--c-light);
}

.pf-card__loc {
  font-family: var(--font-head);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-mid);
}

.pf-card__cta {
  font-family: var(--font-head);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-primary);
  transition: letter-spacing 0.2s;
}

.pf-card:hover .pf-card__cta { letter-spacing: 0.14em; }

/* Transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.35s, transform 0.35s; }
.fade-enter-from, .fade-leave-to       { opacity: 0; transform: translateY(16px); }

/* ── Responsive ───────────────────────────────────────────── */
@media (max-width: 900px) {
  .page-hero__inner { grid-template-columns: 1fr; }
  .page-hero__inner .page-hero__meta { display: none; }
}

@media (max-width: 768px) {
  .page-hero { padding: 5rem 0 3.5rem; }
  .filter-tab { padding: 1rem 1.25rem; font-size: 0.75rem; }
}

@media (max-width: 640px) {
  .portfolio-grid { grid-template-columns: 1fr; }
  .pf-card__body { padding: 1.25rem 1.25rem 1rem; }
}
</style>
