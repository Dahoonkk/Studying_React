import { useCallback, useEffect, useState } from "react";
import axios from "../../api/axios";
import { getVideoInfo } from "../../context/fetchingData";

const MainPage = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'));
  const [mainVideos, setMainVideos] = useState(storedVideos || []);

  const getMainVideos = useCallback(async () => {
    try {
      if(!storedVideos) {

        const response = await axios.get(
          '/search?part=snippet&maxResults=10&q=beautiful%20place'
          );
          let videosArray = await response.data.items;
          // console.log('videosArray1', videosArray);
          videosArray = await getVideoInfo(videosArray)
          // console.log('videosArray2', videosArray);
          setMainVideos(videosArray)
          localStorage.setItem('mainVideos', JSON.stringify(videosArray));
        }
    } catch (error) {
      console.log(error);
    }
  }, [storedVideos]);

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos]);

  return (
    <div>MainPage</div>
  )
};

export default MainPage;
