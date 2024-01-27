import ReactPlayer from 'react-player';
import "./VideoCarousel.css";
import vide1 from '../images/w1.mp4';
import Typewritter from './Typewritter';


const VideoCarousel = () => {
    return (
        <div className="ondiv-main">
            <div className="ondiv">
                <ReactPlayer url={vide1} controls={true} pip={true} playing={false} loop muted />
            </div>
            <Typewritter />
        </div>
    )
}

export default VideoCarousel;