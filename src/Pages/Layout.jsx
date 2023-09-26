import React from "react"
import { NavLink, Outlet, useMatch } from "react-router-dom"
import "./Layout.css" // Import your CSS file

const Layout = () => {
  const homeMatch = useMatch("/")
  const blogsMatch = useMatch("/blogs")
  const contactMatch = useMatch("/contact")
  const utilitiesMatch = useMatch("/utilities")

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={
                homeMatch ? "nav-link-active nav-link-home" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={
                blogsMatch ? "nav-link-active nav-link-blogs" : "nav-link"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={
                contactMatch ? "nav-link-active nav-link-contact" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/utilities"
              className={
                utilitiesMatch
                  ? "nav-link-active nav-link-utilities"
                  : "nav-link"
              }
            >
              Utilities
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
