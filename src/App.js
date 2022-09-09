import { useState } from "react";
import "./App.css";
import Display from "./Display/Display";
import Sidebar from "./Display/Sidebar";
import Navbar from "./Navbar/Navbar";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [searchInput, setSearchInput] = useState("grammer");
  return (
    <div className="container">
      <Navbar
        setSidebarToggle={setSidebarToggle}
        sidebarToggle={sidebarToggle}
        setSearchInput={setSearchInput}
      />
      <div className="display-bar">
        <Sidebar sidebarToggle={sidebarToggle} />
        <Display
          sidebarToggle={sidebarToggle}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
    </div>
  );
}

export default App;
