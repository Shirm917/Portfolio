import Box from "@mui/material/Box";
import PortfolioCarousel from "./PortfolioCarousel";
import CarouselButton from "./CarouselButton";

const CarouselLayout = ({ element }) => {
  const { media, github, demo } = element;
  return (
    <Box sx={{ textAlign: "center" }}>
      <PortfolioCarousel media={media} />
      <CarouselButton link={github} title="Github" />
      <CarouselButton link={demo} title="Demo" />
    </Box>
  );
};

export default CarouselLayout;
