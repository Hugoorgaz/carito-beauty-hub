import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/hero.jpg";
import hairImg from "../assets/hair.jpg";
import nailsImg from "../assets/nails.jpg";
import lashesImg from "../assets/lashes.jpg";
import { Phone, Mail, MapPin, Clock, Instagram, Star, Scissors, Sparkles, Eye } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Carito Beauty Studio — Peluquería y Estética en Montequinto, Sevilla" },
      { name: "description", content: "Peluquería, uñas y estética profesional en Montequinto, Sevilla. Balayage, alisados, extensiones de pestañas, manicura y más. Reserva tu cita." },
    ],
  }),
});

const services = [
  {
    icon: Scissors,
    title: "Cabello",
    image: hairImg,
    items: [
      "Peluquería y estética profesional",
      "Alisados",
      "Balayage — transiciones naturales y luminosas",
      "Tinte y mechas (lavado, corte y peinado)",
      "Tratamientos capilares con hidratación profunda",
      "Masaje craneal incluido en servicios seleccionados",
    ],
  },
  {
    icon: Sparkles,
    title: "Uñas",
    image: nailsImg,
    items: [
      "Uñas acrílicas, poligel y permanente",
      "Manicura y pedicura",
      "Esmaltado semipermanente",
      "Arte de uñas personalizado",
    ],
  },
  {
    icon: Eye,
    title: "Estética",
    image: lashesImg,
    items: [
      "Extensión de pestañas",
      "Levantamiento y laminación de cejas",
    ],
  },
];

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-display text-xl tracking-wide text-background md:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
          Carito <span className="italic">Beauty Studio</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-background/90 md:flex">
          <a href="#servicios" className="hover:text-background">Servicios</a>
          <a href="#sobre" className="hover:text-background">Estudio</a>
          <a href="#visitanos" className="hover:text-background">Visítanos</a>
        </nav>
        <a href="tel:+34614162764" className="rounded-full border border-background/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-background transition hover:bg-background hover:text-foreground">
          Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Interior del estudio Carito Beauty Studio"
        width={1600}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/55" />
      <Nav />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-background/80">
          Montequinto · Sevilla
        </p>
        <h1 className="max-w-4xl text-5xl leading-[1.05] text-background md:text-7xl lg:text-8xl">
          Belleza cuidada,<br />
          <span className="italic font-light">hecha a tu medida.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-background/85 md:text-lg">
          Peluquería, uñas y estética profesional en un espacio cálido donde cada detalle está pensado para ti.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="tel:+34614162764" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm uppercase tracking-[0.18em] text-foreground transition hover:bg-accent">
            <Phone className="h-4 w-4" /> Pedir cita
          </a>
          <a href="#servicios" className="text-sm uppercase tracking-[0.18em] text-background/90 underline-offset-8 hover:underline">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}

function Rating() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex">
            {[0,1,2,3,4].map((i) => (
              <Star key={i} className="h-5 w-5 fill-current text-accent" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">5,0</span> · 10 reseñas verificadas en Groupon
          </p>
        </div>
        <p className="font-display text-xl italic text-foreground md:text-2xl">
          "Un trato cercano y resultados impecables."
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">El estudio</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-6xl">
            Un refugio cálido<br />para tu belleza.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-4">
          <p className="text-lg leading-relaxed text-muted-foreground">
            En Carito Beauty Studio creemos en el detalle. Trabajamos con productos profesionales y técnicas actuales para realzar tu estilo de una forma natural y duradera —desde un balayage luminoso hasta unas pestañas perfectas.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Un espacio acogedor en Montequinto donde te recibimos con tiempo, café y la mejor compañía.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Servicios</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Lo que hacemos</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Tres universos pensados al detalle: cabello, uñas y estética. Cada servicio se adapta a tu estilo y necesidad.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map(({ icon: Icon, title, image, items }) => (
            <article key={title} className="group flex flex-col bg-background">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.4} />
                  <h3 className="text-3xl">{title}</h3>
                </div>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {items.map((it) => (
                    <li key={it} className="flex gap-3 border-b border-border/60 pb-3 last:border-0">
                      <span className="text-accent">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visitanos" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Visítanos</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Te esperamos<br /><span className="italic">en Montequinto.</span></h2>

          <div className="mt-12 space-y-8">
            <Info icon={MapPin} label="Dirección">
              Avenida de Europa<br />Montequinto, Sevilla
            </Info>
            <Info icon={Phone} label="Teléfono">
              <a href="tel:+34614162764" className="hover:text-foreground">+34 614 162 764</a>
            </Info>
            <Info icon={Mail} label="Email">
              <a href="mailto:kritoagudelo0411@gmail.com" className="hover:text-foreground">kritoagudelo0411@gmail.com</a>
            </Info>
            <Info icon={Instagram} label="Instagram">
              <a href="https://instagram.com/caritobeautystudio" target="_blank" rel="noreferrer" className="hover:text-foreground">@caritobeautystudio</a>
            </Info>
          </div>
        </div>

        <div className="bg-secondary/60 p-10 md:p-14">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" strokeWidth={1.4} />
            <h3 className="text-2xl">Horario</h3>
          </div>
          <dl className="mt-8 space-y-5 text-base">
            <Row day="Lunes — Viernes" hours="9:00 — 15:00  ·  16:00 — 20:00" />
            <Row day="Sábado" hours="9:00 — 15:00" />
            <Row day="Domingo" hours="Cerrado" />
          </dl>

          <a href="tel:+34614162764" className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-primary/90">
            <Phone className="h-4 w-4" /> Reservar tu cita
          </a>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <Icon className="mt-1 h-5 w-5 flex-none text-primary" strokeWidth={1.4} />
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <div className="mt-2 text-base text-foreground/90">{children}</div>
      </div>
    </div>
  );
}

function Row({ day, hours }: { day: string; hours: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border/60 pb-4 last:border-0 sm:flex-row sm:items-baseline sm:justify-between">
      <dt className="text-muted-foreground">{day}</dt>
      <dd className="font-medium text-foreground">{hours}</dd>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row md:px-10">
        <p className="font-display text-lg text-foreground">Carito <span className="italic">Beauty Studio</span></p>
        <p>© {new Date().getFullYear()} Carito Beauty Studio · Montequinto, Sevilla</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Rating />
      <About />
      <Services />
      <Visit />
      <Footer />
    </main>
  );
}
