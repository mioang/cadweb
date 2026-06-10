<template>
  <div class="page-home">
    <section class="hero" ref="heroRef">

      <!-- Dot grid -->
      <div class="dot-grid" aria-hidden="true" />

      <!-- Swiss column lines -->
      <div class="hero__columns" aria-hidden="true">
        <span v-for="n in 6" :key="n" />
      </div>

      <div class="container hero__inner">

        <!-- Left: animated logo -->
        <div class="hero__logo-wrap">
          <ClientOnly>
            <LogoPulse :enter-delay="0.9" />
          </ClientOnly>
        </div>

        <!-- Divider -->
        <div class="hero__divider" ref="dividerRef" aria-hidden="true" />

        <!-- Right: wordmark + tagline -->
        <div class="hero__copy">
          <h1 class="hero__headline">
            <span class="hero__headline-cad" ref="cadRef">CAD</span>
            <span class="hero__headline-eng" ref="engRef">Engineering</span>
          </h1>
          <p class="hero__tagline" ref="taglineRef">We design for a better world.</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'PT Cipta Ananta Dharma — Structural Engineering' })

const heroRef    = ref(null)
const dividerRef = ref(null)
const cadRef     = ref(null)
const engRef     = ref(null)
const taglineRef = ref(null)

onMounted(async () => {
  if (!import.meta.client) return
  const { gsap } = await import('gsap')

  const divider = dividerRef.value
  const cad     = cadRef.value
  const eng     = engRef.value
  const tagline = taglineRef.value

  gsap.set([cad, eng, tagline], { autoAlpha: 0, y: 28 })
  gsap.set(divider, { scaleY: 0, transformOrigin: 'top center', autoAlpha: 0 })

  const tl = gsap.timeline({ delay: 0.25, defaults: { ease: 'power3.out' } })

  tl.to(divider, { scaleY: 1, autoAlpha: 1, duration: 0.9 }, 0)
  tl.to(cad,     { autoAlpha: 1, y: 0, duration: 0.75 }, 0.2)
  tl.to(eng,     { autoAlpha: 1, y: 0, duration: 0.75 }, 0.38)
  tl.to(tagline, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.58)
})
</script>

<style scoped>
.page-home { background: var(--c-dark); }

/* ── Hero ─────────────────────────────────────────────────── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 560px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--c-white);
}

/* Swiss column lines */
.hero__columns {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  pointer-events: none;
}
.hero__columns span {
  border-left: 1px solid rgba(255,255,255,0.04);
}
.hero__columns span:last-child {
  border-right: 1px solid rgba(255,255,255,0.04);
}

/* Inner layout */
.hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
}

.hero__logo-wrap {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__divider {
  width: 1px;
  height: clamp(220px, 30vw, 380px);
  background: rgba(255,255,255,0.12);
  flex-shrink: 0;
  margin: 0 clamp(2rem, 4vw, 4rem);
}

.hero__copy {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

/* Pre-hide animated elements to prevent GSAP flash-on-mount */
.hero__divider,
.hero__headline-cad,
.hero__headline-eng,
.hero__tagline {
  opacity: 0;
}

.hero__headline {
  display: flex;
  flex-direction: column;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.9;
  color: var(--c-white);
}

.hero__headline-cad {
  display: block;
  font-size: clamp(3rem, 12vw, 10rem);
}

.hero__headline-eng {
  display: block;
  font-size: clamp(1.375rem, 5.5vw, 4.75rem);
  font-weight: 300;
  letter-spacing: -0.01em;
  color: rgba(255,255,255,0.55);
  margin-top: 0.2em;
}

.hero__tagline {
  margin-top: 1rem;
  margin-left: 0;
  padding-left: 0;
  font-family: var(--font-head);
  font-size: clamp(0.9rem, 1.8vw, 1.125rem);
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.03em;
  color: rgba(255,255,255,0.45);
  max-width: none;
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero__inner {
    flex-direction: column;
    justify-content: center;
    gap: 1.75rem;
    text-align: center;
    padding-top: var(--header-h);
  }

  .hero__divider {
    width: clamp(120px, 35vw, 220px);
    height: 1px;
    margin: 0;
    transform-origin: left center !important;
  }

  .hero__copy {
    align-items: center;
  }

  .hero__headline {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero__inner { gap: 1.25rem; }

  .hero__headline-cad  { font-size: clamp(2.5rem, 14vw, 4rem); }
  .hero__headline-eng  { font-size: clamp(1.125rem, 6.5vw, 2rem); }

  .hero__tagline {
    font-size: 0.8125rem;
  }
}
</style>
