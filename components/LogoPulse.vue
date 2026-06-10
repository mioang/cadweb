<template>
  <div class="pulse-wrap" ref="wrapRef">
    <!--
      Logo SVG – white rects restructured for GSAP animation.

      Each white rect lives in TWO <g> layers:
        outer <g>  = positioning transform  (do not animate)
        inner <g class="sq rN">  = animation target (no own transform)

      All 12 cardinal square transforms have been corrected to place each
      square's centre exactly on its axis at a consistent radial distance:
        r1 cardinal  =  100 px from logo centre
        r2 cardinal  =  170 px from logo centre
        r3 cardinal  =  216 px from logo centre
      Near-zero entries in rotation matrices are cleaned to exact 0.

      Diagonal squares are untouched (their off-axis errors are < 0.5 px).

      The lower-left diagonals from the original nested group are flattened
      here by composing the parent translate(-70.8816,523.17) into each child:
        r1 lower-left child e' = 3056.87  - 70.8816 = 2985.9884
                             f' =  985.845 + 523.17  = 1509.015
        r2 lower-left child e' = 2051.61  - 70.8816 = 1980.7284
                             f' = 1162.96  + 523.17  = 1686.13
    -->
    <svg
      class="pulse-svg"
      viewBox="0 0 556 556"
      xmlns="http://www.w3.org/2000/svg"
      style="fill-rule:evenodd;clip-rule:evenodd;overflow:visible"
      aria-hidden="true"
    >
      <g transform="translate(-834.418,-1455.8)">

        <!-- Blue circle background -->
        <g transform="matrix(0.93647,0,0,0.93647,-738.289,393.975)">
          <circle cx="1976.26" cy="1430.72" r="296.428" fill="rgb(15,76,117)"/>
        </g>

        <!-- ── r0  centre large square ──────────────────────────────── -->
        <g transform="translate(-638.494,464.115)">
          <g class="sq r0">
            <rect x="1697.98" y="1210.63" width="105.867" height="102.122" fill="white"/>
          </g>
        </g>

        <!-- ────────────────────────────────────────────────────────────
             r1  RING 1  8 squares  (4 cardinal corrected + 4 diagonal)
             Cardinal target radius = 100 px from logo centre
        ──────────────────────────────────────────────────────────────── -->

        <!-- r1 right  → centre (378, 270) -->
        <g transform="matrix(1.42164,0,0,1.38787,-1169.942,-30.96)">
          <g class="sq r1"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r1 upper-right diagonal (original, off-axis < 0.5 px) -->
        <g transform="matrix(0.670166,-0.670166,0.654248,0.654248,-760.22,1943.37)">
          <g class="sq r1"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r1 lower-left diagonal (flattened nested group) -->
        <g transform="matrix(-0.670166,0.670166,-0.654248,-0.654248,2985.9884,1509.015)">
          <g class="sq r1"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r1 lower-right diagonal (original) -->
        <g transform="matrix(0.670166,0.670166,-0.654248,0.654248,896.817,-147.133)">
          <g class="sq r1"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r1 upper-left diagonal (original) -->
        <g transform="matrix(-0.670166,-0.670166,0.654248,-0.654248,1329.53,3599.51)">
          <g class="sq r1"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r1 bottom  → centre (278, 370) -->
        <g transform="matrix(0,1.42164,-1.38787,0,2869.178,-556.56)">
          <g class="sq r1"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r1 top  → centre (278, 170) -->
        <g transform="matrix(0,-1.42164,1.38787,0,-644.342,4008.16)">
          <g class="sq r1"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r1 left  → centre (178, 270) -->
        <g transform="matrix(-1.42164,0,0,-1.38787,3394.778,3482.56)">
          <g class="sq r1"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- ────────────────────────────────────────────────────────────
             r2  RING 2  8 squares  (4 cardinal corrected + 4 diagonal)
             Cardinal target radius = 170 px from logo centre
        ──────────────────────────────────────────────────────────────── -->

        <!-- r2 right  → centre (448, 270) -->
        <g transform="matrix(0.947757,0,0,0.925246,-306.102,554.801)">
          <g class="sq r2"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r2 upper-right diagonal (original) -->
        <g transform="matrix(0.335083,-0.335083,0.327124,0.327124,244.419,1766.06)">
          <g class="sq r2"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r2 lower-left diagonal (flattened nested group) -->
        <g transform="matrix(-0.335083,0.335083,-0.327124,-0.327124,1980.7284,1686.13)">
          <g class="sq r2"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r2 lower-right diagonal (original) -->
        <g transform="matrix(0.335083,0.335083,-0.327124,0.327124,1073.4,858.654)">
          <g class="sq r2"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r2 upper-left diagonal (original) -->
        <g transform="matrix(-0.335083,-0.335083,0.327124,-0.327124,1152.66,2594.14)">
          <g class="sq r2"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r2 bottom  → centre (278, 440) -->
        <g transform="matrix(0,0.947757,-0.925246,0,2283.417,307.28)">
          <g class="sq r2"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r2 top  → centre (278, 100) -->
        <g transform="matrix(0,-0.947757,0.925246,0,-58.581,3144.32)">
          <g class="sq r2"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r2 left  → centre (108, 270) -->
        <g transform="matrix(-0.947757,0,0,-0.925246,2530.938,2896.799)">
          <g class="sq r2"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- ────────────────────────────────────────────────────────────
             r3  RING 3  4 squares  (cardinal only, corrected)
             Cardinal target radius = 216 px from logo centre
        ──────────────────────────────────────────────────────────────── -->

        <!-- r3 right  → centre (494, 270) -->
        <g transform="matrix(0.473879,0,0,0.462623,534.522,1140.474)">
          <g class="sq r3"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r3 bottom  → centre (278, 486) -->
        <g transform="matrix(0,0.473879,-0.462623,0,1697.744,1147.904)">
          <g class="sq r3"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r3 top  → centre (278, 54) -->
        <g transform="matrix(0,-0.473879,0.462623,0,527.092,2303.696)">
          <g class="sq r3"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

        <!-- r3 left  → centre (62, 270) -->
        <g transform="matrix(-0.473879,0,0,-0.462623,1690.314,2311.126)">
          <g class="sq r3"><rect x="1651.15" y="1240.16" width="49.848" height="51.061" fill="white"/></g>
        </g>

      </g>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  enterDelay: { type: Number, default: 0 },
})

