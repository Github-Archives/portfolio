import About from '../Components/About'

const Home = () => {
  return (
    <div
      className="App-header rounded-lg bg-white px-6 py-8 text-left shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
      id="Home"
    >
      <div className="text-5xl">Home</div>

      {/* About component should only live in Home from now on */}
      <div id="about">
        {
          <>
            <About />
            <br />
          </>
        }
      </div>
    </div>
  )
}

export default Home
