import { useState } from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import { chatAppImgs,weatherAppImgs,memoryGameImgs,movieAppImgs,currencyConverterImgs } from "./imgsArrs";
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
      {/* <h1>Portfolio</h1> */}
      <Box sx={{display: "flex", justifyContent: "center", width: "100%"}}>
        <Tabs 
          className="tabs" 
          value={tabIndex} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Chat App" />
          <Tab label="Weather App" />
          <Tab label="Movie App" />
          <Tab label="Memory Game" />
          <Tab label="Currency Converter" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <PortfolioCarousel images={chatAppImgs} />
            <Buttons github="https://github.com/Shirm917/Final_Project" demo="https://final-project-yfoh.onrender.com"/>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <PortfolioCarousel images={weatherAppImgs} />
            <Buttons github="https://github.com/Shirm917/Weather-App" demo="https://weather-app-kohl-eta.vercel.app"/>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <PortfolioCarousel images={movieAppImgs} />
            <Buttons github="https://github.com/Shirm917/Movie-App" demo="https://movie-app-orcin-mu.vercel.app"/>
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <PortfolioCarousel images={memoryGameImgs} />
            <Buttons github="https://github.com/Shirm917/Hackathon1" demo="https://memory-game-4x2e.onrender.com"/>
          </Box>
        )}
        {tabIndex === 4 && (
          <Box>
            <PortfolioCarousel images={currencyConverterImgs} />
            <Buttons github="https://github.com/Shirm917/Currency-Converter" demo="https://currency-converter-62qu.onrender.com"/>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Portfolio;
