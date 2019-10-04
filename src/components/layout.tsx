// 3rd Party
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Other Components
import Header from "./header"

// CSS
import "./layout.css"

// Interfaces
interface LayoutProps {
  children: Array<object>
}

// Component
const Layout: React.FC<LayoutProps> = ({ children }) => {
  // GraphQL Hooks
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="m-auto max-w-4xl pl-2 py-0">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
