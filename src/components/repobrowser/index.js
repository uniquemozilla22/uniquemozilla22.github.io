import React, { useMemo, useState } from "react";
import repos from "../../data/repos.json";
import "./style.css";

const PAGE = 24;

function formatDate(value) {
  return value.slice(0, 10);
}

export const RepoBrowser = () => {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("All");
  const [sort, setSort] = useState("updated");
  const [shown, setShown] = useState(PAGE);

  const languages = useMemo(() => {
    const names = new Set();
    repos.forEach((repo) => {
      names.add(repo.language || "None");
    });
    return ["All"].concat(Array.from(names).sort());
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const list = repos.filter((repo) => {
      const lang = repo.language || "None";
      if (language !== "All" && lang !== language) return false;
      if (!needle) return true;
      return (
        repo.name.toLowerCase().indexOf(needle) !== -1 ||
        repo.description.toLowerCase().indexOf(needle) !== -1
      );
    });
    list.sort((a, b) => {
      if (sort === "stars") return b.stars - a.stars || b.updatedAt.localeCompare(a.updatedAt);
      if (sort === "forks") return b.forks - a.forks || b.updatedAt.localeCompare(a.updatedAt);
      if (sort === "name") return a.name.localeCompare(b.name);
      return b.updatedAt.localeCompare(a.updatedAt);
    });
    return list;
  }, [query, language, sort]);

  const visible = filtered.slice(0, shown);

  const onQuery = (event) => {
    setQuery(event.target.value);
    setShown(PAGE);
  };
  const onLanguage = (event) => {
    setLanguage(event.target.value);
    setShown(PAGE);
  };
  const onSort = (event) => {
    setSort(event.target.value);
    setShown(PAGE);
  };

  return (
    <div className="repo-browser">
      <div className="repo-tools">
        <input
          type="search"
          aria-label="Search repositories"
          placeholder="Search repositories"
          value={query}
          onChange={onQuery}
        />
        <select aria-label="Filter by language" value={language} onChange={onLanguage}>
          {languages.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <select aria-label="Sort repositories" value={sort} onChange={onSort}>
          <option value="updated">Last updated</option>
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="name">Name</option>
        </select>
        <span className="repo-tools__count">{filtered.length} repositories</span>
      </div>
      <ul className="repo-grid">
        {visible.map((repo) => (
          <li key={repo.name}>
            <a
              className="repo-card"
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={repo.name + " repository on GitHub"}
            >
              <span className="repo-card__title">
                <span className="repo-card__name">{repo.name}</span>
                {repo.fork ? <span className="repo-card__badge">Fork</span> : null}
              </span>
              <span className="repo-card__desc">{repo.description}</span>
              <span className="repo-card__meta">
                <span>{repo.language || "—"}</span>
                <span>{formatDate(repo.updatedAt)}</span>
                <span>{repo.stars} stars</span>
                <span>{repo.forks} forks</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      {shown < filtered.length ? (
        <button type="button" className="btn btn-ghost" onClick={() => setShown(shown + PAGE)}>
          Show more
        </button>
      ) : null}
    </div>
  );
};
