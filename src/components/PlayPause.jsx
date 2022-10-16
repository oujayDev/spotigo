// import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
  <AiFillPauseCircle 
    size={60}
    onClick={handlePause}
  />
) : (
  <AiFillPlayCircle 
    size={60}
    onClick={handlePlay}
  />
));
  
export default PlayPause;