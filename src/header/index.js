import React, { useEffect, useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { NavLink, useLocation } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { useContactPanel } from "../components/contactpanel";

const LINKS = [
  { to: "/", label: "Home", exact: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Headermain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panel = useContactPanel();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("ovhidden", menuOpen);
    return () => document.body.classList.remove("ovhidden");
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 781px)");
    const closeIfDesktop = () => {
      if (media.matches) setMenuOpen(false);
    };
    if (media.addEventListener) {
      media.addEventListener("change", closeIfDesktop);
      return () => media.removeEventListener("change", closeIfDesktop);
    }
    media.addListener(closeIfDesktop);
    return () => media.removeListener(closeIfDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-header__bar">
        <div className="shell site-header__inner">
          <NavLink exact to="/" className="brand" activeClassName="brand-active" onClick={closeMenu}>
            {logotext}
          </NavLink>
          <nav className="site-nav" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                exact={!!link.exact}
                to={link.to}
                activeClassName="is-active"
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="site-header__tools">
            <button type="button" className="btn btn-fill contact-launch" onClick={panel.openPanel}>
              Contact me / Buy me a coffee
            </button>
            <Themetoggle />
            <button
              type="button"
              className="icon-btn nav-burger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>
      </div>

      <div className={`site__navigation ${menuOpen ? "menu__opend" : ""}`}>
        <div className="bg__menu">
          <div className="menu__wrapper">
            <div className="shell menu__container">
              <ul className="the_menu">
                {LINKS.map((link) => (
                  <li className="menu_item" key={link.to}>
                    <NavLink
                      exact={!!link.exact}
                      to={link.to}
                      activeClassName="is-active"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="menu_item">
                  <button
                    type="button"
                    className="btn btn-fill"
                    onClick={() => {
                      closeMenu();
                      panel.openPanel();
                    }}
                  >
                    Contact me / Buy me a coffee
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu_footer">
            <div className="shell menu_footer__inner">
              <div className="menu_footer__links">
                <a href={socialprofils.facebook}>Facebook</a>
                <a href={socialprofils.github}>Github</a>
                <a href={socialprofils.twitter}>Twitter</a>
              </div>
              <p className="copyright">copyright __ {logotext}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headermain;
