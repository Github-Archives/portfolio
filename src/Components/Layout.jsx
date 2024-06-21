// Todo: add your styling here for the child components:
//  <About />
//  <Projects />
//  <Blog />
//  <NoPage />

import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return <div>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
