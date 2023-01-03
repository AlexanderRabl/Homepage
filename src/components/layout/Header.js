import React, { useState } from "react"
import { Link, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"
import NavLink from "./NavLink";

const Header = () => {
  const { languages, originalPath, i18n } = useI18next();
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <div>
      <nav className="flex flex-wrap bg-primary-800 p-2 hidden lg:block w-full">
        <div className="text-end mr-10">
          <ul className="languages lg:flex-grow">
            {languages.map((lng) => (
              <li className={`inline-block uppercase mx-3 text-white hover:underline ${i18n.resolvedLanguage === lng ? 'font-bold' : ''}`} key={lng}>
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="flex flex-wrap items-center justify-between bg-white w-full">
        <div className="flex items-center flex-shrink-0 mr-6 pr-4 text-navbar">
          <Link to="/">
            <StaticImage quality={100} class="lg:ml-10" src="./../../images/STEUERBERATUNG_NAVBAR.png" alt="logo" width={170}></StaticImage>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 mr-2 py-2 text-navbar border border-navbar rounded hover:text-navbar uppercase hover:border-navbar"
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
          <div className="text-md lg:flex-grow px-4 pb-4 pt-4">
            <NavLink
              to={`/`}
            >
              <Trans>Home</Trans>
            </NavLink>
            <NavLink
              to={`/about`}
            >
              <Trans>About</Trans>
            </NavLink>
            <NavLink
              to={`/services`}
            >
              <Trans>Services</Trans>
            </NavLink>
            <NavLink
              to={`/news`}
            >
              <Trans>News</Trans>
            </NavLink>
            <NavLink
              to={`/contact`}
            >
              <Trans>Contact</Trans>
            </NavLink>
          </div>
          <div className="lg:hidden p-4 bg-primary-800">
            <ul className="languages inline-block flex flex-grow">
              {languages.map((lng) => (
                <li key={lng}>
                  <Link to={originalPath} className={`block uppercase mr-5 text-white inline-block lg:mt-0 hover:text-navbar uppercase hover:underline ${i18n.resolvedLanguage === lng ? 'font-bold' : ''}`} language={lng}>
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
