<template>
  <div v-if="project" class="page-project">

    <!-- ── HERO ───────────────────────────────────────────── -->
    <section
      class="proj-hero"
      :class="'proj-hero--' + project.type"
      :style="project.image ? `background-image: url(${project.image}); background-size: cover; background-position: center;` : ''"
    >
      <div v-if="project.image" class="proj-hero__img-scrim" aria-hidden="true" />
      <div v-else class="proj-hero__diagram" v-html="project.diagram" aria-hidden="true" />
      <div class="container proj-hero__inner">
        <NuxtLink to="/portfolio" class="proj-hero__back">← Portfolio</NuxtLink>
        <div class="proj-hero__meta">
          <span class="proj-hero__id">{{ project.id }}</span>
          <span class="proj-hero__cat">{{ project.category }}</span>
        </div>
        <h1 class="proj-hero__title">{{ project.title }}</h1>
        <div class="proj-hero__tags">
          <span class="proj-hero__tag">{{ project.location }}</span>
          <span class="proj-hero__tag-dot" aria-hidden="true">·</span>
          <span class="proj-hero__tag">{{ project.year }}</span>
        </div>
      </div>
    </section>

    <!-- ── CONTENT ────────────────────────────────────────── -->
    <div class="container proj-content">

      <!-- Overview -->
      <section class="proj-section">
        <div class="proj-section__label">
          <span class="eyebrow">Overview</span>
          <div class="rule mt-sm" />
        </div>
        <div class="proj-section__body">
          <p
            v-for="(para, i) in overviewParagraphs"
            :key="i"
            class="proj-overview-text"
            :class="{ 'mt-md': i > 0 }"
          >{{ para }}</p>
        </div>
      </section>

      <!-- Scope -->
      <section class="proj-section">
        <div class="proj-section__label">
          <span class="eyebrow">Scope of Work</span>
          <div class="rule mt-sm" />
        </div>
        <div class="proj-section__body">
          <ul class="proj-scope">
            <li v-for="(item, i) in project.scope" :key="i" class="proj-scope__item">
              <span class="proj-scope__num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="proj-scope__text">{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Specs -->
      <section class="proj-section proj-section--last">
        <div class="proj-section__label">
          <span class="eyebrow">Technical Specifications</span>
          <div class="rule mt-sm" />
        </div>
        <div class="proj-section__body">
          <dl class="proj-specs">
            <div v-for="spec in project.specs" :key="spec.label" class="proj-spec-row">
              <dt class="proj-spec-label">{{ spec.label }}</dt>
              <dd class="proj-spec-value">{{ spec.value }}</dd>
            </div>
          </dl>
        </div>
      </section>

    </div>

    <!-- ── NAVIGATION ─────────────────────────────────────── -->
    <nav class="proj-nav">
      <div class="container proj-nav__inner">
        <NuxtLink
          v-if="prev"
          :to="`/portfolio/${prev.slug}`"
          class="proj-nav__item proj-nav__item--prev"
        >
          <span class="proj-nav__dir">← Previous</span>
          <span class="proj-nav__name">{{ prev.title }}</span>
        </NuxtLink>
        <div v-else class="proj-nav__item" />
        <NuxtLink
          v-if="next"
          :to="`/portfolio/${next.slug}`"
          class="proj-nav__item proj-nav__item--next"
        >
          <span class="proj-nav__dir">Next →</span>
          <span class="proj-nav__name">{{ next.title }}</span>
        </NuxtLink>
        <div v-else class="proj-nav__item" />
      </div>
    </nav>

  </div>

  <!-- 404 state -->
  <div v-else class="container" style="padding: 8rem 0; text-align: center;">
    <p class="eyebrow mb-sm">Not Found</p>
    <h1>Project not found.</h1>
    <NuxtLink to="/portfolio" class="btn mt-lg">Back to Portfolio</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { projects } = useProjects()

const project = computed(() => projects.find(p => p.slug === route.params.slug))

const currentIndex = computed(() => projects.findIndex(p => p.slug === route.params.slug))
const prev = computed(() => currentIndex.value > 0 ? projects[currentIndex.value - 1] : null)
const next = computed(() => currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null)

const overviewParagraphs = computed(() => project.value?.overview.split('\n\n') ?? [])

useHead(() => ({
  title: project.value
    ? `${project.value.title} — PT Cipta Ananta Dharma`
    : 'Project — PT Cipta Ananta Dharma',
}))
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────────────── */
.proj-hero {
  position: relative;
  padding: 7rem 0 5rem;
  background: var(--c-primary);
  color: var(--c-white);
  overflow: hidden;
}

