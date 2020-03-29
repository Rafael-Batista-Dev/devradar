import React from "react";
import "./styles.css";

function DevItem({ dev }) {
  return (
    <li className="div-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-infor">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/{dev.github_username}`}>
        Acesse e saiba mais
      </a>
    </li>
  );
}

export default DevItem;
