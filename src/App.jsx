import { useState } from "react";
import styles from "./App.module.css";
// import Header from './components/Header'
import Routing from "./Routing/Routing";
import TabMenu from "./components/TabMenu/TabMenu";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className={`${styles.bgspace} text-white font-poppins min-h-screen`}>
      <div className="sticky top-0 left-0 right-0 z-10">
        <Header />
      </div>
      <div className="min-h-96">
        <Routing />
      <ScrollToTop />
      </div>
      <div className="
      ">
        <TabMenu/>
      </div>
    </div>
  );
}

export default App;
