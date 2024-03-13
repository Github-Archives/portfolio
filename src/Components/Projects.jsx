const Projects = () => {
  return (
    <div
      className="App-header rounded-lg bg-white px-6 py-8 text-left shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
      id="Projects"
    >
      <div className="text-5xl">Projects</div>
      <div className="flex flex-col">
        {/* Link to Midi-Ready subdomain */}
        <a
          href="https://midi-ready.drewwilliams.info/"
          target="_blank"
          rel="noreferrer"
        >
          * Visit MIDI-READY
        </a>
        {/* Link to nextjs-projects-management subdomain */}
        <a
          href="https://nextjs-projects-management.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          * nextjs-projects-management
        </a>
      </div>
    </div>
  )
}

export default Projects
