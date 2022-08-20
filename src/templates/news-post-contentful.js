import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import HeroImage from "../svg/HeroImage"

export const query = graphql`
  query($slug: String!) {
    contentfulNewsPost(slug: { eq: $slug }) {
      title
      subtitle
      author
      published(formatString: "DD.MM.YYYY")
      body {
        raw
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
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-lg">{children}</p>,
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

  return (
    <Layout>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-bold leading-none">
              {props.data.contentfulNewsPost.title}
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              {props.data.contentfulNewsPost.subtitle}
            </p>
            <p className="mt-4 text-gray-600">{props.data.contentfulNewsPost.author}, {props.data.contentfulNewsPost.published}</p>
          </div>
          <div className="lg:w-1/3">
            <HeroImage />
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className="container mx-auto px-8 tracking-wider">
          {
            renderRichText(
              props.data.contentfulNewsPost.body, options
            )
          }
        </div>
      </section>
    </Layout>
  )
}

export default ContentfulPost