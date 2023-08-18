import { Grid, Menu, Image } from "semantic-ui-react";
import "./assets/css/NavBar.css";
import { useState, useRef } from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import logo from "./assets/images/logo1.png";

function NavBar() {
  const [navItem, setNavItem] = useState("home");

  const handleNavClick = (nav, e) => {
    e.preventDefault();
    if (nav === 1) {
      setNavItem("home");
    } else if (nav === 2) {
      setNavItem("projects");
    } else if (nav === 3) {
      setNavItem("about");
    } else {
      return;
    }
  };

  return (
    <div className="nav-bar">
      <Grid>
        <Grid.Row className="navbarStyle">
          <Menu secondary className="menu">
            <div className="logoTitle">
              EMBLOCK
            </div>
            <Menu.Item>
              {
                <Image src={logo} size="mini" className="logoImage" />
              }
            </Menu.Item>
            <Menu.Item
              active={navItem === "home"}
              onClick={(e) => handleNavClick(1, e)}
              className="nav-text"
            >
              Home
            </Menu.Item>
            <Menu.Item
              active={navItem === "projects"}
              onClick={(e) => handleNavClick(2, e)}
              className="nav-text"
            >
              Services
            </Menu.Item>
            {/* <Menu.Item
              active={navItem === "about"}
              onClick={(e) => handleNavClick(3, e)}
              className="nav-text"
            >
              About
            </Menu.Item> */}
          </Menu>
        </Grid.Row>
        <Grid.Row>
          {navItem === "home" ? <Home /> : ""}
          {navItem === "projects" ? <Projects /> : ""}
          {navItem === "about" ? <About /> : ""}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default NavBar;
