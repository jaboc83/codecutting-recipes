// 3rd Party
import React from "react"

// Other Components
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

// Component
const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
