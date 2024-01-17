import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Youtube from "react-youtube";

const VideoPage = () => {
  const { videoId } = useParams();
  let location = useLocation();
  const { state: currentVideo } = location;

  const onPlayerReady = (e) => {
    e.target.playVideo();
  };

  const opts = {
    height: '390',
    width: '640',
    palyerVars: {
      autoplay: 1,
    }
  }

  return (
    <div>
      <Youtube
        className="youtube-player"
        videoId={videoId}
        onPlay={onPlayerReady}
        opts={opts}
      />
    </div>
  );
};

export default VideoPage;
