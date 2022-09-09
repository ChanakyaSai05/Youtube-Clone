import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.PNG";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import { IconButton } from "@mui/material";

function Navbar({ sidebarToggle, setSidebarToggle, setSearchInput }) {
  const [search, setSearch] = useState("");
  const submitButton = () => {
    setSearchInput(search);
  };
  return (
    <div className="nav">
      <div className="nav-item1">
        <div onClick={() => setSidebarToggle(!sidebarToggle)}>
          <IconButton>
            <MenuIcon sx={{ fontSize: "25px", cursor: "pointer" }} />
          </IconButton>
        </div>

        <div onClick={() => window.location.reload()}>
          <img src={logo} alt="youtube-icon" className="youtube-icon" />
        </div>
      </div>
      <div className="nav-item2">
        <div className="nav-item2-search">
          <div className="search-input">
            <input
              type="text"
              className="search-input-item"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search.length > 0 && (
              <CloseIcon
                onClick={() => setSearch("")}
                sx={{ fontSize: "23px", color: "gray", cursor: "pointer" }}
              />
            )}
          </div>
          <div className="search-icon" onClick={submitButton}>
            <SearchIcon sx={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>
        <div className="nav-item2-mic">
          <IconButton edge="end" style={{ color: "black" }}>
            <MicOutlinedIcon sx={{ fontSize: "23px" }} />
          </IconButton>
        </div>
      </div>
      <div className="nav-item3">
        <div>
          <IconButton edge="end" style={{ color: "black" }}>
            <VideoCallOutlinedIcon
              sx={{ fontSize: "28px", cursor: "pointer" }}
            />
          </IconButton>
        </div>
        <div>
          <IconButton edge="end" style={{ color: "black" }}>
            <NotificationsNoneOutlinedIcon
              sx={{ fontSize: "26px", cursor: "pointer" }}
            />
          </IconButton>
        </div>
        <div>
          <IconButton edge="end" style={{ color: "orangered" }}>
            <AccountCircleIcon sx={{ fontSize: "37px", cursor: "pointer" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
