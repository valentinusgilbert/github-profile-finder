import React from 'react';
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa"; // Import icons
import './header.scss'; // Import SCSS file

const Header = () => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <header className='header'>
      <div className="header__title" onClick={handleTitleClick}>
        <FaGithub /> <span className="header__title-text">PROFILE FINDER</span>
      </div>
    </header>
  );
};

export default Header;
