import { useEffect, useState } from "react";
import useReveal from "./hooks/useReveal";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { menus } from "./utils/data";
import Hero from "./pages/Hero/Hero";
import Education from "./pages/Education/Education";
import Work from "./pages/Work/Work";
import Portfolio from "./pages/Projects/Portfolio";
import Footer from "./components/Footer/footer";

function App() {
  const [activeTab, setActiveTab] = useState("hero");

  useReveal();

  useEffect(() => {
    const sections = menus
      .map((menu) => ({
        id: menu.id,
        element: document.getElementById(`menu-${menu.id}`),
      }))
      .filter((section) => section.element);

    if (sections.length === 0) return;

    let frame = 0;

    const updateActiveTab = () => {
      frame = 0;

      const probe = window.scrollY + 140;
      let current = sections[0].id;

      sections.forEach((section) => {
        const top =
          section.element.getBoundingClientRect().top + window.scrollY;

        if (top <= probe) current = section.id;
      });

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (isAtBottom) {
        current = sections[sections.length - 1].id;
      }

      setActiveTab((prev) => (prev === current ? prev : current));
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveTab);
    };

    updateActiveTab();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleTabClick = (id) => {
    const menuSection = document.querySelector(`#menu-${id}`);

    if (menuSection) {
      const offset = 72;
      const elementPosition = menuSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setActiveTab(id);
  };

  return (
    <div className="min-h-screen bg-ink text-cream">
      <Header activeTab={activeTab} onNavigate={handleTabClick} />

      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Hero sectionID="menu-hero" />
        <Education sectionID="menu-profile" />
        <Work sectionID="menu-experience" />
        <Portfolio sectionID="menu-project" />
        <ScrollToTop />
      </main>

      <Footer />
    </div>
  );
}

export default App;
