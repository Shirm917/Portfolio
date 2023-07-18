import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS } from "@fortawesome/free-solid-svg-icons";

const NavbarLarge = (props) => {
  const { pages } = props;
  return (
    <>
      <div className="s-icon">
        <NavLink to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          >
            <FontAwesomeIcon className="icon" icon={faS} />
          </IconButton>
        </NavLink>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "space-evenly",
        }}
      >
        {pages.map((page) => (
          <NavLink
            key={page.id}
            className={({ isActive }) => (isActive ? "activeLink largeLink" : "link")}
            to={page.toLink}
            sx={{ my: 2, display: "block" }}
          >
            {page.name}
          </NavLink>
        ))}
      </Box>
    </>
  );
};

export default NavbarLarge;
