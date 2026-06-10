<template>
  <footer class="footer">
    <div class="footer__top container">
      <div class="footer__brand">
        <img src="/logo.svg" alt="PT CAD" class="footer__logo" />
        <p class="footer__company">PT Cipta Ananta Dharma</p>
        <p class="footer__tagline">Engineering Services</p>
      </div>

      <nav class="footer__nav">
        <p class="eyebrow eyebrow--light mb-sm">Navigation</p>
        <ul>
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="footer__link">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="footer__services">
        <p class="eyebrow eyebrow--light mb-sm">Services</p>
        <ul>
          <li v-for="s in services" :key="s">
            <span class="footer__service-item">{{ s }}</span>
          </li>
        </ul>
      </div>

      <div class="footer__contact">
        <p class="eyebrow eyebrow--light mb-sm">Contact</p>
        <p class="footer__contact-line">Jakarta, Indonesia</p>
        <p class="footer__contact-line mt-xs">
          <a href="https://wa.me/6285102801168" class="footer__link" target="_blank" rel="noopener">WhatsApp</a>
        </p>
      </div>
    </div>

    <div class="footer__bottom container">
      <p class="footer__copy">
        &copy; {{ year }} PT Cipta Ananta Dharma. All rights reserved.
      </p>
      <p class="footer__rights">Structural Engineering · Jakarta</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const links = [
  { to: '/',          label: 'Home'      },
  { to: '/about',     label: 'About'     },
  { to: '/services',  label: 'Services'  },
  { to: '/portfolio', label: 'Portfolio' },
]

const services = [
  'Structural Analysis & Design',
  'Construction Supervision',
  'Seismic & Load Assessment',
]
</script>

<style scoped>
.footer {
  background: var(--c-dark);
  color: var(--c-white);
}

.footer__top {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 3rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.footer__logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.footer__company {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.footer__tagline {
  font-size: 0.8125rem;
  color: var(--c-mid);
  margin-top: 0.25rem;
}

.footer__link {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.65);
  transition: color 0.2s;
  display: inline-block;
  padding: 0.2rem 0;
}
.footer__link:hover { color: var(--c-white); }

ul li + li { margin-top: 0.35rem; }

.footer__service-item {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.65);
}

.footer__contact-line {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.65);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.footer__copy,
.footer__rights {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.05em;
}

@media (max-width: 900px) {
  .footer__top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .footer__top { padding-top: 3.5rem; padding-bottom: 3.5rem; }
}
@media (max-width: 560px) {
  .footer__top { grid-template-columns: 1fr; gap: 2rem; padding-top: 3rem; padding-bottom: 3rem; }
  .footer__bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
}
</style>
