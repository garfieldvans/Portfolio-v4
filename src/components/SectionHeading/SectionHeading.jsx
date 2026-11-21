import PropTypes from "prop-types";

const SectionHeading = ({ index, label, title, description }) => {
  return (
    <div className="mb-12 sm:mb-16" data-reveal>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span className="eyebrow">{label}</span>
      </div>
      <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.05] tracking-tightest sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

SectionHeading.propTypes = {
  index: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default SectionHeading;
