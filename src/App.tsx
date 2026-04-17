import './styles/app.css'
import Navbar from './components/Navbar'
import Songs from './pages/Songs'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import SongDetails from './pages/SongDetails'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <h1>My Music App</h1>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/songs/:id" element={<SongDetails />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
