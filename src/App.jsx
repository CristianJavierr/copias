import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const services = [
  {
    number: '01',
    title: 'Ploteo',
    copy: 'Ploteo en blanco y negro o full color para tus planos.',
    detail: 'B/N · Full color',
    tone: 'blue',
  },
  {
    number: '02',
    title: 'Escaneado',
    copy: 'Escaneo y copias de planos, documentos y materiales importantes.',
    detail: 'Planos · Documentos',
    tone: 'cream',
  },
  {
    number: '03',
    title: 'Copias',
    copy: 'Fotocopias claras para uso personal, académico o profesional.',
    detail: 'Color · Blanco y negro',
    tone: 'pink',
  },
  {
    number: '04',
    title: 'Laminados',
    copy: 'Protección y presencia para planos, documentos y piezas impresas.',
    detail: 'Acabado · Protección',
    tone: 'blue',
  },
  {
    number: '05',
    title: 'Impresiones',
    copy: 'Impresiones cuidadas para presentar tus ideas como merecen.',
    detail: 'Color · Calidad',
    tone: 'cream',
  },
  {
    number: '06',
    title: 'Fotocopias',
    copy: 'Soluciones rápidas para tus documentos del día a día.',
    detail: 'Rápido · Preciso',
    tone: 'pink',
  },
  {
    number: '07',
    title: 'Encuadernaciones',
    copy: 'Une y presenta tus documentos con un acabado limpio y durable.',
    detail: 'Proyectos · Presentaciones',
    tone: 'blue',
  },
  {
    number: '08',
    title: 'Plastificado',
    copy: 'Más resistencia para identificaciones, documentos y piezas de uso frecuente.',
    detail: 'Protección · Durabilidad',
    tone: 'cream',
  },
  {
    number: '09',
    title: 'Gafetes',
    copy: 'Identificaciones listas para eventos, equipos y espacios de trabajo.',
    detail: 'Identificación · PVC',
    tone: 'pink',
  },
  {
    number: '10',
    title: 'Banner',
    copy: 'Comunica a gran escala con piezas que se hacen notar.',
    detail: 'Gran formato · Exterior',
    tone: 'blue',
  },
  {
    number: '11',
    title: 'Vinyl',
    copy: 'Color y presencia para vitrinas, paredes, vehículos y más.',
    detail: 'Rotulación · Adhesión',
    tone: 'cream',
  },
  {
    number: '12',
    title: 'Adhesivos',
    copy: 'Piezas autoadhesivas para marcas, productos y campañas.',
    detail: 'Marca · Producto',
    tone: 'pink',
  },
  {
    number: '13',
    title: 'Etiquetas',
    copy: 'Identifica, organiza y dale personalidad a cada pieza.',
    detail: 'Organización · Branding',
    tone: 'blue',
  },
  {
    number: '14',
    title: 'One Vision',
    copy: 'Gráficos para cristales que dejan pasar la luz y mantienen el mensaje.',
    detail: 'Cristales · Vitrinas',
    tone: 'cream',
  },
  {
    number: '15',
    title: 'Panaflex',
    copy: 'Soluciones luminosas para fachadas y comunicación exterior.',
    detail: 'Fachadas · Exterior',
    tone: 'pink',
  },
  {
    number: '16',
    title: 'Papelería',
    copy: 'Materiales para oficina, estudio y el día a día de tu negocio.',
    detail: 'Oficina · Estudio',
    tone: 'blue',
  },
  {
    number: '17',
    title: 'Artículos de oficina',
    copy: 'Lo esencial para mantener tus proyectos y tu espacio en marcha.',
    detail: 'Suministros · Oficina',
    tone: 'cream',
  },
]

const serviceImages = [
  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1621252756235-7f37e5e5125e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=80',
]

const heroPrints = [
  { image: serviceImages[0], position: 'print-left-top', depth: 1.35 },
  { image: serviceImages[2], position: 'print-left-middle', depth: .8 },
  { image: serviceImages[6], position: 'print-left-bottom', depth: 1.1 },
  { image: serviceImages[10], position: 'print-left-front', depth: .65 },
  { image: serviceImages[1], position: 'print-right-top', depth: 1.25 },
  { image: serviceImages[9], position: 'print-right-middle', depth: .75 },
  { image: serviceImages[11], position: 'print-right-bottom', depth: 1.15 },
  { image: serviceImages[13], position: 'print-right-front', depth: .6 },
]

