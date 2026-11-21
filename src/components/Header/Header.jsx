import { useState } from "react";
import PropTypes from "prop-types";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { menus } from "../../utils/data";
import resume from "../../../public/sebastian-paulo-haloho-cv.pdf";

const Header = ({ activeTab, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => handleNav("hero")}
          className="font-display text-xl font-bold tracking-tight text-cream"
          aria-label="Back to top"
        >
          bastian<span className="text-accent">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {menus.map((menu, i) => {
            const isActive = activeTab === menu.id;

            return (
              <button
                key={menu.id}
                onClick={() => handleNav(menu.id)}
                className={`relative rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-cream"
                }`}
              >
                <span className="mr-1.5 text-[9px] opacity-60">
                  0{i + 1}
                </span>
                {menu.title}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={resume}
            download="sebastian-paulo-haloho-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !px-4 !py-2 text-xs"
          >
            <FiDownload size={14} />
            Résumé
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-line bg-ink px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {menus.map((menu, i) => (
              <button
                key={menu.id}
                onClick={() => handleNav(menu.id)}
                className={`flex items-center justify-between border-b border-line py-4 text-left font-display text-lg ${
                  activeTab === menu.id ? "text-accent" : "text-cream"
                }`}
              >
                <span>{menu.title}</span>
                <span className="font-mono text-[10px] text-muted">
                  0{i + 1}
                </span>
              </button>
            ))}
          </nav>
          <a
            href={resume}
            download="sebastian-paulo-haloho-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 w-full"
          >
            <FiDownload size={15} />
            Download Résumé
          </a>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default Header;
