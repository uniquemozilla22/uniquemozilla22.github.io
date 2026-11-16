import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { ProjectList } from "../../components/projectlist";
import { RepoBrowser } from "../../components/repobrowser";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header page-wrap">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <header className="page-intro">
          <h1 className="page-title">Portfolio</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </header>
        <h2 className="section-label">Projects</h2>
        <ProjectList items={dataportfolio} />
        <h2 className="section-label">All repositories</h2>
        <RepoBrowser />
      </Container>
    </HelmetProvider>
  );
};
