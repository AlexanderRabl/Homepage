import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../../components/layout/Layout';
import PageHeader from '../../components/PageHeader';
import { Trans, useTranslation, Link } from 'gatsby-plugin-react-i18next';

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

const Subsidies = () => {
    return (
        <Layout>
            <PageHeader><Trans>SubsidiesHeader</Trans></PageHeader>
            <section className="mx-5 my-20 lg:mx-48 text-gray-600 body-font">
                <p className="text-md lg:text-lg my-3 whitespace-pre-line"><Trans>SubsidiesLong1</Trans></p>
                <p className="text-md lg:text-lg my-3 whitespace-pre-line"><Trans>SubsidiesLong2</Trans></p>
                <p className="text-md lg:text-lg my-3 whitespace-pre-line"><Trans>SubsidiesLong3</Trans></p>
                <p className="text-md lg:text-lg my-3 whitespace-pre-line"><Trans>SubsidiesLong4</Trans></p>
                <ul className="list-disc list-inside text-md lg:text-lg">
                    <li><Trans>SubsidiesList1</Trans></li>
                    <li><Trans>SubsidiesList2</Trans></li>
                    <li><Trans>SubsidiesList3</Trans></li>
                    <li><Trans>SubsidiesList4</Trans></li>
                    <li><Trans>SubsidiesList5</Trans></li>
                    <li><Trans>SubsidiesList6</Trans></li>
                </ul>
            </section>
        </Layout>
    );
};

export default Subsidies;