const serviceGroups = [
  {
    number: '01',
    title: 'Imprimir',
    label: 'Ideas sobre papel',
    copy: 'Reproducción y digitalización para planos, documentos y proyectos.',
    tone: 'blue',
    items: [0, 1, 2, 4, 5],
  },
  {
    number: '02',
    title: 'Proteger',
    label: 'Acabados que permanecen',
    copy: 'Detalles finales que hacen que cada pieza dure y se presente mejor.',
    tone: 'cream',
    items: [3, 6, 7, 8],
  },
  {
    number: '03',
    title: 'Hacer visible',
    label: 'Marca en gran formato',
    copy: 'Rotulación, señalización y materiales para que tu mensaje se note.',
    tone: 'pink',
    items: [9, 10, 11, 12, 13, 14, 15, 16],
  },
]

const mapsUrl = 'https://www.google.com/maps/place/PlanCopias+Impresiones+(Centro+de+copiado)/data=!4m2!3m1!1s0x0:0xe1b45f6e7a6878b6?sa=X&ved=1t:2428&ictx=111'
const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.873453665614!2d-70.6783495!3d19.461022099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c5337cee52df%3A0xe1b45f6e7a6878b6!2sPlanCopias%20Impresiones%20(Centro%20de%20copiado)!5e0!3m2!1ses-419!2sdo!4v1789762293685!5m2!1ses-419!2sdo'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M10 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AnimatedServiceTitle({ title }) {
  return (
    <h3 aria-label={title}>
      {[...title].map((letter, index) => (
        <span className="service-letter" key={`${title}-${index}`}>{letter === ' ' ? '\u00a0' : letter}</span>
      ))}
    </h3>
  )
}

