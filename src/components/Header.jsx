import { person } from "../content.js";

const links = [
  { href: "#what-i-do", label: "What I do" },
  { href: "#about", label: "About" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-(--header-h) border-b border-line/60 bg-bg/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="container-page flex h-full items-center justify-between gap-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {person.name}
        </a>

        <nav aria-label="Primary" className="flex items-center gap-6 sm:gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition-colors duration-(--duration-fast) hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn-primary h-10 px-5"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
