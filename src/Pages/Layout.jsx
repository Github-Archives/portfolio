import React from "react"
import { NavLink, Outlet, useMatch } from "react-router-dom"
import "./Layout.css" // Import your CSS file

// if you decide to go back to using Link instead of NavLink you may remove all useMatchs also, just change the <li>'s thusly:

// <Link to="/contact">Contact</Link>

const Layout = () => {
  const homeMatch = useMatch("/")
  const blogsMatch = useMatch("/blogs")
  const contactMatch = useMatch("/contact")
  const utilitiesMatch = useMatch("/utilities")

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={`text-white dark:text-slate-400 mt-2 text-sm ${
                homeMatch ? "font-bold" : "hover:underline"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={`text-white dark:text-slate-400 mt-2 text-sm ${
                blogsMatch ? "font-bold" : "hover:underline"
              }`}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`text-white dark:text-slate-400 mt-2 text-sm ${
                contactMatch ? "text-green-500" : "hover:underline"
              }`}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/utilities"
              className={`text-white dark:text-slate-400 mt-2 text-sm ${
                utilitiesMatch ? "font-bold" : "hover:underline"
              }`}
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
