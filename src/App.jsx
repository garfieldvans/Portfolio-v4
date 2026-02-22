import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { menus } from "./utils/data";
import Hero from "./pages/Hero/Hero";
import Education from "./pages/Education/Education";
import Work from "./pages/Work/Work";
import Portfolio from "./pages/Projects/Portfolio";
import Footer from "./components/Footer/footer";

function App() {

  useEffect(() => {
    const sections = menus.map(menu =>
      document.getElementById(`menu-${menu.id}`)
    );

    // scroll obs
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("menu-", "");
            setActiveTab(id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach(section => {
      if (section) scrollObserver.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) scrollObserver.unobserve(section);
      });
    };

  }, []);

  const [activeTab, setActiveTab] = useState("hero");

  const handleTabClick = (id) => {
    const menuSection = document.querySelector(`#menu-${id}`);

    if (menuSection) {
      const offset = 60;

      const elementPosition = menuSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setActiveTab(id);
  };

  return (
    <div className={`bgspace text-white font-poppins min-h-screen`}>
      <div className="sticky top-0 left-0 right-0 z-10">
        <Header />
      </div>
      <div className="main-content">
        <div className={`tabMenuWrapper`}>
          <ul className={`tabMenuList`}>
            {menus.map((menu, i) => (
              <li key={i} id={menu.id} className={`tabMenuItem ${activeTab === menu.id ? 'active animate' : ""
                } ${i === menus.length ? 'last' : ''} ${i === 0 ? 'first' : ''}`} onClick={() => handleTabClick(menu.id)}>
                <span>
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-h-96">
          {/* page children */}
          {/* hero */}
          <Hero sectionID="menu-hero" />
          {/* <div className="section-divider"></div> */}

          {/* education */}
          <Education sectionID="menu-profile" />
          {/* experiences */}
          <Work sectionID="menu-experience" />
          {/* projects */}
          <Portfolio sectionID="menu-project" />
          <ScrollToTop />
        </div>
      </div>
      <div className="section-divider"></div>
      <div className="basic-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
