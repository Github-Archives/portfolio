import Navbar from '../Components/Navbar'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import AddRoughTextEffect from '../Utilities/AddRoughTextEffect'

const About = () => {
  return (
    <div
      className="App-header rounded-lg bg-white px-6 py-8 text-left shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
      id="About"
    >
      {/* <Navbar /> */}
      <div className="App">
        <RoughNotationGroup show={true}>
          <AddRoughTextEffect
            text="Hello! I&rsquo;m Drew, a developer based in America."
            highlightWords={['developer']}
            type="highlight"
            color="#EAD0FE"
          />
          <AddRoughTextEffect
            text="Another highlighted word in a different paragraph."
            highlightWords={['Another', 'highlighted']}
            type="highlight"
            color="#FFD700"
          />
        </RoughNotationGroup>
      </div>

      <AddRoughTextEffect />
      <RoughNotationGroup show={true}>
        <RoughNotation
          type="highlight"
          order="5"
          multiline={true}
          color="lightblue"
          animationDuration={3000}
        >
          {/* !!!!!!!!!! */}
          <div>
            <RoughNotationGroup show={true}>
              <p>
                This is a{' '}
                <RoughNotation type="highlight" color="#FFD700">
                  highlighted
                </RoughNotation>{' '}
                word.
              </p>
              <p>
                Another{' '}
                <RoughNotation type="highlight" color="#FFD700">
                  highlighted
                </RoughNotation>{' '}
                word in a different paragraph.
              </p>
            </RoughNotationGroup>
          </div>
          {/* !!!!!!!!! */}
          <br /> <br />
          <h1>Hello! I&rsquo;m Drew, a developer based in America.</h1>
          <div>
            <p>I love building tools that are user-friendly and delightful.</p>
            <p>
              I was employed at ___ where I spent 4 years learning the
              fundamentals of front-end and back-end web development.
            </p>
            <p>
              Through these experiences, I had the opportunity to work with both
              small and large, specialised and cross-functional teams across
              different time zones and developed a working style that leans
              towards flexibility, clarity, and collaboration.
            </p>
            <p>
              I&rsquo;m currently looking for a new role as a developer.{' '}
              <RoughNotation type="highlight" color="#FFD700">
                Hire me?
              </RoughNotation>{' '}
            </p>
          </div>
        </RoughNotation>
      </RoughNotationGroup>
      <div className="flex space-x-4">
        <a
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      {/* IMPORTANT NOTES ABOUT RECENT UPDATE */}
      {/* `About.jsx` is now our `Home` so we import the following components there */}
      {/* We decide what to do with those components within themselves */}
      {/* This way, clicking the links embeded within these 3 components will bring us to a /subdomain containing only these components */}
      <Projects />
      <Blog />
      <Contact />
    </div>
  )
}

export default About
