import ReactPlayer from 'react-player';
import '../ui/css/LoginFormCard.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="/video/login_video.mp4"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        className="video"
      />
    </div>
  );
};

export default VideoBackground;
