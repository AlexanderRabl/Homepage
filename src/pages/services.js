import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SvgCharts from '../svg/SvgCharts';
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

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

const Services = () => {
  const { t } = useTranslation();
  return(
    <Layout>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">{t('Services')}: Market Analysis</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
            <Trans>Test1</Trans>
            <Trans>Test2</Trans>
            <Trans>Test3</Trans>
            <Trans>Our team of enthusiastic marketers will analyse and evaluate how your company stacks
              against the closest competitors</Trans>
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Design And Plan Your Business Growth Steps
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Search For Performance Optimization
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
    </Layout>
  )
};

export default Services;
