const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const contentfulPost = path.resolve('src/templates/news-post-contentful.js')
  const contentful = await graphql(`
    {
      allContentfulNewsPost(limit: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (contentful.errors) throw contentful.errors
  contentful.data.allContentfulNewsPost.edges.forEach(edge => {
    const { slug } = edge.node
    createPage({
      path: `/news/${slug}`,
      component: contentfulPost,
      context: {
        slug
      },
    })
  })
}