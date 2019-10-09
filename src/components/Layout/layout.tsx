// 3rd Party
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Other Components
import Header from "./header"

// CSS
import "./layout.css"

// Interfaces
interface LayoutProps {
  children: Array<object> | object
}

// Component
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="m-auto max-w-4xl py-0">
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Jake Moening</footer>
      </div>
    </>
  )
}

export default Layout
