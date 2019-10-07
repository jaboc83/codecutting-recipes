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
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-xl">Welcome to CodeCutting Recipes</h1>
      <div className="max-w-xl pb-2 border-b">
        <HeroImage />
      </div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }: MDEdge) => (
        <div key={node.id}>
          <Link to={node.fields.slug} className="no-decoration">
            <h3 style={{ marginBottom: rhythm(1 / 4) }}>
              {node.frontmatter.title}{" "}
              <span className="text-gray-300"> - {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
