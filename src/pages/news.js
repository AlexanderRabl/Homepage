import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Trans, useTranslation, Link } from 'gatsby-plugin-react-i18next';
import Layout from '../components/layout/Layout';
import LabelText from '../components/LabelText';
import NewsItem from "../components/NewsItem"
import PageHeader from '../components/PageHeader';

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
          published(formatString: "DD.MM.YYYY")
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

const News = ({data}) => {
    const allArticles = data.allContentfulNewsPost.edges.map((item, index) => (
        <div className="flex-1 px-3">
            <NewsItem
                key={index}
                slug={item.node.slug}
                title={item.node.title}
                description={item.node.description.description}
                imageData={item.node.image}
                author={item.node.author}
                publishedDate={item.node.published}
                tags={item.node.tags}
            />
        </div>
    ))
    return (
        <Layout>
            <PageHeader><Trans>News</Trans></PageHeader>
            <section id="news">
                <div className="container mx-auto mb-24">
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        {allArticles}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default News