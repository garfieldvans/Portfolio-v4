import PropTypes from "prop-types";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { contact } from "../../utils/data";
import resume from "../../../public/sebastian-paulo-haloho-cv.pdf";

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "Jakarta", label: "Based in Indonesia" },
  { value: "Fullstack", label: "Web development" },
  { value: "Open", label: "To opportunities" },
];

const Hero = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className="scroll-mt-20 pb-20 pt-16 sm:pb-28 sm:pt-24"
    >
      <div
        className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5"
        data-reveal
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/80">
          Available for new opportunities
        </span>
      </div>

      <p
        className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
        data-reveal
        style={{ "--reveal-delay": "60ms" }}
      >
        Sebastian Paulo Haloho — Fullstack Web Developer
      </p>

      <h1
        className="mt-4 max-w-5xl font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tightest"
        data-reveal
        style={{ "--reveal-delay": "120ms" }}
      >
        Building web products that feel{" "}
        <span className="text-accent">effortless.</span>
      </h1>

      <div
        className="mt-12 grid gap-10 border-t border-line pt-8 md:grid-cols-[1.4fr_1fr]"
        data-reveal
        style={{ "--reveal-delay": "180ms" }}
      >
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          I translate ideas into responsive, scalable, and user-friendly web
          applications. Three years of fullstack experience across e-commerce,
          aviation, and financial services — from polished interfaces to APIs
          and databases.
        </p>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className="mt-10 flex flex-wrap items-center gap-3"
        data-reveal
        style={{ "--reveal-delay": "240ms" }}
      >
        <a href="#menu-project" className="btn-primary">
          View selected work
          <FiArrowDownRight size={16} />
        </a>
        <a
          href={resume}
          download="sebastian-paulo-haloho-cv"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <FiDownload size={15} />
          Download CV
        </a>

        <div className="ml-1 flex items-center gap-1 border-line sm:ml-2 sm:border-l sm:pl-3">
          {contact.map((item) => (
            <a
              key={item.name}
              href={item.link}
              title={item.name}
              aria-label={item.name}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <item.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  sectionID: PropTypes.string.isRequired,
};

export default Hero;
