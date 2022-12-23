
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="container">
        <div className="row">
          <Header/>
          
          <div>
            <br /><br />
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
