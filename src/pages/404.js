import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';

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

const NotFound = () => (
  <Layout>
    <h1>Not Found</h1>
    <p>You just hit a page that doesn&#39;t exist...</p>
  </Layout>
);

export default NotFound;
