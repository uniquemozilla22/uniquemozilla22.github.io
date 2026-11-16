import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const AnimatedSwitch = withRouter(({ location }) => {
  const reduced = usePrefersReducedMotion();
  return (
    <TransitionGroup className="page-stage">
      <CSSTransition
        key={location.key}
        timeout={reduced ? 0 : 180}
        classNames="page"
        unmountOnExit
      >
        <div className="page-pane">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={ContactUs} />
            <Route path="*" component={Home} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
});

function AppRoutes() {
  return (
    <div className="s_c" id="main">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
