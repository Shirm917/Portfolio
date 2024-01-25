import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { skillsArr } from "./data/skillsArr";
import "./Skills.css";

const Skills = () => {
  return (
    <Box className="icons">
      {skillsArr.map((skill) => (
        <Tooltip title={skill.text} enterTouchDelay={0}>
          <img src={skill.iconPath} alt={skill.alt} />
        </Tooltip>
      ))}
    </Box>
  );
};

export default Skills;
