<template>
  <div ref="el" class="parallax-layer">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  speed:     { type: Number, default: 0.25 },  // 0 = no movement, 1 = full parallax
  direction: { type: String, default: 'up' },  // 'up' | 'down'
})

const el = ref(null)

onMounted(async () => {
  if (!import.meta.client) return

  const { gsap }          = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const sign = props.direction === 'up' ? -1 : 1
  const dist = sign * props.speed * 120

  gsap.to(el.value, {
    y: dist,
    ease: 'none',
    scrollTrigger: {
      trigger: el.value,
      start: 'top bottom',
      end:   'bottom top',
      scrub: 1.2,
    }
  })
})
</script>

<style scoped>
.parallax-layer { will-change: transform; }
</style>
