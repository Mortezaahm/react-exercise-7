import { Link, useParams } from 'react-router-dom'
import { songs } from '../data/songs'
import '../styles/details.css'

function SongDetails() {
  const { id } = useParams()

  if (!id) {
    return <p>No song ID provided.</p>
  }

  const song = songs.find(song => song.id === Number(id))

  if (!song) {
    return <p>Song not found.</p>
  }

  return (
    <div className="song-details">
      <h2>Song Details</h2>
      <h4>{song.title}</h4>
      <p>Artist: {song.artist}</p>
      <Link to="/songs">Back to Songs</Link>
    </div>
  )
}

export default SongDetails
