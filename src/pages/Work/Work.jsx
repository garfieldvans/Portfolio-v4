import PropTypes from "prop-types";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { workExp } from "../../utils/data";

const Work = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className="scroll-mt-20 border-t border-line py-20 sm:py-28"
    >
      <SectionHeading
        index="02"
        label="Experience"
        title={
          <>
            Shipping real products,{" "}
            <span className="text-accent">not just code.</span>
          </>
        }
        description="From e-commerce storefronts to internal finance applications — here is where I've spent the last few years."
      />

      <ol className="border-t border-line">
        {workExp.map((work, i) => {
          const isCurrent = work.tenure.toLowerCase().includes("present");

          return (
            <li
              key={`${work.place}-${work.tenure}`}
              className="grid gap-3 border-b border-line py-8 sm:grid-cols-[150px_1fr] sm:gap-8 sm:py-10"
              data-reveal
              style={{ "--reveal-delay": `${Math.min(i, 4) * 60}ms` }}
            >
              <div>
                <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted">
                  {work.tenure}
                </p>
                {isCurrent && (
                  <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Current
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                      {work.place}
                    </h3>
                    <p className="mt-1 text-sm text-accent/90">{work.role}</p>
                  </div>
                  <span className="hidden font-mono text-[10px] text-muted sm:block">
                    0{i + 1}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {work.detail.map((detail, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {work.stack && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-cream/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

Work.propTypes = {
  sectionID: PropTypes.string.isRequired,
};

export default Work;
