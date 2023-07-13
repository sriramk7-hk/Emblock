import { Grid, Menu } from "semantic-ui-react" 
import './assets/css/NavBar.css'
import { useState } from "react"
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

function NavBar() {
  const [navItem, setNavItem] = useState("home");

  const handleNavClick = (nav, e) => {
    e.preventDefault()
    if(nav === 1){
        setNavItem("home")
    }else if(nav === 2){
        setNavItem("projects")
    }else if(nav === 3){
        setNavItem("about")
    }else{
        return;
    }
  }

  return (
    <div>
      <Menu pointing secondary inverted>  
        <Menu.Item active={navItem === "home"} onClick={(e) => handleNavClick(1, e)}>Home</Menu.Item>
        <Menu.Item active={navItem === "projects"} onClick={(e) => handleNavClick(2, e)}>Projects</Menu.Item>
        <Menu.Item active={navItem === "about"} onClick={(e) => handleNavClick(3, e)}>About</Menu.Item>   
      </Menu>
      <Grid>
        {navItem === "home" ? <Home /> : ""}
        {navItem === "projects" ? <Projects /> : ""}
        {navItem === "about" ? <About /> : ""}
      </Grid>
    </div>
  )
}

export default NavBar