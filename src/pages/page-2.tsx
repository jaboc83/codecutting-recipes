// 3rd Party
import React from "react"
import { Link } from "gatsby"

// Other Components
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

// Component
const SecondPage: React.FC = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
