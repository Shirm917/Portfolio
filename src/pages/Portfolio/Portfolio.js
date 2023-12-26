import { useState } from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import {
  chatAppMedia,
  weatherAppMedia,
  memoryGameMedia,
  recipeFinderMedia,
  currencyConverterMedia,
} from "./data/carouselData";
import Buttons from "./Buttons";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Portfolio = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <Box className="portfolio">
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Tabs
          className="tabs"
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Chat App" />
          <Tab label="Weather App" />
          <Tab label="Recipe Finder" />
          <Tab label="Memory Game" />
          <Tab label="Currency Converter" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <PortfolioCarousel images={chatAppMedia} />
            <Buttons
              github="https://github.com/Shirm917/Final_Project"
              demo="https://final-project-yfoh.onrender.com"
            />
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <PortfolioCarousel images={weatherAppMedia} />
            <Buttons
              github="https://github.com/Shirm917/Weather-App"
              demo="https://weather-app-kohl-eta.vercel.app"
            />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <PortfolioCarousel images={recipeFinderMedia} />
            <Buttons
              github="https://github.com/Shirm917/Recipe_Finder"
              demo="https://recipe-finder-kappa-two.vercel.app"
            />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <PortfolioCarousel images={memoryGameMedia} />
            <Buttons
              github="https://github.com/Shirm917/Hackathon1"
              demo="https://memory-game-delta-vo.vercel.app"
            />
          </Box>
        )}
        {tabIndex === 4 && (
          <Box>
            <PortfolioCarousel images={currencyConverterMedia} />
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
