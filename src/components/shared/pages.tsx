import React from 'react';
import { useRouter } from "next/navigation";
import RootLayout from "../../app/layout";
import { FaGithub } from "react-icons/fa"; // Import icons
import './pages.scss'; // Import SCSS file

const Page = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push('/'); // Redirect to home page
  };

  return (
      <div>
        <header className='header'>
            <div className="header__title" onClick={handleTitleClick}>
                <FaGithub /> <span className="header__title-text">PROFILE FINDER</span>
            </div>
        </header>
        <main className="main-content">
            {children}
        </main>
      </div>
  );
};

export default Page;
