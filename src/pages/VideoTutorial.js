import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const VideoTutorial = () => {
  const [VideoLink, SetVideoLink] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = () => {
    Axios.get("http://localhost:3003/VideoTutorial").then((response) => {
      console.log(response.data);
      SetVideoLink(response.data);
    });
  };

  let video = VideoLink.map((value, key) => {
    return value.Video;
  });

  return (
    <div className="VideoWrapper">
      <iframe
        width="1099"
        height="600"
        src={video}
        // src="https://www.youtube.com/embed/21j_OCNLuYg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoTutorial;
