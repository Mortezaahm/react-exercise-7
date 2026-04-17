import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <h3>Welcome to My Music App</h3>
      <p>Discover your favorite songs and artists!</p>
      <Link to="/songs">Browse Songs</Link>
    </>
  )
}

export default Home
