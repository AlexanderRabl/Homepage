import React from 'react';
import Button from '../components/Button';
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/Layout';
import HeroImage from '../svg/HeroImage';
import NewsItemMiniV2 from '../components/NewsItemMiniV2';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import ServiceItem from '../components/ServiceItem';

export const query = graphql`
query ($language: String!) {
  allContentfulNewsPost(sort: {fields: published, order: DESC}) {
    edges {
      node {
        slug
        title
        description {
          description
        }
        published
        author
        image {
            gatsbyImageData(width: 600)
        }
        tags
      }
    }
  }
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

const Index = ({ data }) => {
  const { t } = useTranslation();
  const allArticles = data.allContentfulNewsPost.edges.map((item, index) => (
    <div className="flex-1 px-3">
      <NewsItemMiniV2
        key={index}
        slug={item.node.slug}
        title={item.node.title}
        description={item.node.description.description}
        imageData={item.node.image}
      />
    </div>
  ))

  return (
    <Layout>
      <section className="pt-20 mt-24">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none lg:mt-16">
              <Trans>PageTitle</Trans>
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              <Trans>PageDescription1</Trans>
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg" className='py-4 px-12'>Get Started</Button>
            </p>
            <p className="mt-4 text-gray-600"><Trans>PageDescription2</Trans></p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      <section id="features" className="py-20 px-10 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold"><Trans>Services</Trans></h2>
          <p className="mt-4 text-gray-500 xl:mt-6">
            <Trans>ServiceDescription</Trans>
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <ServiceItem title={t("FAaTRHeader")} content={t("FAaTRTeaser")} />
            <ServiceItem title={t("TaxAdvisoryHeader")} content={t("TaxAdvisoryTeaser")} />
            <ServiceItem title={t("InternationalTaxHeader")} content={t("InternationalTaxTeaser")} />
            <ServiceItem title={t("StartUpsHeader")} content={t("StartUpsTeaser")} />
            <ServiceItem title={t("SocialSecurityHeader")} content={t("SocialSecurityTeaser")} />
            <ServiceItem title={t("SubsidiesHeader")} content={t("SubsidiesTeaser")} />
          </div>
        </div>
      </section>
      <section id="news" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold"><Trans>News</Trans></h2>
          <p className="mt-4 text-gray-500 xl:mt-6">
            <Trans>NewsDescription</Trans>
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {allArticles}
          </div>
        </div>
      </section>
    </Layout>
  )
};

export default Index;
