import axios from "axios";
import React, { useEffect, useState } from "react";
import { youtubeApi, youtubeChannelApi } from "../apis/youtubeApi";
import "./Display.css";
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65vw",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline: "none",
  p: 4,
};
function Display({ sidebarToggle, searchInput, setSearchInput }) {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    if (searchInput.length > 0) {
      const getSearchVideos = async () => {
        return youtubeApi.get(
          "/search",
          {
            params: {
              q: searchInput,
            },
          },
          { cancelToken: cancelToken.token }
        );
      };
      getSearchVideos()
        .then((res) => {
          let videos1 = [...res.data.items];
          videos1.forEach((item, index) =>
            youtubeChannelApi
              .get("channels", {
                params: {
                  id: item.snippet.channelId,
                },
              })
              .then((res) => {
                // console.log(res);
                videos1[index].channelThumbnail =
                  res.data.items[0].snippet.thumbnails.default.url;
              })
              .catch((err) => console.log(err))
          );
          // console.log(videos1);
          setVideos(videos1);
        })
        .catch((err) => console.log(err));
    }

    return () => {
      cancelToken.cancel();
    };
  }, [searchInput]);

  console.log(videos);
  return (
    <div className="display-container">
      <div className="filters">
        {[
          "All",
          "Live",
          "React routers",
          "React JS",
          "Javascript",
          "Grammer",
          "Cinema",
          "Recently uploaded",
          "Watched",
          "C++",
          "New to you",
          "Relevel",
          "Gadgets",
        ].map((item, index) => (
          <div
            key={index}
            className={
              searchInput === item ? "filter-options active" : "filter-options"
            }
            onClick={() => setSearchInput(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId?.id?.videoId}`}
              controls
              className="videop"
              width="100%"
              height="450px"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src={videoId?.channelThumbnail}
                  className="channel-icon"
                  alt=""
                />
              </div>
              <div className="info">
                <h4 className="title" style={{ marginTop: "32px" }}>
                  {videoId?.snippet?.title?.slice(0, 55)}
                </h4>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div
        className="video-container"
        style={{ width: sidebarToggle ? "90vw" : "80vw" }}
      >
        {videos?.map((item, index) => (
          <div
            className="video"
            onClick={() => {
              setVideoId(item);
              handleOpen();
            }}
          >
            <img
              src={item.snippet.thumbnails.high.url}
              className="thumbnail"
              alt=""
              style={{
                height: sidebarToggle ? "24vh" : "23vh",
                width: sidebarToggle ? "22.8vw" : "20.4vw",
              }}
            />
            <div className="content">
              {/* {console.log(item.channelThumbnail)} */}
              <div>
                <img
                  src={item.channelThumbnail}
                  className="channel-icon"
                  alt=""
                />
              </div>
              <div className="info">
                <h4 className="title">{item.snippet.title.slice(0, 55)}</h4>
                <p className="channel-name">{item.snippet.channelTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;
