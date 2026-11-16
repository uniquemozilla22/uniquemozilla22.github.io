import React from "react";
import "./style.css";

export const ProjectList = ({ items }) => {
  return (
    <ul className="featured-grid">
      {items.map((item) => (
        <li key={item.link}>
          <a
            className="featured-card"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name + " repository on GitHub"}
          >
            <span className="featured-card__name">{item.name}</span>
            <span className="featured-card__desc">{item.description}</span>
            <ul className="featured-card__points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="chips">
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </a>
        </li>
      ))}
    </ul>
  );
};
