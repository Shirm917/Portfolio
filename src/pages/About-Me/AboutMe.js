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
        Hi! I'm Shir Markowitz, a full stack developer graduate experienced in
        JavaScript-based programming with a passion for developing scalable web
        applications and working across the full stack. Eager to learn, grow,
        and thrive in a collaborative workplace where I can contribute
        effectively to the team's success.
      </p>
      <DownloadResumeBtn />
    </section>
  );
};

export default AboutMe;
