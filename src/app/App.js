import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [motionOk, setMotionOk] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const ok = !media.matches;
      setMotionOk(ok);
      if (!ok) document.body.style.cursor = "";
    };
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {motionOk ? (
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={9}
            outerSize={36}
            color="214, 255, 62"
            outerAlpha={0.28}
            innerScale={0.7}
            outerScale={1.55}
          />
        </div>
      ) : null}
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
