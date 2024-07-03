import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out opacity-0"; // tambahkan opacity-0 untuk animasi muncul
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD && btnCls.includes("opacity-0")) { // periksa opacity-0
        setBtnCls(DEFAULT_BTN_CLS.replace(" opacity-0", ""));
      } else if (window.scrollY <= SCROLL_THRESHOLD && !btnCls.includes("opacity-0")) { // tambahkan !btnCls.includes("opacity-0")
        setBtnCls(DEFAULT_BTN_CLS + " opacity-0"); // tambahkan opacity-0 saat menghilangkan
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [btnCls]); // tambahkan btnCls sebagai dependensi

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
