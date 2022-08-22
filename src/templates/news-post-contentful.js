import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import Layout from "../components/layout/Layout"
import ShareButtons from "../components/ShareButtons"

export const query = graphql`
  query($slug: String!, $language: String!) {
    contentfulNewsPost(slug: { eq: $slug }) {
      title
      subtitle
      author
      description {
        description
      }
      published(formatString: "DD.MM.YYYY")
      body {
        raw
      }
      image {
        gatsbyImageData
      }
      tags
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
`

const ContentfulPost = props => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-lg py-2 md:text-justify">{children}</p>,
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="text-5xl font-normal leading-normal mt-0 mb-2 font-light">{children}</h1>
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="text-4xl font-normal leading-normal mt-0 mb-2 font-light">{children}</h2>
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, description } = node.data.target
        if (!gatsbyImageData) {
          // asset is not an image
          return null
        }
        return (
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
          />
        )
      },
      [BLOCKS.TABLE]: (node, children) => (
        <table className="table p-4 bg-white shadow rounded-lg">
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <tr className="text-gray-700">{children}</tr>,
      [BLOCKS.TABLE_CELL]: (node, children) => <td className="border-b-2 p-4">{children}</td>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc p-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => {
        const UnTaggedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
          },
        })

        return (
          <li className="text-lg">
            {UnTaggedChildren}
          </li>
        )
      }
    },
  }

  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout>
      <section className="px-8 container mx-auto lg:px-40 tracking-wider mb-20">
        <div className="my-10">
          <div className="my-5 flex flex-wrap">
            {props.data.contentfulNewsPost.tags.map((tag) => (
              <span className="mr-2 mb-1 px-2 py-1 rounded text-primary-700 text-sm border border-primary-700 font-medium">
                {tag}
              </span>
            ))}
          </div>
          <GatsbyImage className="object-cover w-full h-30 md:h-40 lg:h-60 mb-10" image={props.data.contentfulNewsPost.image.gatsbyImageData} alt="News Image" />
          <h1 className="text-4xl lg:text-4xl font-bold leading-none">
            {props.data.contentfulNewsPost.title}
          </h1>
          <p className="text-2xl lg:text-2xl mt-6 font-light">
            {props.data.contentfulNewsPost.subtitle}
          </p>
          <div className="my-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <StaticImage className="object-cover w-10 h-10 rounded-full" src="./../images/PortraitfotoMini.jpg" alt="Avatar" />
                <Link to="/about" className="mx-2 font-semibold text-gray-700">{props.data.contentfulNewsPost.author}</Link>
              </div>
              <span className="mx-1 text-xs text-gray-600">{props.data.contentfulNewsPost.published}</span>
            </div>
          </div>
        </div>
        <div className="">
          {
            renderRichText(
              props.data.contentfulNewsPost.body, options
            )
          }
        </div>
        <ShareButtons url={url} title={props.data.contentfulNewsPost.title} description={props.data.contentfulNewsPost.description.description} />
      </section>
    </Layout>
  )
}

export default ContentfulPost