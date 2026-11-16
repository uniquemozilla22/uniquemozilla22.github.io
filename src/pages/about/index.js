import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header page-wrap">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <header className="page-intro">
          <h1 className="page-title">About me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </header>
        <div className="about-sections">
          <section className="about-block">
            <h2 className="color_sec">{dataabout.title}</h2>
            <p className="about-copy">{dataabout.aboutme}</p>
          </section>
          <section className="about-block">
            <h2 className="color_sec">Work Timline</h2>
            <div className="table-scroll">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
          <section className="about-block">
            <h2 className="color_sec">Skills</h2>
            <div className="skills">
              {skills.map((data, i) => {
                return (
                  <div className="skill" key={i}>
                    <div className="skill__meta">
                      <h3 className="progress-title">{data.name}</h3>
                      <div className="progress-value">{data.value}%</div>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow={data.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={data.name}
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: `${data.value}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="about-block">
            <h2 className="color_sec">services</h2>
            <div className="services">
              {services.map((data, i) => {
                return (
                  <div className="service_" key={i}>
                    <h3 className="service__title">{data.title}</h3>
                    <p className="service_desc">{data.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </Container>
    </HelmetProvider>
  );
};
