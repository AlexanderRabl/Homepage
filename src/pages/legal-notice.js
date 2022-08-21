import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import PageHeader from '../components/PageHeader';

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

const Contact = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <PageHeader><Trans>Impressum</Trans></PageHeader>
            <section id="legalNotice" className="py-10 lg:py-20">
                <div className="container mx-auto px-8 tracking-wider">
                    <h1 className="text-lg lg:text-2xl font-semibold"><Trans>LegalNoticeHeader</Trans></h1>
                    <p className="text-md lg:text-lg my-3" style={{ whiteSpace: "pre-line" }}><Trans>LegalNoticeAlex</Trans></p>
                    <p className="text-md lg:text-lg  my-3" style={{ whiteSpace: "pre-line" }}><Trans>LegalNoticeAddress</Trans></p>
                    <p className="text-md lg:text-lg  my-3" style={{ whiteSpace: "pre-line" }}><Trans>LegalNoticeContact</Trans></p>
                    <p className="text-md lg:text-lg  my-3" style={{ whiteSpace: "pre-line" }}><Trans>LegalNoticePlace</Trans></p>
                    <p className="text-md lg:text-lg  my-3" style={{ whiteSpace: "pre-line" }}><Trans>LegalNoticePurpose</Trans></p>
                    <p className="text-md lg:text-lg  my-3" style={{ whiteSpace: "pre-line" }}><Trans>LegalNoticeVAT</Trans></p>
                    <p className="text-md lg:text-lg  my-3" style={{ whiteSpace: "pre-line" }}>
                        <Trans>LegalNoticeTax</Trans>
                        <br></br>
                        <a className="text-primary-900 hover:underline" href={t('LegalNoticeTaxLink')} target="_blank"><Trans>LegalNoticeTaxLink</Trans></a>
                    </p>
                </div>
            </section>
        </Layout >
    );
}

export default Contact;