import { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS } from "@fortawesome/free-solid-svg-icons";

const NavbarSmall = (props) => {
  const { pages } = props;

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <IconButton
          size="large"
          aria-label="nav menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem key={page.id} onClick={handleCloseNavMenu}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "link")}
                to={page.toLink}
              >
                {page.name}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <div className="s-icon center">
        <NavLink to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <FontAwesomeIcon className="icon" icon={faS} />
          </IconButton>
        </NavLink>
      </div>
    </Box>
  );
};

export default NavbarSmall;
