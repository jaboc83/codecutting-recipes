// 3rd Party
import { Link } from "gatsby"
import React from "react"

// Interfaces
interface HeaderProps {
  siteTitle: string
}

// Component
const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className="bg-green-500 mb-1 pl-2">
    <div className="m-auto max-w-4xl py-4">
      <h1 className="m-0 text-2xl">
        <Link to="/" className="text-white no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
