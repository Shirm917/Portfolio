import Box from "@mui/material/Box";
import PortfolioCarousel from "./PortfolioCarousel";
import Buttons from "./Buttons";

const CarouselLayout = ({ element }) => {
  const { media, github, demo } = element;
  return (
    <Box>
      <PortfolioCarousel media={media} />
      <Buttons github={github} demo={demo} />
    </Box>
  );
};

export default CarouselLayout;
