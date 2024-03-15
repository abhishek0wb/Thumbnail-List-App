import Video from './Video' 
import Playbutton from "./Playbutton";
import useVideos from '../hooks/Videos';

function VideoList({ editVideo}) {
 const videos = useVideos();
 
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          verified={video.verified}
          title={video.title}
          views={video.views}
          channel={video.channel}
          time={video.verified}
          editVideo={editVideo}
          
        >
          <Playbutton
            onPlay={() => console.log("playing..", video.title)}
            onPause={() => console.log("pauseed..", video.title)}
          >
            Play
          </Playbutton>
        </Video>
      ))}
    </>
  );
}
export default VideoList;
