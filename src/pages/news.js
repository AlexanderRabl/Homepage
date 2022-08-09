import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/Layout';
import LabelText from '../components/LabelText';
import NewsItem from "../components/NewsItem"

const News = () => {

    const articles = useStaticQuery(graphql`
    {
        allContentfulNewsPost (
            sort: {
                fields:published,
                order:DESC
            }
        ) {
            edges {
                node {
                    title
                    slug
                    published
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
                alt={item.node.title}
                title={item.node.title}
                publishedDate={item.node.published}
            />
        </div>
    ))
    return (
        <Layout>
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