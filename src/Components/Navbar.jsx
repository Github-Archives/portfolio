import { useMatch, NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  // For updating the style on the active link
  const aboutMatch = useMatch('/')
  const projectsMatch = useMatch('/projects')
  const blogMatch = useMatch('/blog')

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={`mt-2 text-sm text-white dark:text-slate-400 ${
                aboutMatch ? 'font-bold' : 'hover:underline'
              }`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={`mt-2 text-sm text-white dark:text-slate-400 ${
                blogMatch ? 'font-bold' : 'hover:underline'
              }`}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={`mt-2 text-sm text-white dark:text-slate-400 ${
                projectsMatch ? 'font-bold' : 'hover:underline'
              }`}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
