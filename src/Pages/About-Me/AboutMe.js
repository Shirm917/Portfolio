import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMeContainer">
      <h1>About Me</h1>
      <img
        src="/assets/images/about-me/profile-picture.jpg"
        alt="Profile Picture Of Shir Markowitz"
      />
      <p>
        Hi! I'm Shir Markowitz, a recent full-stack web developer graduate
        experienced in JavaScript-based programming with a passion for
        developing scalable web applications and working across the full stack.
        I am looking to grow my skill set and kick-start my career.
      </p>
      <Button
        className="button"
        href="/assets/resume/ShirMarkowitzResume.pdf"
        variant="outlined"
        sx={{ borderRadius: 5, color: "black", marginBottom: 3 }}
        download
      >
        Download Resume
        <FileDownloadOutlinedIcon />
      </Button>
    </section>
  );
};

export default AboutMe;
