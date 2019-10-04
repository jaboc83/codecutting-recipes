// 3rd Party
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// Other Components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Component
const IndexPage = () => {
  // GraphQL hooks
  const data = useStaticQuery(graphql`
    query RecipeList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-xl">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className="max-w-xs mb-2">
        <Image />
      </div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
