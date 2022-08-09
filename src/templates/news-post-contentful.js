import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text" 
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulNewsPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const ContentfulPost = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { gatsbyImageData, description } = node.data.target
        if (!gatsbyImageData) {
          // asset is not an image
          return null
        }
        return(
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
          />
        )
          
      },
    },
  }

  return (
    <Layout>
      <h1>{props.data.contentfulNewsPost.title}</h1>
      <p>{props.data.contentfulNewsPost.publishedDate}</p>
      {
        documentToReactComponents(
          JSON.parse(props.data.contentfulNewsPost.body.raw)
        )
        &&
        renderRichText(
          props.data.contentfulNewsPost.body, options
        )
      }
    </Layout>
  )
}

export default ContentfulPost