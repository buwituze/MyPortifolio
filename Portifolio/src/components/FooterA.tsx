const links = [
  { label: "GitHub", href: "https://github.com/buwituze" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/benitha-uwituze/" },
  { label: "Medium", href: "https://medium.com/@benithatuze15" },
  { label: "Email", href: "mailto:benithatuze15@gmail.com" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-6xl border-t border-line px-5 py-10 md:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-fasthand text-3xl text-paper">Benitha</p>
          <p className="mt-2 text-sm text-muted">
            © {year} Benitha Uwituze. Designed and built in Kigali.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="link-u text-muted hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            className="link-u text-paper"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
