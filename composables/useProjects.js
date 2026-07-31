const FACTORY_SVG = `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="112" x2="190" y2="112" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
  <line x1="25" y1="112" x2="25"  y2="68"  stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="80" y1="112" x2="80"  y2="18"  stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="135" y1="112" x2="135" y2="18" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="175" y1="112" x2="175" y2="68" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="25" y1="68"  x2="80"  y2="68"  stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
  <line x1="80" y1="18"  x2="135" y2="18"  stroke="rgba(255,255,255,0.45)" stroke-width="2"/>
  <line x1="135" y1="68" x2="175" y2="68"  stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
  <line x1="12" y1="68"  x2="188" y2="68"  stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="12" y1="43"  x2="188" y2="43"  stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4 4"/>
  <rect x="15" y="112" width="20" height="6" fill="rgba(255,255,255,0.32)"/>
  <rect x="70" y="112" width="20" height="6" fill="rgba(255,255,255,0.32)"/>
  <rect x="125" y="112" width="20" height="6" fill="rgba(255,255,255,0.32)"/>
  <rect x="165" y="112" width="20" height="6" fill="rgba(255,255,255,0.32)"/>
</svg>`

const HIGHRISE_SVG = `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="50"  y1="114" x2="50"  y2="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="100" y1="114" x2="100" y2="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="150" y1="114" x2="150" y2="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="38"  y1="114" x2="162" y2="114" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
  <line x1="38" y1="100" x2="162" y2="100" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="38" y1="86"  x2="162" y2="86"  stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="38" y1="72"  x2="162" y2="72"  stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="38" y1="58"  x2="162" y2="58"  stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="38" y1="44"  x2="162" y2="44"  stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="38" y1="30"  x2="162" y2="30"  stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="38" y1="16"  x2="162" y2="16"  stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="38" y1="4"   x2="162" y2="4"   stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
  <rect x="38"  y="114" width="18" height="6" fill="rgba(255,255,255,0.35)"/>
  <rect x="91"  y="114" width="18" height="6" fill="rgba(255,255,255,0.35)"/>
  <rect x="144" y="114" width="18" height="6" fill="rgba(255,255,255,0.35)"/>
</svg>`

const APARTMENT_SVG = `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="30"  y1="114" x2="30"  y2="8" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="100" y1="114" x2="100" y2="8" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="170" y1="114" x2="170" y2="8" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <line x1="20" y1="114" x2="180" y2="114" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
  <line x1="20" y1="96" x2="180" y2="96" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="20" y1="78" x2="180" y2="78" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="20" y1="42" x2="180" y2="42" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="20" y1="24" x2="180" y2="24" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <line x1="20" y1="8"  x2="180" y2="8"  stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
  <line x1="65"  y1="114" x2="65"  y2="8" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <line x1="135" y1="114" x2="135" y2="8" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <rect x="20"  y="114" width="18" height="6" fill="rgba(255,255,255,0.35)"/>
  <rect x="91"  y="114" width="18" height="6" fill="rgba(255,255,255,0.35)"/>
  <rect x="162" y="114" width="18" height="6" fill="rgba(255,255,255,0.35)"/>
</svg>`

const PORTAL_SVG = `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="110" x2="180" y2="110" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
  <line x1="30"  y1="110" x2="30"  y2="20" stroke="rgba(255,255,255,0.55)" stroke-width="3"/>
  <line x1="170" y1="110" x2="170" y2="20" stroke="rgba(255,255,255,0.55)" stroke-width="3"/>
  <path d="M30 20 Q100 0 170 20" stroke="rgba(255,255,255,0.55)" stroke-width="3" fill="none"/>
  <line x1="60"  y1="110" x2="60"  y2="35" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <line x1="100" y1="110" x2="100" y2="22" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <line x1="140" y1="110" x2="140" y2="35" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
</svg>`

