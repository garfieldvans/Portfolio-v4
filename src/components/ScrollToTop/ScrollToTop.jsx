import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const SCROLL_THRESHOLD = 400;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={onClickBtn}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink/90 text-cream backdrop-blur transition-all duration-300 hover:border-accent hover:bg-accent hover:text-ink ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <FaArrowUp size={14} />
    </button>
  );
};

export default ScrollToTop;
