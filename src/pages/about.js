import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image"
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

const About = () => {
    return (
        <Layout>
            <PageHeader><Trans>About</Trans></PageHeader>
            <section className="text-gray-600 body-font">
                <div
                    className="mt-3 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-600">
                    
                    <div>
                        <StaticImage className="object-cover object-center rounded-lg md:mt-0 mt-12 lg:w-2/3" src="./../images/Portraitfoto.jpg" alt="Alexander Rabl Portrait" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <ol class="relative border-l-4 border-primary-300">
                            <li class="mb-10 ml-6">
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-300 rounded-full ring-8 ring-white"></span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900"><Trans>AboutTimeline2010</Trans></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">2010</time>
                            </li>
                            <li class="mb-10 ml-6">
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-300 rounded-full ring-8 ring-white"></span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900"><Trans>AboutTimeline2012</Trans></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">2012</time>
                            </li>
                            <li class="mb-10 ml-6">
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-300 rounded-full ring-8 ring-white"></span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900"><Trans>AboutTimeline2017</Trans></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">2017</time>
                            </li>
                            <li class="mb-10 ml-6">
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-300 rounded-full ring-8 ring-white"></span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900"><Trans>AboutTimeline2022</Trans></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400">2022</time>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;