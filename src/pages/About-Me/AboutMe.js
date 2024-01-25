import DownloadResumeBtn from "./DownloadResumeBtn";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMeContainer">
      <h1>About Me</h1>
      <img
        src="/assets/media/about-me/profile-picture.jpg"
        alt="Profile Picture Of Shir Markowitz"
      />
      <p>
        Hi! I'm Shir Markowitz, a recent full-stack web developer graduate
        experienced in JavaScript-based programming with a passion for
        developing scalable web applications and working across the full stack.
        I am looking to grow my skill set and kick-start my career.
      </p>
      <DownloadResumeBtn />
    </section>
  );
};

export default AboutMe;
