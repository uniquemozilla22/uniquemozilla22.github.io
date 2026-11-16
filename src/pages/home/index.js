import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, dataabout, dataportfolio } from "../../content_option";
import { Link } from "react-router-dom";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const featured = dataportfolio.slice(0, 3);

export const Home = () => {
  const reduced = usePrefersReducedMotion();
  const lines = [
    introdata.animated.first,
    introdata.animated.second,
    introdata.animated.third,
  ];

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="shell bento">
          <div className="tile tile--hero">
            <h1 className="hero-title">{introdata.title}</h1>
            <div className="hero-type">
              {reduced ? (
                <div className="hero-lines">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : (
                <Typewriter
                  options={{
                    strings: lines,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              )}
            </div>
            <p className="hero-copy">{introdata.description}</p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-fill">
                My Portfolio
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact Me
              </Link>
            </div>
          </div>

          <figure className="tile tile--portrait">
            <img src={introdata.your_img_url} alt={introdata.title} />
          </figure>

          {featured.map((project, index) => (
            <a className={`tile tile--project project-${index + 1}`} href={project.link} key={index}>
              <span className="project-media">
                <img src={project.img} alt="" />
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              </span>
              <span className="project-meta">
                <span className="project-copy">{project.desctiption}</span>
                <span className="project-link">view project</span>
              </span>
            </a>
          ))}

          <article className="tile tile--about">
            <h2>{dataabout.title}</h2>
            <p>{dataabout.aboutme}</p>
            <Link to="/about" className="btn btn-ghost">
              About me
            </Link>
          </article>

          <Link to="/portfolio" className="tile tile--more">
            <span className="more-count">{dataportfolio.length}</span>
            <span className="more-label">My Portfolio</span>
          </Link>
        </div>
      </section>
    </HelmetProvider>
  );
};
