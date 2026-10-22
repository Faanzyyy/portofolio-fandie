import { header, label } from "motion/react-client";

const links = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl bg-surface px-4 shadow-sm sm:h-16">
        <a href="home" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-surface">
            FA
          </span>
          <span className="hidden text-sm tracking-tight sm:block">
            FANDI <span className="font-bold">AHMAD</span>
          </span>
        </a>
        <ul className="hidden items-center gap-12 text-[11px] font-medium uppercase tracking-wider md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted transition hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-lg border border-foreground px-5 py-2 text-[11px] font-medium uppercase tracking-wider transition hover:bg-foreground hover:text-surface"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
