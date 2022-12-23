import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


function postTemplate ({ data }) {
  console.log(data)
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter

  return (
    <>
      <Layout>
      <br /><br />
      <p>---------------------------------</p>
      <h1>
        { title }
      </h1>
      <GatsbyImage image={getImage(data.markdownRemark.frontmatter.cover)} alt="smth" />
      <div dangerouslySetInnerHTML={{__html: html}} />
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Using POST template" />

export const query = graphql`
  query postDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        cover {
          childImageSharp {
            gatsbyImageData(
              width: 500
              blurredOptions: {width: 100}
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              )
          }
        }
      }
    }
  }
`

export default postTemplate