.proj-hero--seismic { background: #0A3352; }
.proj-hero--bridge  { background: #163f60; }
.proj-hero--portal  { background: #1A6BA0; }
.proj-hero--frame   { background: var(--c-primary); }

.proj-hero__diagram {
  position: absolute;
  inset: 0;
  opacity: 0.35;
  pointer-events: none;
}

.proj-hero__img-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(8, 25, 43, 0.62) 0%,
    rgba(8, 25, 43, 0.35) 40%,
    rgba(8, 25, 43, 0.72) 100%
  );
  pointer-events: none;
}

.proj-hero__diagram :deep(svg) {
  width: 100%;
  height: 100%;
  preserveAspectRatio: xMidYMid slice;
}

.proj-hero__inner {
  position: relative;
  z-index: 1;
}

.proj-hero__back {
  display: inline-block;
  font-family: var(--font-head);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin-bottom: 3rem;
  transition: color 0.2s;
}
.proj-hero__back:hover { color: var(--c-white); }

.proj-hero__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.proj-hero__id {
  font-family: var(--font-head);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.45);
}

.proj-hero__cat {
  font-family: var(--font-head);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  border: 1px solid rgba(255,255,255,0.35);
  padding: 0.2rem 0.7rem;
}

.proj-hero__title {
  font-size: clamp(2rem, 5.5vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.0;
  color: var(--c-white);
  max-width: 14ch;
}

.proj-hero__tags {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.proj-hero__tag {
  font-family: var(--font-head);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(255,255,255,0.6);
}

.proj-hero__tag-dot { color: rgba(255,255,255,0.3); }

/* ── Content layout ───────────────────────────────────────── */
.proj-content {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.proj-section {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--c-light);
}

.proj-section--last {
  border-bottom: none;
  margin-bottom: 0;
}

.proj-section__label {
  padding-top: 0.2rem;
}

.proj-overview-text {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--c-text);
  max-width: 62ch;
}

/* Scope list */
.proj-scope {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.proj-scope__item {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--c-light);
}

.proj-scope__item:first-child { border-top: 1px solid var(--c-light); }

.proj-scope__num {
  font-family: var(--font-head);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--c-mid);
  flex-shrink: 0;
  width: 2ch;
}

.proj-scope__text {
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--c-text);
}

/* Specs table */
.proj-specs {
  display: flex;
  flex-direction: column;
}

.proj-spec-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--c-light);
}

.proj-spec-row:first-child { border-top: 1px solid var(--c-light); }

.proj-spec-label {
  font-family: var(--font-head);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-mid);
}

.proj-spec-value {
  font-size: 0.9375rem;
  color: var(--c-text);
  font-weight: 500;
}

/* ── Prev / Next nav ──────────────────────────────────────── */
.proj-nav {
  border-top: 1px solid var(--c-light);
}

.proj-nav__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.proj-nav__item {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
}

.proj-nav__item:first-child {
  border-right: 1px solid var(--c-light);
  padding-right: 2rem;
}

.proj-nav__item:last-child {
  padding-left: 2rem;
  align-items: flex-end;
  text-align: right;
}

.proj-nav__item--prev:hover,
.proj-nav__item--next:hover {
  color: var(--c-primary);
}

.proj-nav__dir {
  font-family: var(--font-head);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-mid);
}

.proj-nav__name {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* ── Responsive ───────────────────────────────────────────── */
@media (max-width: 768px) {
  .proj-hero { padding: 5rem 0 3.5rem; }

  .proj-hero__back {
    margin-bottom: 2rem;
    padding: 0.5rem 0;
    display: inline-block;
  }

  .proj-hero__title { max-width: 100%; }

  .proj-content {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .proj-section {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding-bottom: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .proj-overview-text { font-size: 1rem; }

  .proj-spec-row {
    grid-template-columns: 130px 1fr;
    gap: 0.75rem;
  }

  .proj-nav__item { padding: 1.75rem 0; }
}

@media (max-width: 480px) {
  .proj-spec-row {
    grid-template-columns: 1fr;
    gap: 0.2rem;
    padding: 0.75rem 0;
  }

  .proj-spec-label { color: var(--c-primary); }

  .proj-nav__inner { grid-template-columns: 1fr; }

  .proj-nav__item:first-child {
    border-right: none;
    border-bottom: 1px solid var(--c-light);
    padding-right: 0;
  }

  .proj-nav__item:last-child {
    padding-left: 0;
    align-items: flex-start;
    text-align: left;
  }
}
</style>
