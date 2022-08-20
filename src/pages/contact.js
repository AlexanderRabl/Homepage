import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"
import PageHeader from '../components/PageHeader';

const mainColor = '#4299e1';

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
      <section id="contact" className="py-10 lg:py-20">
        <div
          class="max-w-screen-xl mt-3 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-600">
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold leading-tight"><Trans>Contact</Trans></h2>
              <div class="text-gray-700 mt-8">
                <Trans>ContactText</Trans>
              </div>
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mt-10">
                <StaticImage class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="./../images/PortraitfotoContact.jpg" alt="Alexander Rabl Portrait" />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900"><Trans>ContactAlex</Trans></h2>
                  <h3 class="text-gray-500 mb-3"><Trans>ContactTitle</Trans></h3>
                  <p class="mb-4"><Trans>ContactTelephone</Trans>: +43 660 284 27 84</p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <h2 class="text-4xl lg:text-2xl font-bold leading-tight"><Trans>ContactFormTitle</Trans></h2>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold"><Trans>ContactFormName</Trans></span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold"><Trans>ContactFormEmail</Trans></span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold"><Trans>ContactFormTelephone</Trans></span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold"><Trans>ContactFormMessage</Trans></span>
              <textarea
                class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="mt-8">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                <Trans>ContactFormSend</Trans>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
}

export default Contact;