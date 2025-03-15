"use client";

import RootLayout from "./layout";
import { FaGithub } from "react-icons/fa"; // Import icons
import "./styles.scss";
import "../../styles/global.scss"; // Import global.scss
import SearchInput from "../components/shared/searchInput"; // Import SearchInput component

export default function Home() {
  return (
      <div className="home">
        <div className="home__container">
          <div className="home__subtitle">
            Know deeper other person in Github
          </div>
          <div className="home__title">
            <FaGithub /> <span className="home__title-text">PROFILE FINDER</span>
          </div>
          <div className="home__search">
            <SearchInput />
          </div>
          <div className="home__rights">
            <div className="home__rights-text">
              All rights reserved @Valentinus Gilbert Sanjaya
            </div>
            <div className="home__rights-powered">
              Powered by Github API
            </div>
          </div>
        </div>
      </div>
  );
}
