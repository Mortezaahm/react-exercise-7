import { Link } from "react-router-dom"

function About() {
  return (
    <div>
      <h2>About My Music App</h2>
      <p>This app is a simple React application that allows users to browse and view details about their favorite songs. It was created as a learning project to practice React, routing, and component-based architecture.</p>
      <p>Feel free to explore the songs and learn more about the artists!</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default About
