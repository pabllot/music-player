import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlayClick}) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={35}
    className='text-gray-300'
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    className='text-gray-300'
    onClick={handlePlayClick}
  />
))
export default PlayPause;
