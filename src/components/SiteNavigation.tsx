import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const SiteNavigation = () => (
  <header className="site-navigation">
    <nav className="site-navigation-inner max-w-5xl mx-auto px-6" aria-label="Primary navigation">
      <NavLink to="/" end className="site-wordmark">Alexandru Brateanu</NavLink>
      <div className="site-navigation-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/publications">Publications</NavLink>
      </div>
    </nav>
  </header>
);

export default SiteNavigation;
