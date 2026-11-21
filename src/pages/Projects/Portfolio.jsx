import PropTypes from "prop-types";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { projects } from "../../utils/data";

const Portfolio = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className="scroll-mt-20 border-t border-line py-20 sm:py-28"
    >
      <SectionHeading
        index="03"
        label="Selected work"
        title={
          <>
            Ideas brought{" "}
            <span className="text-accent">to life.</span>
          </>
        }
        description="A selection of products and websites I've designed, built, and shipped with teams."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((item, i) => (
          <article
            key={item.name}
            className={`group relative overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_36px_-14px_rgba(200,255,77,0.45)] focus-within:border-accent/40 ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
            data-reveal
            style={{ "--reveal-delay": `${Math.min(i, 4) * 60}ms` }}
          >
            <div
              className={`relative overflow-hidden border-b border-line ${
                i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
              }`}
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                style={i === 0 ? { objectPosition: "50% 33%" } : undefined}
              />
              {item.url && (
                <span className="pointer-events-none absolute bottom-4 left-4 flex translate-y-1 items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Visit site
                  <FiArrowUpRight size={12} />
                </span>
              )}
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-accent">
                    {item.name}
                  </h3>
                  {item.role && (
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      {item.role}
                    </p>
                  )}
                </div>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${item.name}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-cream transition duration-200 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <FiArrowUpRight size={17} />
                  </a>
                ) : (
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                    {item.badge || "Case study"}
                  </span>
                )}
              </div>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                {item.desc}
              </p>

              {item.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-cream/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  sectionID: PropTypes.string.isRequired,
};

export default Portfolio;
