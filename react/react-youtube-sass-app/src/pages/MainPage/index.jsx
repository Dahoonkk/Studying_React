import { useCallback, useEffect, useState } from "react";
import axios from "../../api/axios";
import { getVideoInfo } from "../../context/fetchingData";
import VideoCard from "../../components/VideoCard";

const MainPage = () => {
  const storedVideos = JSON.parse(localStorage.getItem("mainVideos"));
  const [mainVideos, setMainVideos] = useState(storedVideos || []);

  const getMainVideos = useCallback(async () => {
    try {
      if (!storedVideos) {
        const response = await axios.get(
          "/search?part=snippet&maxResults=10&q=beautiful%20place"
        );
        let videosArray = await response.data.items;
        // console.log('videosArray1', videosArray);
        videosArray = await getVideoInfo(videosArray);
        // console.log('videosArray2', videosArray);
        setMainVideos(videosArray);
        localStorage.setItem("mainVideos", JSON.stringify(videosArray));
      }
    } catch (error) {
      console.log(error);
    }
  }, [storedVideos]);

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos]);

  return (
    <section className="mainGallery">
      {mainVideos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          video={video}
          img={video.snippet.thumbnails.medium.url}
          info={video.snippet}
          eInfo={video.extraInfo}
          channelInfo={video.channelInfo}
        />
      ))}
    </section>
  );
};

export default MainPage;
