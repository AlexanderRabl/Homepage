import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Linkedin, Signal, Xing } from '@icons-pack/react-simple-icons';
import MessageIcon from '../svg/MessageIcon';

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
      <PageHeader><Trans>Contact</Trans></PageHeader>
      <section id="contact" className="py-10">
        <div
          className="max-w-screen-xl mt-3 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-600">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight"><Trans>Contact</Trans></h2>
              <div className="text-gray-800 mt-8">
                <Trans>ContactText</Trans>
              </div>
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mt-10">
                <StaticImage className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="./../images/PortraitfotoContact.jpg" alt="Alexander Rabl Portrait" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900"><Trans>ContactAlex</Trans></h2>
                  <h3 className="text-gray-500 mb-3"><Trans>ContactTitle</Trans></h3>
                  <p className="mb-4"><Trans>ContactTelephone</Trans>: +43 660 284 27 84</p>
                  <span className="inline-flex">
                    <a className="text-gray-500" target="_blank" href="https://www.linkedin.com/in/alexander-rabl/">
                      <Linkedin color='#9BB8D3' width={32} />
                    </a>
                    <a className="ml-5 text-gray-500" target="_blank" href="https://www.xing.com/profile/Alexander_Rabl22">
                      <Xing color='#9BB8D3' width={32} />
                    </a>
                    <a className="ml-5 text-gray-500 -mt-1 lg:hidden" href="sms:+43 660 284 27 84?body=Test">
                      <MessageIcon color='#9BB8D3' width={32} />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-4xl lg:text-2xl font-bold leading-tight"><Trans>ContactFormTitle</Trans></h2>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold"><Trans>ContactFormName</Trans></span>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold"><Trans>ContactFormEmail</Trans></span>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold"><Trans>ContactFormTelephone</Trans></span>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold"><Trans>ContactFormMessage</Trans></span>
              <textarea
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <Button
                className="p-3 uppercase text-sm font-bold tracking-wide w-full">
                <Trans>ContactFormSend</Trans>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
}

export default Contact;