import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/Layout';
import LabelText from '../components/LabelText';
import NewsItem from "../components/NewsItem"
import PageHeader from '../components/PageHeader';

const News = () => {

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
            <PageHeader>News</PageHeader>
            <section id="news" className="py-20 lg:py-40">
                <div className="container mx-auto">
                    <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
                    <div className="flex flex-col md:flex-row md:-mx-3">
                        {allArticles}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default News