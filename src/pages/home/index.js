import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta, dataabout, dataportfolio, skills } from "../../content_option";
import { Link } from "react-router-dom";
import { ProjectList } from "../../components/projectlist";
import { RepoBrowser } from "../../components/repobrowser";
import { useContactPanel } from "../../components/contactpanel";

export const Home = () => {
  const panel = useContactPanel();

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="shell">
          <div className="dash">
            <div className="who">
              <img src={introdata.your_img_url} alt={introdata.title} />
              <div>
                <h1>{introdata.title}</h1>
                <p>{introdata.description}</p>
                <button type="button" className="btn btn-fill" onClick={panel.openPanel}>
                  Contact me / Buy me a coffee
                </button>
              </div>
            </div>
            <aside className="dash__side">
              <h2>{dataabout.title}</h2>
              <p>{dataabout.aboutme}</p>
              <ul className="chips">
                {skills.map((skill) => (
                  <li key={skill.name}>
                    {skill.name} {skill.value}%
                  </li>
                ))}
              </ul>
              <Link to="/about">About me</Link>
            </aside>
          </div>

          <section className="block">
            <h2>Projects</h2>
            <ProjectList items={dataportfolio} />
          </section>

          <section className="block">
            <h2>All repositories</h2>
            <RepoBrowser />
          </section>

          <footer className="closer">
            <p className="closer__line">I'm Yogesh.</p>
            <p className="closer__sub">{introdata.description}</p>
          </footer>
        </div>
      </section>
    </HelmetProvider>
  );
};
