// 3rd Party
import React from "react"
import { graphql } from "gatsby"

// Other Components
import Layout from "../components/Layout/layout"

// Interfaces
interface Frontmatter {
  title: string
  date: string
}
interface MarkdownRemark {
  frontmatter: Frontmatter
  html: string
}
interface GraphQLData {
  markdownRemark: MarkdownRemark
}
interface TemplateProps {
  data: GraphQLData
}

// Component
const RecipeTemplate: React.FC<TemplateProps> = ({ data }) => {
  const recipe = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{recipe.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: recipe.html }} />
      </div>
    </Layout>
  )
}

export default RecipeTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
