import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavbarSmall from "./NavbarSmall";
import NavbarLarge from "./NavbarLarge";
import "./Navbar.css";

const Navbar = () => {
  const pages = [
    { id: 1, name: "About Me", toLink: "/" },
    { id: 2, name: "Skills", toLink: "/skills" },
    { id: 3, name: "Portfolio", toLink: "/portfolio" },
    { id: 4, name: "Contact Me", toLink: "/contact" },
  ];
  return (
    <header>
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar className="toolbar">
              <NavbarSmall pages={pages} />
              <NavbarLarge pages={pages} />
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
