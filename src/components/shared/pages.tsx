import React from 'react';
import RootLayout from "../../app/layout";
import Header from './header'; // Import Header component
import './pages.scss'; // Import SCSS file

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
      <div>
        <Header /> {/* Use Header component */}
        <main className="main-content">
            {children}
        </main>
      </div>
  );
};

export default Page;
