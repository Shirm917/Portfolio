import Button from "@mui/material/Button";

const CarouselButton = ({ link, title }) => {
  return (
    <Button
      className="button"
      variant="outlined"
      href={link}
      target="_blank"
      rel="noreferrer"
      sx={{ borderRadius: 5, margin: 0.5 }}
    >
      {title}
    </Button>
  );
};

export default CarouselButton;