function App() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !window.matchMedia('(hover: hover)').matches) return undefined

    const handlePointerMove = (event) => {
      const bounds = hero.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2
      hero.style.setProperty('--hero-x', `${(x * 16).toFixed(2)}`)
      hero.style.setProperty('--hero-y', `${(y * 12).toFixed(2)}`)
    }

    const resetParallax = () => {
      hero.style.setProperty('--hero-x', '0')
      hero.style.setProperty('--hero-y', '0')
    }

    hero.addEventListener('pointermove', handlePointerMove)
    hero.addEventListener('pointerleave', resetParallax)
    return () => {
      hero.removeEventListener('pointermove', handlePointerMove)
      hero.removeEventListener('pointerleave', resetParallax)
    }
  }, [])

  useEffect(() => {
    const section = servicesRef.current
    if (!section) return undefined

    let revealObserver
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray('.service-card', section)
      gsap.set(cards, { autoAlpha: 0, y: 44 })
      cards.forEach((card) => {
        gsap.set(card.querySelector('.service-media'), { clipPath: 'inset(0 100% 0 0)' })
        gsap.set(card.querySelector('.service-media img'), { scale: 1.16 })
        gsap.set(card.querySelectorAll('.service-letter'), { autoAlpha: 0, yPercent: 115 })
      })

      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const card = entry.target
          const media = card.querySelector('.service-media')
          const image = card.querySelector('.service-media img')
          const letters = card.querySelectorAll('.service-letter')

          gsap.timeline({ defaults: { ease: 'power3.out' } })
            .to(card, { autoAlpha: 1, y: 0, duration: 0.48 })
            .to(media, { clipPath: 'inset(0 0% 0 0)', duration: 0.62, ease: 'power4.inOut' }, '<0.04')
            .to(image, { scale: 1, duration: 0.8, ease: 'power2.out' }, '<')
            .to(letters, { autoAlpha: 1, yPercent: 0, duration: 0.42, stagger: 0.018, ease: 'power4.out' }, '<0.14')

          revealObserver.unobserve(card)
        })
      }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' })

      cards.forEach((card) => revealObserver.observe(card))

    }, section)

    return () => {
      revealObserver?.disconnect()
      context.revert()
    }
  }, [])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Plan Copias, ir al inicio">
          <img className="brand-logo" src="/plan-copias-logo.svg" alt="Plan Copias" />
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="https://wa.me/18094406394" target="_blank" rel="noreferrer">
          Cotiza por WhatsApp <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio" ref={heroRef}>
        <div className="hero-print-collage" aria-hidden="true">
          {heroPrints.map((print, index) => (
            <div className={`print-card ${print.position}`} style={{ '--depth': print.depth }} key={`${print.position}-${index}`}>
              <img src={print.image} alt="" loading="eager" />
            </div>
          ))}
        </div>
        <div className="hero-copy">
          <h1 className="masked-title" data-reveal>
            <span className="masked-line"><span>Imprime</span></span>
            <span className="masked-line solid-word"><span>lo que</span></span>
            <span className="masked-line"><span>imaginas.</span></span>
          </h1>
          <p className="hero-intro reveal-up delay-2" data-reveal>
            Soluciones de impresión, rotulación y acabados para proyectos que tienen algo que decir.
          </p>
          <div className="hero-actions reveal-up delay-3" data-reveal>
            <a className="button button-primary" href="#servicios">Ver servicios <ArrowIcon /></a>
            <a className="text-link" href="mailto:plancopiasimpresion@gmail.com">Hablemos <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="statement" data-reveal>
        <p className="section-kicker">01 / El resultado</p>
        <div className="statement-content">
          <h2>Tu idea merece verse <span>bien.</span></h2>
          <p>Convertimos archivos, planos y conceptos en piezas que se sienten reales. Cuidamos cada color, cada corte y cada acabado.</p>
        </div>
        <div className="statement-stamp"><span>PC</span><small>Estudio de<br />impresión</small></div>
      </section>

      <section className="services" id="servicios" ref={servicesRef}>
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">02 / Todos nuestros servicios</p>
            <h2>Servicios</h2>
          </div>
          <p className="section-note">Todo lo que necesitas para imprimir, proteger, identificar y hacer visible tu proyecto.</p>
        </div>
        <div className="service-groups">
          {serviceGroups.map((group) => (
            <div className={`service-group ${group.tone}`} key={group.number}>
              <div className="service-group-head" data-reveal>
                <div className="service-group-index"><span>{group.number}</span><i /></div>
                <p className="service-group-label">{group.label}</p>
                <h3>{group.title}</h3>
                <p className="service-group-copy">{group.copy}</p>
              </div>
              <div className="service-group-list">
                {group.items.map((index) => {
                  const service = services[index]
                  return (
                    <article className={`service-card ${service.tone} ${index === group.items[0] ? 'is-featured' : ''}`} key={service.number}>
                      <div className="service-top"><span>{service.number}</span><ArrowIcon /></div>
                      <div className="service-media">
                        <img src={serviceImages[index]} alt={`${service.title} de Plan Copias`} loading="lazy" />
                      </div>
                      <div className="service-bottom">
                        <AnimatedServiceTitle title={service.title} />
                        <p>{service.copy}</p>
                        <span className="service-detail">{service.detail}</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process" data-reveal>
        <div className="process-copy">
          <p className="section-kicker">03 / Nuestro enfoque</p>
          <h2>Claro desde el primer <span>archivo.</span></h2>
          <p>Cuéntanos qué necesitas, trae tu archivo o visítanos. Te ayudamos a elegir la mejor combinación de material, tamaño y acabado.</p>
          <a className="button button-light" href="mailto:plancopiasimpresion@gmail.com">Escribir por email <ArrowIcon /></a>
        </div>
        <div className="process-steps">
          <div className="process-step"><span>01</span><p>Comparte<br />tu idea</p></div>
          <div className="process-step"><span>02</span><p>Elegimos<br />el acabado</p></div>
          <div className="process-step"><span>03</span><p>Lo hacemos<br />real</p></div>
        </div>
      </section>

      <section className="map-section" id="ubicacion" data-reveal>
        <div className="map-copy">
          <p className="section-kicker">04 / Ubicación</p>
          <h2>Visítanos<br /><span>en Santiago.</span></h2>
          <p>C/E. León Jimenes #48, Edif. Cristal<br />Villa Progreso, Santiago, R.D.</p>
          <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps <ArrowIcon /></a>
        </div>
        <div className="map-frame">
          <iframe
            title="Ubicación de Plan Copias en Santiago"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <footer className="footer" id="contacto">
        <div className="footer-main" data-reveal>
          <p className="section-kicker">04 / Encuéntranos</p>
          <h2>Hagamos algo<br /><span>que se note.</span></h2>
          <a className="footer-email" href="mailto:plancopiasimpresion@gmail.com">plancopiasimpresion@gmail.com <ArrowIcon /></a>
        </div>
        <div className="footer-details">
          <div><span>Visítanos</span><p>C/E. León Jimenes #48, Edif. Cristal<br />Villa Progreso, Santiago, R.D.</p></div>
          <div><span>Llámanos</span><p><a href="tel:+18098066394">809.806.6394</a><br /><a href="https://wa.me/18094406394" target="_blank" rel="noreferrer">WhatsApp 809.440.6394</a></p></div>
          <div><span>Para proyectos de</span><p>Arquitectura · negocios<br />y buenas ideas.</p></div>
          <div><span>Horario y delivery</span><p>Desde las 7:15 AM<br />Envíanos tu trabajo por correo o WhatsApp y te lo llevamos a tu oficina.</p></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Plan Copias</span><span>Impresión con intención.</span><span>Arquitectura / Diseño</span></div>
      </footer>
    </main>
  )
}

export default App
