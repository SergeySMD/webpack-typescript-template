import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

import { paths } from "@root/routes";

function Home() {
  return (
    <div className="home-container">
      <div className="home-title">Дом</div>
      <Link className="button" to={paths.USERS}>
        Пользователи
      </Link>
      <Link className="button" to={paths.POSTS}>
        Посты
      </Link>
    </div>
  );
}

export default Home;
