import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";

// Pages
import CaseStudies from "./pages/CaseStudies";
import Home from "./pages/Home";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Services from "./pages/Services";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/about-us", name: "About", Component: About },
  { path: "/services", name: "Services", Component: Services },
];

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // set viewport width, for mobile devices.
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // TO stop the app from flashing, we hide the entire body in the css and then show it when the JavaScript loads.
    gsap.to("body", 0, { css: { visibility: "visible" } });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header width={width} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
