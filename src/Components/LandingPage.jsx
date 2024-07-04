import About from './About'
import Projects from './Projects'
import Blog from './Blog'
import AddVerticalSpace from '../Utilities/AddVerticalSpace'
import SmoothScrollLink from '../Utilities/SmoothScrollLink'

// * Contains <About/>, <Projects/>, and <Blog/> components + adds vertical space between each as well as SmoothScrollLink to top of page
const LandingPage = () => {
  return (
    <div>
      <div className="Container-Test col text-orange-600">The Cards</div>
      <div id="about">
        <About />
        <br />
        <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
      </div>
      <AddVerticalSpace height="250px" />
      <div id="projects">
        <Projects />
        <br />
        <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
      </div>
      <AddVerticalSpace height="250px" />
      <div id="blog">
        <Blog />
        <br />
        <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
      </div>
      <AddVerticalSpace height="500px" />
    </div>
  )
}

export default LandingPage
