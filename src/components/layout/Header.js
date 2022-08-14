import React, { useState } from "react"
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const Header = () => {
  const { languages, originalPath } = useI18next();
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <div>
      <nav className="flex flex-wrap p-2 bg-gray-800 hidden lg:block">
        <div>
          <ul className="languages lg:flex-grow">
            {languages.map((lng) => (
              <li className="inline-block mx-2" key={lng}>
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="flex flex-wrap items-center justify-between p-4 mb-4 bg-blue-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="text-xl font-semibold tracking-tight lg:ml-40">
            Alexander Rabl
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${isExpanded ? `block` : `hidden`
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-md lg:flex-grow">
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Home
            </Link>
            <Link
              to={`/about`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              About
            </Link>
            <Link
              to={`/services`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Services
            </Link>
            <Link
              to={`/news`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              News
            </Link>
            <Link
              to={`/contact`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="lg:hidden">
            <ul className="languages inline-block">
              {languages.map((lng) => (
                <li key={lng}>
                  <Link to={originalPath} className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white" language={lng}>
                    {lng}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Header;

{/* <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
          </div>
          <Link className="px-4" to="/">
            Alexander und Kathi
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
        
      </div>
    </header> */}
