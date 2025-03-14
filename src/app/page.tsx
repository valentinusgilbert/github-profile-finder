import RootLayout from "./layout";
import { FaGithub, FaUser, FaSearch } from "react-icons/fa"; // Import icons
import "./styles.scss";
import "../../styles/global.scss"; // Import global.scss

export default function Home() {
  return (
    <RootLayout>
      <div className="home">
        <div className="home__container">
          <div className="home__subtitle">
            Know deeper other person in Github
          </div>
          <div className="home__title">
          <FaGithub /> <span className="home__title-text">USER   FINDER</span> 
          </div>
          <div className="home__search">
            <input type="text" placeholder="@username_github" className="home__search-input" />
            <button className="home__search-button">
              <FaSearch />
            </button>
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
    </RootLayout>
  );
}
