import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {
  const { languages, originalPath } = useI18next();

  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
          </div>
          <Link className="px-4" to="/">
            Alexander Rabl
          </Link>
        </div>
        <div className="flex mt-4 sm:mt-0">
          <Link className="px-4" to="/about">
            About
          </Link>
          <Link className="px-4" to="/services">
            Services
          </Link>
          <Link className="px-4" to="/testimonials">
            Testimonials
          </Link>
          <Link className="px-4" to="/news">
            News
          </Link>
          <Link className="px-4" to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <ul className="languages">
            {languages.map((lng) => (
              <li key={lng}>
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
};

export default Header;
