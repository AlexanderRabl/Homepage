import React from 'react';
import { graphql } from 'gatsby'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <a href="#" className="text-2xl font-bold text-white hover:text-gray-300"><Trans>PageTitle</Trans></a>
        </div>

        <hr className="my-10 border-gray-300" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">© Copyright 2022. All Rights Reserved.</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a href={t("AABLink")} target="_blank" rel="noreferrer" className="mx-2 text-sm text-primary-300 hover:underline" aria-label="AAB">AAB</a>

            <Link to="#" className="mx-2 text-sm text-primary-300 hover:underline" aria-label="Reddit">Privacy</Link>

            <Link to="/AAB_2018_en.pdf" target={"_blank"} rel="noreferrer" className="mx-2 text-sm text-primary-300 hover:underline" aria-label="Reddit">Cookies</Link>

            <Link to="/legal-notice" className="mx-2 text-sm text-primary-300 hover:underline" aria-label={t("LegalNotice")}><Trans>LegalNotice</Trans></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
