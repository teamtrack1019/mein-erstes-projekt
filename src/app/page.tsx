"use client";

import { useState } from "react";

const navigation = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

const services = [
  {
    title: "Büroreinigung",
    text: "Arbeitsplätze, Küchen und Sanitärbereiche bleiben nutzbar, ohne den Tagesbetrieb zu unterbrechen.",
  },
  {
    title: "Unterhaltsreinigung",
    text: "Feste Touren für Flure, Empfang und Gemeinschaftsflächen — mit demselben Team vor Ort.",
  },
  {
    title: "Glas und Fenster",
    text: "Streifenfreie Innen- und Außenreinigung für Schaufenster, Trennwände und Treppenhausverglasung.",
  },
  {
    title: "Treppenhäuser",
    text: "Stufen, Geländer und Eingänge in Wohnanlagen, gepflegt nach einem vereinbarten Rhythmus.",
  },
  {
    title: "Grundreinigung",
    text: "Intensivreinigung nach Umbau, Auszug oder wenn der Unterhalt allein nicht mehr reicht.",
  },
  {
    title: "Praxen und Kanzleien",
    text: "Diskrete Reinigung außerhalb der Sprechzeiten, mit klaren Hygieneabsprachen.",
  },
];

const steps = [
  {
    number: "01",
    title: "Besichtigung",
    text: "Wir gehen die Flächen mit Ihnen durch und notieren, was regelmäßig und was nur gelegentlich anfällt.",
  },
  {
    number: "02",
    title: "Festes Angebot",
    text: "Sie erhalten einen nachvollziehbaren Preis, Einsatzzeiten und eine feste Ansprechperson.",
  },
  {
    number: "03",
    title: "Laufender Dienst",
    text: "Das Team reinigt nach Plan. Abweichungen melden wir, statt sie stillschweigend zu verschieben.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="bg-white text-navy">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#start" className="leading-tight" onClick={closeMenu}>
            <span className="block text-lg font-semibold tracking-tight">
              Nordglanz
            </span>
            <span className="block text-xs tracking-[0.18em] text-white/70 uppercase">
              Gebäudereinigung
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Hauptmenü">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-mist md:inline-flex"
          >
            Angebot anfragen
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menü</span>
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px bg-white" />
              <span className="h-px bg-white" />
              <span className="h-px bg-white" />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-menu"
            className="border-t border-white/10 px-6 py-4 md:hidden"
            aria-label="Mobilmenü"
          >
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-1 text-white/90"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#kontakt"
                  className="mt-2 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-navy"
                  onClick={closeMenu}
                >
                  Angebot anfragen
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>

      <main id="start">
        <section className="bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_0.8fr] md:py-28">
            <div>
              <p className="text-sm tracking-[0.2em] text-white/60 uppercase">
                Hamburg und Umland
              </p>
              <h1 className="mt-4 max-w-xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
                Saubere Räume. Klare Verantwortung.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/75">
                Nordglanz reinigt Büros, Praxen und Wohnanlagen. Gründlich,
                pünktlich und mit einem Team, das Sie wiedererkennen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#leistungen"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-mist"
                >
                  Leistungen ansehen
                </a>
                <a
                  href="#kontakt"
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Gespräch vereinbaren
                </a>
              </div>
            </div>

            <dl className="grid content-end gap-6 border-t border-white/15 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <div>
                <dt className="text-sm text-white/60">Einsatzgebiet</dt>
                <dd className="mt-1 text-2xl font-medium">Hamburg</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Objektarten</dt>
                <dd className="mt-1 text-2xl font-medium">Büro, Praxis, Haus</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Arbeitsweise</dt>
                <dd className="mt-1 text-2xl font-medium">Feste Teams</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="leistungen" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.2em] text-navy/50 uppercase">
                Leistungen
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Was wir regelmäßig übernehmen
              </h2>
              <p className="mt-4 text-lg leading-8 text-navy/70">
                Jeder Auftrag bekommt einen festen Umfang. Sonderwünsche stehen
                im Plan, nicht in einer Fußnote.
              </p>
            </div>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <li key={service.title} className="bg-white p-6">
                  <p className="text-sm font-medium text-navy/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-navy/70">{service.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="ablauf" className="scroll-mt-24 bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm tracking-[0.2em] text-navy/50 uppercase">
              Ablauf
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Vom ersten Rundgang zum festen Termin
            </h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <li key={step.number}>
                  <p className="text-sm font-medium text-navy/40">{step.number}</p>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-navy/70">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="ueber-uns" className="scroll-mt-24 bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="text-sm tracking-[0.2em] text-white/50 uppercase">
                Über uns
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Ein Team, das das Objekt kennt
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/75">
              Nordglanz arbeitet mit überschaubaren Touren. Dieselben Personen
              schließen auf, reinigen und schließen wieder ab. Material und
              Schlüssel bleiben dokumentiert, und Sie erreichen uns direkt,
              wenn ein Termin verschoben werden muss.
            </p>
          </div>
        </section>

        <section id="kontakt" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="text-sm tracking-[0.2em] text-navy/50 uppercase">
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Schreiben Sie uns den Objektrahmen
              </h2>
              <p className="mt-4 max-w-md text-lg leading-8 text-navy/70">
                Fläche, Lage und gewünschte Tage genügen für ein erstes
                Gespräch. Die Besichtigung ist unverbindlich.
              </p>
            </div>
            <address className="rounded-2xl border border-line bg-mist p-6 not-italic">
              <p className="text-lg font-semibold">Nordglanz Gebäudereinigung</p>
              <p className="mt-3 leading-7 text-navy/70">
                Beispielweg 8
                <br />
                20457 Hamburg
              </p>
              <p className="mt-4">
                <a className="underline decoration-navy/30 underline-offset-4" href="mailto:kontakt@nordglanz.example">
                  kontakt@nordglanz.example
                </a>
              </p>
            </address>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-navy/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Nordglanz Gebäudereinigung</p>
          <p>Hamburg</p>
        </div>
      </footer>
    </div>
  );
}
