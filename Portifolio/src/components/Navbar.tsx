import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sections = [
  { id: "about", label: "About" },
  { id: "services", label: "What I do" },
  { id: "resume", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport
  useEffect(() => {
    if (!onHome) {
      setActiveId(null);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const goToSection = (e: React.MouseEvent, id: string) => {
    setMenuOpen(false);
    if (!onHome) {
      e.preventDefault();
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || menuOpen
          ? "border-b border-line bg-ink"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-fasthand text-2xl text-paper"
        >
          Benitha
        </Link>

        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-8 text-sm">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => goToSection(e, id)}
                  aria-current={activeId === id ? "true" : undefined}
                  className={`relative py-1 transition-colors duration-200 hover:text-paper ${
                    activeId === id ? "text-paper" : "text-muted"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                      activeId === id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/all-projects"
                className={`rounded-md border px-3 py-1.5 transition-colors duration-200 ${
                  location.pathname === "/all-projects"
                    ? "border-paper text-paper"
                    : "border-line text-muted hover:border-paper hover:text-paper"
                }`}
              >
                All projects
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="font-mono text-xs uppercase tracking-[0.2em] text-paper md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-16 bg-ink px-5 pt-10 md:hidden"
        >
          <ul className="space-y-2">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => goToSection(e, id)}
                  className="block border-b border-line py-4 font-display text-4xl text-paper"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/all-projects"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-line py-4 font-display text-4xl italic text-paper"
              >
                All projects
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
