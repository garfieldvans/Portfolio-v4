import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { contact } from "../../utils/data";
import resume from "../../../public/sebastian-paulo-haloho-cv.pdf";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div
          className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-10 lg:gap-20"
          data-reveal
        >
          <div>
            <p className="eyebrow">Let&apos;s connect</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] tracking-tightest sm:text-5xl md:text-6xl">
              Have an idea?
              <br />
              <a
                href="mailto:bastianhalo19@gmail.com"
                className="text-accent transition-opacity hover:opacity-70"
              >
                Let&apos;s talk.
              </a>
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:bastianhalo19@gmail.com"
                className="btn-primary"
              >
                Say hi
                <FiArrowUpRight size={16} />
              </a>
              <a
                href={resume}
                download="sebastian-paulo-haloho-cv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FiDownload size={15} />
                Résumé
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Find me</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {contact.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group -mx-2 flex items-center justify-between rounded-lg px-2 py-3.5 text-sm transition duration-200 hover:bg-white/[0.04] hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon
                        size={15}
                        className="text-muted transition-colors group-hover:text-accent"
                      />
                      {item.name}
                    </span>
                    <FiArrowUpRight
                      size={14}
                      className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="eyebrow">Based in</p>
              <p className="mt-2 text-sm text-muted">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Bastian Haloho</p>
          <p>Designed &amp; built with care</p>
        </div>
      </div>
    </footer>
  );
}
