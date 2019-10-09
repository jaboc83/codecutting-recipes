// 3rd Party
import { Link } from "gatsby"
import React, { useState } from "react"

// Image Assets
import Logo from "../Layout/logo"

// Component
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hamburger = () => (
    <div className="absolute md:hidden top-0 right-0">
      <button
        className="flex items-center px-4 py-4 mr-4 mt-6 border rounded border-white hover:text-black hover:bg-white hover:border-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  )
  const internalLink = (path: string, title: string) => (
    <Link
      to={path}
      className="antialiased mt-4 md:mt-0"
      onClick={() => setIsMenuOpen(false)}
    >
      {title}
    </Link>
  )
  const logoSection = () => (
    <Link
      to="/"
      id="title"
      className="text-xl italic flex flex-col"
      onClick={() => setIsMenuOpen(false)}
    >
      <Logo />
      Recipes
    </Link>
  )
  return (
    <header role="banner" className="sticky top-0 p-4 bg-black text-white">
      <div className="container m-auto flex max-w-4xl">
        <div
          id="nav-group"
          className="flex w-full md:items-center flex-col md:flex-row"
        >
          {logoSection()}
          <div
            id="links"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block flex justify-between text-lg md:text-sm lg:text-base uppercase flex-grow text-left md:text-right`}
          >
            <div className="flex flex-col md:flex-row items-center md:inline-block">
              {internalLink("/recipes", "View All")}
            </div>
          </div>
        </div>
        {hamburger()}
      </div>
    </header>
  )
}
export default Header
