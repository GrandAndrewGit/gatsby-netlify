import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


function IndexPage ({data}) {
  console.log(data)

  const posts = data.allMarkdownRemark.nodes 

  console.log(posts)
  return (
    <Layout>
    <h1>List of posts</h1>
    <br /><br />
    <div className="row">
      {posts.map(post => {
        return(
          <div className="col-6" key={post.id}>
            <div className="post-col">
            <GatsbyImage image={getImage(post.frontmatter.cover)} alt="smth" />
            <Link to={post.frontmatter.slug}><h3>{post.frontmatter.title}</h3></Link>
            </div>
          </div>
        )
      })}
    </div>
  </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          slug
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
  }
`


export default IndexPage
