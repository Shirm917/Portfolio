import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar className="toolbar">
            <div className="s-icon">
              <NavLink to="/">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <FontAwesomeIcon icon={faS} />
                </IconButton>
              </NavLink>
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeLink" : "link"
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "activeLink" : "link"
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "activeLink" : "link"
              }
            >
              Contact Me
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

export default Navbar;
