import PropTypes from "prop-types";
import { FiArrowUpRight, FiMapPin, FiMail } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { education, framework, lang, tools } from "../../utils/data";

const skillGroups = [
  { label: "Languages", items: lang },
  { label: "Frameworks", items: framework },
  { label: "Tools", items: tools },
];

const interests = ["Playing games", "Coffee", "Movies"];

const Education = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className="scroll-mt-20 border-t border-line py-20 sm:py-28"
    >
      <SectionHeading
        index="01"
        label="Profile"
        title={
          <>
            A developer with a{" "}
            <span className="text-accent">product mindset.</span>
          </>
        }
        description="I care about how things look, how they work, and how they hold up as the product grows."
      />

      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16" data-reveal>
        <aside>
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <img
              src="./profile.png"
              alt="Sebastian Paulo Haloho"
              className="aspect-square w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>

          <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
            <div className="flex items-start gap-3 py-3">
              <FiMapPin className="mt-0.5 shrink-0 text-muted" size={15} />
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Location
                </dt>
                <dd className="mt-0.5">Jakarta, Indonesia</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 py-3">
              <FiMail className="mt-0.5 shrink-0 text-muted" size={15} />
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Email
                </dt>
                <dd className="mt-0.5 break-all">
                  <a
                    href="mailto:bastianhalo19@gmail.com"
                    className="transition-colors hover:text-accent"
                  >
                    bastianhalo19@gmail.com
                  </a>
                </dd>
              </div>
            </div>
            <div className="py-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Status
              </dt>
              <dd className="mt-1.5 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Open to opportunities
              </dd>
            </div>
          </dl>
        </aside>

        <div>
          <p className="font-display text-xl leading-relaxed tracking-tight sm:text-2xl">
            Hello — I&apos;m Sebastian Paulo Haloho, a fullstack web developer with
            3+ years of experience building responsive, dynamic, and scalable
            web applications for projects of all sizes.
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            I work across the stack: modern frontend interfaces, REST API
            integration, and the databases behind them. I focus on clean,
            efficient code and user-friendly interfaces that are easy to
            maintain — and I&apos;m always ready to turn an idea into something
            people can actually use.
          </p>

          <div className="mt-10">
            <h3 className="eyebrow">Beyond code</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {interests.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-line px-4 py-3 text-sm"
                >
                  {item}
                  <span className="font-mono text-[10px] text-muted">
                    0{i + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="mailto:bastianhalo19@gmail.com"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-70"
          >
            Let&apos;s work together
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div
        className="mt-20 grid gap-10 border-t border-line pt-12 lg:grid-cols-[280px_1fr] lg:gap-16"
        data-reveal
      >
        <div>
          <span className="eyebrow">Education</span>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
            Where I learned the craft.
          </h3>
        </div>

        <ol className="border-t border-line">
          {education.map((item) => (
            <li
              key={item.place}
              className="grid gap-2 border-b border-line py-6 sm:grid-cols-[120px_1fr] sm:gap-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {item.tenure}
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold">
                  {item.place}
                </h4>
                <p className="mt-0.5 text-sm text-accent/90">{item.role}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20 border-t border-line pt-12" data-reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="eyebrow">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-cream/80 transition-colors hover:border-cream/30 hover:text-cream"
                  >
                    <item.icon size={14} className="text-muted" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Education.propTypes = {
  sectionID: PropTypes.string.isRequired,
};

export default Education;
