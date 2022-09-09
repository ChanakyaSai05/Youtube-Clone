import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import shorts from "../assets/shorts.jpg";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
function Sidebar({ sidebarToggle }) {
  return (
    <div
      className="sidebar-container"
      style={{ width: sidebarToggle ? "4.6vw" : "17vw" }}
    >
      {sidebarToggle ? (
        <div className="sidebar-true">
          <div>
            <HomeIcon />
            <div className="sidebar-true-title">Home</div>
          </div>
          <div>
            <ExploreIcon />
            <div className="sidebar-true-title">Explore</div>
          </div>
          <div>
            <img src={shorts} width="42px" />
            <div className="sidebar-true-title">Shorts</div>
          </div>
          <div>
            <SubscriptionsSharpIcon />
            <div className="sidebar-true-title">Subscriptions</div>
          </div>
          <div>
            <VideoLibraryOutlinedIcon />
            <div className="sidebar-true-title">Library</div>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "fixed",
            top: "9%",
          }}
        >
          <List>
            {["Home", "Explore", "Shorts", "Subscriptions"].map(
              (text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  style={{ backgroundColor: text === "Home" && "#e5e5e5" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 43,
                      justifyContent: "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                        color: "black",
                      }}
                    >
                      {index === 0 && <HomeIcon />}
                      {index === 1 && <ExploreIcon />}
                      {index === 2 && <RestoreOutlinedIcon />}
                      {index === 3 && <SubscriptionsSharpIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: 1 }}
                      style={{ fontWeight: text === "Home" && "bold" }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Library", "History", "Watch later", "Liked videos"].map(
              (text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 43,
                      justifyContent: "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                        color: "black",
                      }}
                    >
                      {index === 0 && <VideoLibraryOutlinedIcon />}
                      {index === 1 && <RestoreOutlinedIcon />}
                      {index === 2 && <WatchLaterOutlinedIcon />}
                      {index === 3 && <ThumbUpOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: 1 }} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "GrayText",
                padding: "2px 20px",
              }}
            >
              SUBSCRIPTIONS
            </div>
            {["Browse channels"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 43,
                    justifyContent: "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: "center",
                      color: "black",
                    }}
                  >
                    {index === 0 && <PlaylistAddOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: 1 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <div
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "GrayText",
              paddingTop: "8px ",
              paddingLeft: "20px",
            }}
          >
            EXPLORE
          </div>
          <List>
            {["Movies", "Gaming", "Live", "Fashion & Beauty"].map(
              (text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 43,
                      justifyContent: "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                        color: "black",
                      }}
                    >
                      {index === 0 && <LocalMoviesOutlinedIcon />}
                      {index === 1 && <SportsEsportsOutlinedIcon />}
                      {index === 2 && <SensorsOutlinedIcon />}
                      {index === 3 && <DryCleaningOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: 1 }} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
