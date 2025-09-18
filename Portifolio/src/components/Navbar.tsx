import { useState, useEffect } from "react";

// Configuration object for easy management
const navbarConfig = {
  logo: {
    icon: "bx bx-laptop",
    text: "Benitha Uwituze",
    fontFamily: "fasthand",
  },
  navigationItems: [
    { type: "anchor", href: "#home", label: "Home" },
    { type: "anchor", href: "#about", label: "About" },
    { type: "anchor", href: "#services", label: "Services" },
    { type: "anchor", href: "#resume", label: "Resume" },
    { type: "link", to: "#", label: "Projects" },
    { type: "anchor", href: "#contact", label: "Contact" },
  ],
  socialLinks: [
    {
      href: "https://github.com/buwituze",
      icon: "bx bxl-github",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/benitha-uwituze/",
      icon: "bx bxl-linkedin-square",
      label: "LinkedIn",
    },
    { href: "", icon: "bx bxl-instagram-alt", label: "Instagram" },
  ],
  scrollThreshold: 10,
};

interface NavigationItem {
  type: string;
  to?: string;
  href?: string;
  label: string;
}
interface Social {
  href: string;
  icon: string;
  label: string;
}
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > navbarConfig.scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Navigation item component
  const NavItem = ({
    item,
    isMobile = false,
  }: {
    item: NavigationItem;
    isMobile?: boolean;
  }) => {
    const href = item.type === "link" ? item.to : item.href;
    const baseClasses = `
      block no-underline font-medium text-base px-4 py-2 rounded-full
      transition-all duration-300 ease-out relative overflow-hidden
      hover:text-orange-500 hover:-translate-y-0.5
    `;

    const desktopClasses = isScrolled
      ? "text-slate-800 hover:bg-orange-500/10"
      : "text-white/90 hover:bg-orange-500/10";

    const mobileClasses = "text-white/90 hover:bg-orange-500/10";

    return (
      <li>
        <a
          href={href}
          className={`${baseClasses} ${
            isMobile ? mobileClasses : desktopClasses
          }`}
          onClick={closeMobileMenu}
        >
          {item.label}
        </a>
      </li>
    );
  };

  // Social link component
  const SocialLink = ({ social }: { social: Social }) => (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="group"
    >
      <i
        className={`
          ${social.icon} text-orange-500 text-xl p-2 rounded-full
          bg-orange-500/10 transition-all duration-300 ease-out
          group-hover:text-white group-hover:bg-orange-500 
          group-hover:-translate-y-1 group-hover:scale-110
          group-hover:shadow-lg group-hover:shadow-orange-500/40
        `}
      />
    </a>
  );

  // Mobile menu toggle button
  const MobileMenuToggle = () => (
    <button
      className="md:hidden flex flex-col bg-transparent border-none cursor-pointer p-2 gap-1"
      onClick={toggleMobileMenu}
      aria-label="Toggle mobile menu"
      aria-expanded={mobileMenuOpen}
    >
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`
            w-6 h-1 rounded-sm transition-all duration-300 ease-out
            ${isScrolled ? "bg-slate-800" : "bg-white"}
            ${
              mobileMenuOpen && i === 1
                ? "rotate-45 translate-x-1.5 translate-y-1.5"
                : ""
            }
            ${mobileMenuOpen && i === 2 ? "opacity-0" : ""}
            ${
              mobileMenuOpen && i === 3
                ? "-rotate-45 translate-x-1.5 -translate-y-1.5"
                : ""
            }
          `}
        />
      ))}
    </button>
  );

  // Mobile menu overlay
  const MobileMenuOverlay = () => (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[999]"
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[1000] w-4/5 max-w-sm">
        <ul
          className="
          list-none flex flex-col
          bg-slate-900/98 backdrop-blur-xl
          border border-orange-400/20 rounded-lg
          p-5 gap-2
          shadow-2xl shadow-black/30
        "
        >
          {navbarConfig.navigationItems.map((item, index) => (
            <NavItem key={index} item={item} isMobile />
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <>
      {/* Import Boxicons - scoped to this component */}
      <style>{`
        @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
      `}</style>

      <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[1000] w-[90%] max-w-screen-xl">
        <div
          className={`
          ${
            isScrolled
              ? "bg-white/95 border-black/10 shadow-xl shadow-black/15"
              : "bg-slate-900/95 border-orange-400/20 shadow-2xl shadow-black/30"
          }
          backdrop-blur-xl border rounded-lg px-6 py-4
          flex items-center justify-between w-full
          transition-all duration-300 ease-out
        `}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer">
            <i
              className={`
              ${navbarConfig.logo.icon} text-2xl text-orange-500 
              transition-all duration-300 ease-out
            `}
            />
            <h2
              className={`
                text-xl font-semibold m-0 transition-all duration-300 ease-out
                ${isScrolled ? "text-slate-800" : "text-white"}
              `}
              style={{ fontFamily: navbarConfig.logo.fontFamily }}
            >
              {navbarConfig.logo.text}
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="list-none flex gap-2 m-0 p-0 items-center">
              {navbarConfig.navigationItems.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </ul>
          </nav>

          {/* Right Section: Social Links & Mobile Toggle */}
          <div className="flex items-center gap-5">
            {/* Social Links */}
            <div className="flex gap-3 items-center">
              {navbarConfig.socialLinks.map((social, index) => (
                <SocialLink key={index} social={social} />
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <MobileMenuToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <MobileMenuOverlay />}
      </header>
    </>
  );
};

export default Navbar;
