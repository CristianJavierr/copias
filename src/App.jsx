import { useEffect } from 'react'

const services = [
  {
    number: '01',
    title: 'Planos & copias',
    copy: 'Ploteo, escaneado y copias con la nitidez que tu proyecto necesita.',
    detail: 'A1 · A2 · A3 · A4',
    tone: 'blue',
  },
  {
    number: '02',
    title: 'Acabados',
    copy: 'Laminados, encuadernación, plastificado y soluciones que hacen durar tus ideas.',
    detail: 'Laminado · PVC · Gafetes',
    tone: 'cream',
  },
  {
    number: '03',
    title: 'Rotulación',
    copy: 'Banners, vinyl, adhesivos, etiquetas, One Vision y Panaflex para que te vean.',
    detail: 'Gran formato · Instalación',
    tone: 'pink',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M10 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5 14 10l7.5 2-7.5 2-2 7.5-2-7.5-7.5-2 7.5-2 2-7.5Z" fill="currentColor" />
    </svg>
  )
}

function App() {
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

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Plan Copias, ir al inicio">
          <span className="brand-mark"><span /></span>
          <span>Plan<span>Copias</span></span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="https://wa.me/18094406394" target="_blank" rel="noreferrer">
          Cotiza por WhatsApp <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow reveal-up" data-reveal><span className="eyebrow-dot" /> Santiago, República Dominicana</p>
          <h1 className="masked-title" data-reveal>
            <span className="masked-line"><span>Imprime</span></span>
            <span className="masked-line outline-word"><span>lo que</span></span>
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

        <div className="hero-art" data-reveal>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-label label-top"><SparkIcon /> Desde 1998</div>
          <div className="card-frame">
            <img src="/plan-copias-tarjeta.png" alt="Tarjeta de presentación de Plan Copias" />
          </div>
          <div className="art-sticker">Hazlo<br /><em>visible</em></div>
          <div className="art-label label-bottom">Papel · color · presencia</div>
        </div>

        <div className="hero-scroll" aria-hidden="true"><span /> Desliza para explorar</div>
      </section>

      <section className="statement" data-reveal>
        <p className="section-kicker">01 / El resultado</p>
        <div className="statement-content">
          <h2>Tu idea merece verse <span>bien.</span></h2>
          <p>Convertimos archivos, planos y conceptos en piezas que se sienten reales. Cuidamos cada color, cada corte y cada acabado.</p>
        </div>
        <div className="statement-stamp"><span>PC</span><small>Estudio de<br />impresión</small></div>
      </section>

      <section className="services" id="servicios">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">02 / Lo que hacemos</p>
            <h2>Del archivo<br /><span>a lo tangible.</span></h2>
          </div>
          <p className="section-note">Una sola parada para darle forma, presencia y permanencia a tus proyectos.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className={`service-card ${service.tone}`} key={service.number} data-reveal style={{ '--delay': `${index * 90}ms` }}>
              <div className="service-top"><span>{service.number}</span><ArrowIcon /></div>
              <div className="service-bottom">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <span className="service-detail">{service.detail}</span>
              </div>
            </article>
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
          <div className="process-line" />
          <div className="process-step"><span>01</span><p>Comparte<br />tu idea</p></div>
          <div className="process-step"><span>02</span><p>Elegimos<br />el acabado</p></div>
          <div className="process-step"><span>03</span><p>Lo hacemos<br />real</p></div>
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
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Plan Copias</span><span>Impresión con intención.</span><span>Arquitectura / Diseño</span></div>
      </footer>
    </main>
  )
}

export default App
