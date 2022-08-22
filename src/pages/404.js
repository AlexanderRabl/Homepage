import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import HeroImage from '../svg/HeroImage';
import LostImage from '../svg/LostImage';
import SplitSection from '../components/SplitSection';

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
    <div className="md:my-20">
      <SplitSection
        primarySlot={
          <div className="">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
            <Button className="w-full px-4 py-2 mt-4 text-sm font-medium uppercase lg:w-auto" role="link">Back to homepage</Button>
          </div>
        }
        secondarySlot={<LostImage />}
      />
    </div>
  </Layout>
);

export default NotFound;
