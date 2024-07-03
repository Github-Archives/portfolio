import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div
      className="Blog-header rounded-lg bg-white px-6 py-8 text-left shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
      id="Blog"
    >
      <div className="text-5xl">Blog Components</div>

      {/* Link to /blog subdomain */}
      <Link to="/blog">🔗 Go To Blog Page</Link>
    </div>
  )
}

export default Blog
