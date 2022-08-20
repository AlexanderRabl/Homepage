import React from 'react';
import Button from '../components/Button';
import { graphql, useStaticQuery } from 'gatsby'
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/PageHeader';
import StatsBox from '../components/StatsBox';
import HeroImage from '../svg/HeroImage';
import NewsItemMini from '../components/NewsItemMini';

const Index = () => {
  const articles = useStaticQuery(graphql`
    {
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
    }
  `)

  const allArticles = articles.allContentfulNewsPost.edges.map((item, index) => (
    <div className="flex-1 px-3">
      <NewsItemMini
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
      <PageHeader>Alexander Rabl</PageHeader>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Alexander Rabl - Steuerberatung
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">Get Started</Button>
            </p>
            <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Services</h2>
          <p class="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 space-y-3 border-2 border-primary-500 rounded-xl">
              <span class="inline-block text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize">Steuerberatung</h1>

              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="inline-flex p-2 text-primary-500 capitalize transition-colors duration-200 transform bg-primary-100 rounded-full hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            <div class="p-8 space-y-3 border-2 border-primary-500 rounded-xl">
              <span class="inline-block text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize">Unternehmensgründung</h1>

              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="inline-flex p-2 text-primary-500 capitalize transition-colors duration-200 transform bg-primary-100 rounded-full hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            <div class="p-8 space-y-3 border-2 border-primary-500 rounded-xl">
              <span class="inline-block text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize">Jahresabschluss & Steuererklärungen</h1>

              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="inline-flex p-2 text-primary-500 capitalize transition-colors duration-200 transform bg-primary-100 rounded-full hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            <div class="p-8 space-y-3 border-2 border-primary-500 rounded-xl">
              <span class="inline-block text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize">Buchhaltung</h1>

              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="inline-flex p-2 text-primary-500 capitalize transition-colors duration-200 transform bg-primary-100 rounded-full hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            <div class="p-8 space-y-3 border-2 border-primary-500 rounded-xl">
              <span class="inline-block text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize">Personalverrechnung</h1>

              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="inline-flex p-2 text-primary-500 capitalize transition-colors duration-200 transform bg-primary-100 rounded-full hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            <div class="p-8 space-y-3 border-2 border-primary-500 rounded-xl">
              <span class="inline-block text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize">Internationale Steuern</h1>

              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="inline-flex p-2 text-primary-500 capitalize transition-colors duration-200 transform bg-primary-100 rounded-full hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="news" className="py-20 lg:py-40">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">News</h2>
          <p class="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
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
