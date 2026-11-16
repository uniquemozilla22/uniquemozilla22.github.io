import React from "react";
import "./style.css";

export const ProjectList = ({ items }) => {
  return (
    <ul className="repos">
      {items.map((item) => (
        <li className="repo" key={item.link}>
          <div className="repo__top">
            <a href={item.link}>{item.name}</a>
          </div>
          <p className="repo__desc">{item.description}</p>
          <ul className="repo__points">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ul className="chips">
            {item.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
