import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

const Skills = () => {
  const skills = [
    { text: "HTML5", iconPath: "/assets/icons/html5.svg", alt: "html5 icon" },
    { text: "CSS3", iconPath: "/assets/icons/css3.svg", alt: "css3 icon" },
    {
      text: "MYSQL",
      iconPath: "/assets/icons/mysql.svg",
      alt: "mysql icon",
    },
    {
      text: "JAVASCRIPT",
      iconPath: "/assets/icons/javascript.svg",
      alt: "javascript icon",
    },
    {
      text: "NODE.JS",
      iconPath: "/assets/icons/nodedotjs.svg",
      alt: "node.js icon",
    },
    {
      text: "EXPRESS.JS",
      iconPath: "/assets/icons/express.svg",
      alt: "express icon",
    },
    {
      text: "POSTGRESQL",
      iconPath: "/assets/icons/postgresql.svg",
      alt: "postgresql icon",
    },
    {
      text: "REACT AND REACT NATIVE",
      iconPath: "/assets/icons/react.svg",
      alt: "react/react native icon",
    },
    { text: "REDUX", iconPath: "/assets/icons/redux.svg", alt: "redux icon" },
  ];
  return (
    <Box className="icons">
      {skills.map((skill) => (
        <Tooltip title={skill.text}>
          <img src={skill.iconPath} alt={skill.alt} />
        </Tooltip>
      ))}
    </Box>
  );
};

export default Skills;
