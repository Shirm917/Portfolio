import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <h1>About Me</h1>
      <img src="/images/about-me/profile-picture.jpg" alt="Profile Picture Of Shir Markowitz" />
      <p>
        Hi! I'm Shir Markowitz, a recent full-stack web developer graduate experienced in JavaScript-based
        programming with a passion for developing scalable web applications and
        working across the full stack. I am looking to grow my skill set and
        kick-start my career.
      </p>
      <Button className="button" variant="outlined" sx={{borderRadius: 5, color: "black"}}>
        <a href="/resume/ShirMarkowitzResume.pdf" className="link" download>
            Download Resume
        </a>
        <FileDownloadOutlinedIcon/>
      </Button>
    </div>
  );
};

export default AboutMe;
