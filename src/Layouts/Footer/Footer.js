import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from "@mui/material/Box";

const Footer = () => {
    return (
       <footer>
        <Box
        className="icons"
        sx={{
            display: "flex",
            margin: "0 auto",
            width: "50%",
            justifyContent: "space-around"
        }}
        >
            <a className="link" href="https://www.linkedin.com/in/shir-markowitz-b58b01256/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon" fontSize="large"/></a>
            <a className="link" href="https://github.com/Shirm917" target="_blank" rel="noreferrer"><GitHubIcon className="icon" fontSize="large"/></a>
            <a className="link" href="mailto:markowitz.shir@gmail.com" rel="noreferrer"><MailOutlineIcon className="icon" fontSize="large"/></a>
        </Box>
        <p>© 2023 Shir Markowitz. All Rights Reserved.</p>
       </footer> 
    )
};

export default Footer;