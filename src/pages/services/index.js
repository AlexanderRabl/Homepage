import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../../components/layout/Layout';
import SplitSection from '../../components/SplitSection';
import SvgCharts from '../../svg/SvgCharts';
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import PageHeader from '../../components/PageHeader';

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
      <PageHeader>Services</PageHeader>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Steuerberatung</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
            <Trans>Test1</Trans>
            <br></br>
            <br></br>
            <Trans>Test1</Trans>
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
              Unternehmensgründung
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
              Jahresabschluss & Steuererklärungen
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
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
              Buchhaltung
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
              Personalverrechnung
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
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
              Internationale Steuern
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
    </Layout>
  )
};

export default Services;
