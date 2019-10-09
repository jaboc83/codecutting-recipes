// 3rd Party
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"

// Other Components
import Layout from "../components/Layout/layout"
import HeroImage from "../components/Layout/hero-image"
import SEO from "../components/seo"

// Interfaces
interface MDFrontmatter {
  date: string
  title: string
}
interface MDField {
  slug: string
}
interface MDNode {
  frontmatter: MDFrontmatter
  excerpt: string
  id: string
  fields: MDField
}
interface MDEdge {
  node: MDNode
}

// Component
const IndexPage = () => {
  // GraphQL hooks
  const data = useStaticQuery(graphql`
    query RecipeList {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="max-w-full max-h-screen flex flex-col items-center">
        <SEO title="Home" />
        <div className="max-w-4xl pb-2 w-full">
          <HeroImage />
        </div>
        <div className="flex w-full">
          <h2 className="border-b pb-1 m2 italic border-gray-700 w-full">
            The Latest{" "}
          </h2>
        </div>
        <div className="max-w-full mt-4">
          {data.allMarkdownRemark.edges.map(({ node }: MDEdge) => (
            <div key={node.id}>
              <Link to={node.fields.slug} className="no-decoration">
                <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                  {node.frontmatter.title}{" "}
                  <span className="text-gray-500">
                    {" "}
                    - {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
