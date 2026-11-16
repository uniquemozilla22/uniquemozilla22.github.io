import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import { ContactPanelProvider } from "../components/contactpanel";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <ContactPanelProvider>
          <Headermain />
          <AppRoutes />
        </ContactPanelProvider>
      </ScrollToTop>
    </Router>
  );
}
