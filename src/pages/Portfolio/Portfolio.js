import { useState } from "react";
import Box from "@mui/material/Box";
import CarouselTabs from "./CarouselTabs";
import PortfolioCarousel from "./PortfolioCarousel";
import {
  chatAppMedia,
  weatherAppMedia,
  memoryGameMedia,
  recipeFinderMedia,
  currencyConverterMedia,
} from "./data/carouselData";
import Buttons from "./Buttons";

const Portfolio = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <Box className="portfolio">
      <CarouselTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <PortfolioCarousel media={chatAppMedia} />
            <Buttons
              github="https://github.com/Shirm917/Final_Project"
              demo="https://final-project-yfoh.onrender.com"
            />
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <PortfolioCarousel media={weatherAppMedia} />
            <Buttons
              github="https://github.com/Shirm917/Weather-App"
              demo="https://weather-app-kohl-eta.vercel.app"
            />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <PortfolioCarousel media={recipeFinderMedia} />
            <Buttons
              github="https://github.com/Shirm917/Recipe_Finder"
              demo="https://recipe-finder-kappa-two.vercel.app"
            />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <PortfolioCarousel media={memoryGameMedia} />
            <Buttons
              github="https://github.com/Shirm917/Hackathon1"
              demo="https://memory-game-delta-vo.vercel.app"
            />
          </Box>
        )}
        {tabIndex === 4 && (
          <Box>
            <PortfolioCarousel media={currencyConverterMedia} />
            <Buttons
              github="https://github.com/Shirm917/Currency-Converter"
              demo="https://currency-converter-one-blue.vercel.app"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Portfolio;