const wrapRef = ref(null)

onMounted(async () => {
  if (!import.meta.client) return

  const { gsap } = await import('gsap')

  const svg = wrapRef.value?.querySelector('.pulse-svg')
  if (!svg) return

  const sel = c => [...svg.querySelectorAll(c)]
  const r0  = sel('.r0')
  const r1  = sel('.r1')
  const r2  = sel('.r2')
  const r3  = sel('.r3')
  const all = [...r0, ...r1, ...r2, ...r3]

  gsap.set(all, { transformOrigin: '50% 50%' })
  gsap.set(wrapRef.value, { autoAlpha: 0, y: 28 })

  let pulseTl    = null
  let isHovering = false
  let entered    = false

  function buildPulse() {
    if (pulseTl) { pulseTl.kill(); pulseTl = null }

    const up   = { ease: 'power3.out' }
    const down = { ease: 'power2.in'  }

    pulseTl = gsap.timeline({
      onComplete() {
        pulseTl = null
        if (isHovering) buildPulse()
      }
    })

    pulseTl.to(r0, { scale: 1.22, duration: 0.38, ...up })
    pulseTl.to(r0, { scale: 1,    duration: 0.40, ...down })
    pulseTl.to(r1, { scale: 1.14, duration: 0.36, ...up }, '<')
    pulseTl.to(r1, { scale: 1,    duration: 0.38, ...down })
    pulseTl.to(r2, { scale: 1.08, duration: 0.32, ...up }, '<')
    pulseTl.to(r2, { scale: 1,    duration: 0.34, ...down })
    pulseTl.to(r3, { scale: 1.05, duration: 0.28, ...up }, '<')
    pulseTl.to(r3, { scale: 1,    duration: 0.30, ...down })
  }

  // ── Entrance: fade in then auto-pulse once ───────────────────────
  gsap.timeline({ delay: props.enterDelay })
    .to(wrapRef.value, {
      autoAlpha: 1, y: 0, duration: 0.75, ease: 'power3.out',
      onComplete() {
        entered = true
        buildPulse()
      },
    })

  // ── Hover: re-trigger after entrance completes ───────────────────
  const el = wrapRef.value
  el.addEventListener('mouseenter', () => {
    isHovering = true
    if (entered && !pulseTl) buildPulse()
  })
  el.addEventListener('mouseleave', () => { isHovering = false })
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    import('gsap').then(({ gsap }) => gsap.killTweensOf('*'))
  }
})
</script>

<style scoped>
.pulse-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0; /* pre-hidden; GSAP animates to 1 */
}

.pulse-svg {
  width:  clamp(150px, 38vw, 420px);
  height: clamp(150px, 38vw, 420px);
}

@media (max-width: 480px) {
  .pulse-svg {
    width:  clamp(130px, 52vw, 200px);
    height: clamp(130px, 52vw, 200px);
  }
}

.sq { will-change: transform; }
</style>