export const projects = [
  {
    id: '01',
    slug: 'net-factory-semarang',
    title: 'Net Factory — Semarang',
    category: 'Industrial',
    type: 'frame',
    location: 'Semarang',
    year: '2019',
    image: '/projects/project1.jpg',
    diagram: FACTORY_SVG,
    summary: '1–4-storey reinforced concrete and steel frame industrial facility. Full seismic design to SNI 1726:2012 across 20,000 m² of mixed-height construction.',
    overview: `Full structural design for a 1–4-storey reinforced concrete and steel frame industrial facility in Semarang, Central Java. The project involved combined RC and steel construction across different zones of the building, reflecting the varied operational requirements of a large manufacturing environment — comprising a 4-storey office block, a 2-storey production hall with long clear spans, and single-storey auxiliary buildings including security and canteen.\n\nA complete 3D structural model was developed and all elements were designed to SNI 2847:2013, SNI 1726:2012, SNI 1727:2013, and SNI 1729:2015. Coordination between structural zones with differing floor heights and loading requirements was a key focus throughout the design process.`,
    scope: [
      'Structural system selection across mixed RC and steel zones',
      '3D structural modelling and analysis for combined RC / steel structure',
      'Seismic analysis and design per SNI 1726:2012',
      'Beam, column, slab, and foundation design per SNI 2847:2013',
      'Pile foundation design for varied floor loading conditions',
      'Construction drawing coordination and calculation report',
    ],
    specs: [
      { label: 'Floor Area',         value: '20,000 m²' },
      { label: 'Storeys',            value: '1–4' },
      { label: 'Structural System',  value: 'Composite RC / Steel Frame' },
      { label: 'Foundation',         value: 'Piled foundation with tie beams' },
      { label: 'Design Code',        value: 'SNI 1727:2013 / SNI 1726:2012 / SNI 1729:2015 / SNI 2847:2013' },
      { label: 'Status',             value: 'Completed' },
    ],
  },
  {
    id: '02',
    slug: 'student-housing-hong-kong',
    title: 'Student Housing — Hong Kong',
    category: 'Structural',
    type: 'seismic',
    location: 'Hong Kong',
    year: '2012',
    image: '/projects/project2.jpg',
    diagram: HIGHRISE_SVG,
    summary: '7–9-storey mid-rise reinforced concrete student housing development. Full structural design and documentation delivered for client review and authority submission.',
    overview: `Structural design for a mid-rise reinforced concrete student housing development in Hong Kong. The project spanned 7 to 9 storeys and required careful coordination with the architectural team to integrate structural requirements within the tight constraints of an urban site.\n\nAll structural analysis, member design, and documentation were completed in full, with calculation reports and structural drawings prepared for client review and authority submission. Foundation design was carried out to suit the site-specific ground conditions.`,
    scope: [
      'Structural analysis and design for 7–9-storey RC building',
      'Gravity frame design — beams, columns, and flat slabs',
      'Lateral load analysis and shear wall design',
      'Foundation design to site geotechnical requirements',
      'Full structural calculation report',
      'Drawing coordination and construction documentation',
    ],
    specs: [
      { label: 'Storeys',            value: '7–9' },
      { label: 'Floor Area',         value: '10,000+ m²' },
      { label: 'Structural System',  value: 'Reinforced Concrete Frame + Shear Walls' },
      { label: 'Foundation',         value: 'Bored pile foundation' },
      { label: 'Project Location',   value: 'Hong Kong' },
      { label: 'Status',             value: 'Completed' },
    ],
  },
  {
    id: '03',
    slug: 'apartment-jakarta',
    title: 'Airport Apartment — Jakarta',
    category: 'Structural',
    type: 'bridge',
    location: 'Jakarta',
    year: '2016',
    image: '/projects/project3.jpg',
    diagram: APARTMENT_SVG,
    summary: 'Multi-storey residential apartment near Soekarno-Hatta Airport. Complete in-house structural design and documentation — from preliminary system selection through to construction drawings.',
    overview: `Complete in-house structural design and documentation for a multi-storey residential apartment building located near Soekarno-Hatta International Airport, West Jakarta. All design and documentation work was carried out entirely in-house, from preliminary structural system selection through to construction drawings and full calculation reports.\n\nThe project required careful consideration of the soil conditions characteristic of Jakarta's coastal plain, together with seismic detailing appropriate to the site's hazard classification under SNI 1726. Foundation design was developed to address the compressible soils typical of this area.`,
    scope: [
      'Preliminary structural system selection and concept design',
      'Full RC frame analysis and member design',
      'Seismic analysis and ductile detailing per SNI 1726',
      'Foundation design for Jakarta alluvial soil conditions',
      'Complete in-house construction documentation',
      'Calculation report preparation for permit submission',
    ],
    specs: [
      { label: 'Storeys',            value: '5+' },
      { label: 'Floor Area',         value: '5,000+ m²' },
      { label: 'Structural System',  value: 'Reinforced Concrete Frame' },
      { label: 'Foundation',         value: 'Bored pile foundation' },
      { label: 'Design Code',        value: 'SNI 2847 / SNI 1726' },
      { label: 'Status',             value: 'Completed' },
    ],
  },
  {
    id: '04',
    slug: 'cold-storage-pasuruan',
    title: 'Fish Cold Storage — Pasuruan',
    category: 'Industrial',
    type: 'portal',
    location: 'Pasuruan',
    year: '2023',
    image: '/projects/project4.jpg',
    diagram: PORTAL_SVG,
    summary: 'Large-scale steel portal frame cold storage and processing warehouse. Includes suspended RC ground floor slab and foundation design for heavy refrigeration loads across 15,000+ m².',
    overview: `Structural design for a large-scale fish cold storage and processing warehouse in Pasuruan, East Java. The project involved steel portal frame design for the main warehouse structure, with the added complexity of a suspended reinforced concrete ground floor slab — required to meet the operational and hygiene demands of a cold storage facility, including drainage falls and heavy floor loading from refrigeration equipment and forklifts.\n\nThe portal frame system was optimised for clear span and economy of fabrication, minimising unique member sizes while satisfying all applicable strength and serviceability requirements under gravity, wind, and seismic loading. Foundation design accounted for the increased ground loads from the suspended slab system and process equipment.`,
    scope: [
      'Structural system selection and portal frame optimisation',
      'Suspended RC ground floor slab design for cold storage loads',
      'Roof and wall cladding, purlin, and girt design',
      'Pile foundation design for heavy floor and equipment loads',
      'Full connection design and structural detail drawings',
      'Construction document preparation',
    ],
    specs: [
      { label: 'Floor Area',         value: '15,000+ m²' },
      { label: 'Structural System',  value: 'Steel Portal Frame' },
      { label: 'Ground Floor',       value: 'Suspended RC Slab' },
      { label: 'Foundation',         value: 'Bored pile foundation' },
      { label: 'Design Code',        value: 'SNI 1729:2020 / AISC 360' },
      { label: 'Status',             value: 'Completed' },
    ],
  },
]

export function useProjects() {
  return { projects }
}
