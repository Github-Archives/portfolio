import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div
      className="Projects-header rounded-lg bg-white px-6 py-8 text-left shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
      id="Projects"
    >
      {/* TODO: Add screenshots of projects that are also links to external sites of projects */}
      <div className="text-5xl">Projects</div>
      <div className="flex flex-col">
        {/* link to Midi-Ready external site */}
        <a
          href="https://midi-ready.drewwilliams.info/"
          target="_blank"
          rel="noreferrer"
        >
          * Visit MIDI-READY
        </a>
        {/* link to nextjs-projects-management external site */}
        <a
          href="https://nextjs-projects-management.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          * nextjs-projects-management
        </a>

        {/* Link to /projects subdomain */}
        <Link to="/projects">🔗 Go To Projects Page</Link>
      </div>
    </div>
  )
}

export default Projects
