// Todo: this is not used anymore.
// ? This is where your original Navbar lived

import { NavLink, Outlet, Link, useMatch } from 'react-router-dom'
import './Layout.css' // Import your CSS file

// if you decide to go back to using Link instead of NavLink you may remove all useMatchs also, just change the <li>'s thusly:

// <Link to="/contact">Contact</Link>

const Layout = () => {
  return (
    <>
      <nav>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
      </nav>

      <Outlet />
    </>
  )
}

export default Layout

// const Layout = () => {
//   const homeMatch = useMatch('/')
//   const blogsMatch = useMatch('/blogs')
//   const contactMatch = useMatch('/contact')
//   const utilitiesMatch = useMatch('/utilities')
//
//   return (
//     <>
//       {/* Here is the current Navbar */}
//       <nav className="bg-gray-800 p-4">
//         <ul className="flex space-x-4">
//           <li>
//             <NavLink
//               to="/"
//               className={`mt-2 text-sm text-white dark:text-slate-400 ${
//                 homeMatch ? 'font-bold' : 'hover:underline'
//               }`}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/blogs"
//               className={`mt-2 text-sm text-white dark:text-slate-400 ${
//                 blogsMatch ? 'font-bold' : 'hover:underline'
//               }`}
//             >
//               Blogs
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className={`mt-2 text-sm text-white dark:text-slate-400 ${
//                 contactMatch ? 'text-green-500' : 'hover:underline'
//               }`}
//             >
//               Contact
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/utilities"
//               className={`mt-2 text-sm text-white dark:text-slate-400 ${
//                 utilitiesMatch ? 'font-bold' : 'hover:underline'
//               }`}
//             >
//               Utilities
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// }
//
// export default Layout
