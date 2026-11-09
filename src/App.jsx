import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { disciplines, person } from "./content.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import DisciplineIndex from "./components/DisciplineIndex.jsx";
import Discipline from "./components/Discipline.jsx";
import Breadth from "./components/Breadth.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Lightbox from "./components/Lightbox.jsx";
import Introduction from "./components/Introduction.jsx";

/** Adds data-revealed to [data-reveal] elements as they enter the viewport. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [lightboxItem, setLightboxItem] = useState(null);
  useReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />

      <main id="main">
        <Hero />
        <Introduction />
        <DisciplineIndex />

        {disciplines.map((d, i) => (
          <Discipline
            key={d.id}
            discipline={d}
            index={i}
            onOpen={setLightboxItem}
          />
        ))}

        <Breadth />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-8 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {person.name}
          </p>
          <p>Designed and built by me in React and Tailwind CSS.</p>
        </div>
      </footer>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      <Analytics />
    </>
  );
}
