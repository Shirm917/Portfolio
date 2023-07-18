import Button from "@mui/material/Button";

const Buttons = (props) => {
  const { github, demo } = props;

  return (
    <div className="buttons">
      <Button
        className="button"
        variant="outlined"
        href={github}
        target="_blank"
        rel="noreferrer"
        sx={{ borderRadius: 5, margin: 1 }}
      >
        Github
      </Button>
      <Button
        className="button"
        variant="outlined"
        href={demo}
        target="_blank"
        rel="noreferrer"
        sx={{ borderRadius: 5 }}
      >
        Demo
      </Button>
    </div>
  );
};

export default Buttons;
