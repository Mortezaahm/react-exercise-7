import { Link } from 'react-router-dom'
import { songs } from '../data/songs'
import '../styles/songs.css'

function Songs() {
  return (
    <div>
      <h2>Songs</h2>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            <h6>{song.title}</h6>
            <p>{song.artist}</p>
            <Link to={`/songs/${song.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Songs
