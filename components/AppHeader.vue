<template>
  <header class="header" :class="{ 'header--scrolled': scrolled, 'header--open': menuOpen }">
    <div class="header__inner container">
      <!-- Wordmark -->
      <NuxtLink to="/" class="header__brand" @click="menuOpen = false">
        <img src="/logo.svg" alt="" class="header__logo" />
        <span class="header__name">
          <span class="header__name-main">Cipta Ananta Dharma</span>
          <span class="header__name-sub">Engineering Services</span>
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="header__nav">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="header__link"
          :class="{ 'header__link--active': isActive(link.to) }"
        >{{ link.label }}</NuxtLink>
      </nav>

      <!-- Mobile toggle -->
      <button class="header__toggle" :aria-label="menuOpen ? 'Close menu' : 'Open menu'" @click="menuOpen = !menuOpen">
        <span class="header__toggle-bar" />
        <span class="header__toggle-bar" />
      </button>
    </div>

    <!-- Mobile drawer -->
    <nav class="header__drawer" :class="{ 'header__drawer--open': menuOpen }">
      <NuxtLink
        v-for="link in links"
        :key="link.to + '-m'"
        :to="link.to"
        class="header__drawer-link"
        @click="menuOpen = false"
      >{{ link.label }}</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { to: '/about',     label: 'About'     },
  { to: '/services',  label: 'Services'  },
  { to: '/portfolio', label: 'Portfolio' },
]

function isActive(path) {
  return route.path === path || route.path.startsWith(path + '/')
}

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 24 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--header-h);
  z-index: 200;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.header--scrolled {
  border-color: var(--c-light);
  box-shadow: 0 1px 0 0 var(--c-light);
}

.header__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.header__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header__logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}

.header__name {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  line-height: 1;
}

.header__name-main {
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--c-primary);
}

.header__name-sub {
  font-family: var(--font-head);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-mid);
}

/* Nav */
.header__nav {
  display: flex;
  align-items: center;
  gap: 2.25rem;
}

.header__link {
  font-family: var(--font-head);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-text-2);
  position: relative;
  transition: color 0.2s;
}

.header__link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 1.5px;
  background: var(--c-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s var(--ease-out);
}

.header__link:hover,
.header__link--active {
  color: var(--c-primary);
}

.header__link--active::after,
.header__link:hover::after {
  transform: scaleX(1);
}

/* Mobile toggle */
.header__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  padding: 4px;
}

.header__toggle-bar {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--c-primary);
  transition: opacity 0.2s, transform 0.2s;
}

.header--open .header__toggle-bar:first-child {
  transform: translateY(3.25px) rotate(45deg);
}
.header--open .header__toggle-bar:last-child {
  transform: translateY(-3.25px) rotate(-45deg);
}

/* Mobile drawer */
.header__drawer {
  display: none;
  flex-direction: column;
  background: var(--c-white);
  border-top: 1px solid var(--c-light);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s var(--ease-out);
}

.header__drawer--open { max-height: 320px; }

.header__drawer-link {
  font-family: var(--font-head);
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 1.1rem var(--gutter);
  color: var(--c-text);
  border-bottom: 1px solid var(--c-light);
  transition: color 0.2s, background 0.2s;
}

.header__drawer-link:hover {
  color: var(--c-primary);
  background: var(--c-off-white);
}

/* Responsive */
@media (max-width: 700px) {
  .header__nav      { display: none; }
  .header__toggle   { display: flex; }
  .header__drawer   { display: flex; }
  .header__name-sub { display: none; }
}
</style>
