import React from 'react';
import Button from './Button';
import { graphql } from 'gatsby'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const PageHeader = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-center bg-cover h-48" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")` }}>
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white uppercase lg:text-6xl">{children}</h1>
          <Button className="w-full px-4 py-2 mt-4 text-sm font-medium uppercase lg:w-auto" role="link">
            <Link to={`/contact`} className="">
              <Trans>Contact</Trans>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
