import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../../components/layout/Layout';
import SplitSection from '../../components/SplitSection';
import SvgCharts from '../../svg/SvgCharts';
import { Trans, useTranslation, Link } from 'gatsby-plugin-react-i18next';
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
  return (
    <Layout>
      <PageHeader><Trans>Services</Trans></PageHeader>
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>FAaTRHeader</Trans>
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              <Trans>FAaTRTeaser</Trans>
            </p>
            <div className="mt-8">
              <Link to={`/services/subsidies`} className="underline font-semibold">
                Mehr erfahren
              </Link>
            </div>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>TaxAdvisoryHeader</Trans>
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              <Trans>TaxAdvisoryTeaser</Trans>
            </p>
            <div className="mt-8">
              <Link to={`/services/subsidies`} className="underline font-semibold">
                Mehr erfahren
              </Link>
            </div>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>InternationalTaxHeader</Trans>
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              <Trans>InternationalTaxTeaser</Trans>
            </p>
            <div className="mt-8">
              <Link to={`/services/subsidies`} className="underline font-semibold">
                Mehr erfahren
              </Link>
            </div>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>StartUpsHeader</Trans>
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              <Trans>StartUpsTeaser</Trans>
            </p>
            <div className="mt-8">
              <Link to={`/services/subsidies`} className="underline font-semibold">
                Mehr erfahren
              </Link>
            </div>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>SocialSecurityHeader</Trans>
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              <Trans>SocialSecurityTeaser</Trans>
            </p>
            <div className="mt-8">
              <Link to={`/services/subsidies`} className="underline font-semibold">
                Mehr erfahren
              </Link>
            </div>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>SubsidiesHeader</Trans>
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              <Trans>SubsidiesTeaser</Trans>
            </p>
            <div className="mt-8">
              <Link to={`/services/subsidies`} className="underline font-semibold">
                Mehr erfahren
              </Link>
            </div>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
    </Layout>
  )
};

export default Services;
