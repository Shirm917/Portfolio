import { useState } from "react";
import Box from "@mui/material/Box";
import CarouselTabs from "./CarouselTabs";
import { carouselLayoutData } from "./data/carouselLayoutData";
import CarouselLayout from "./CarouselLayout";
import "./Portfolio.css";

const Portfolio = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <Box className="portfolio">
      <CarouselTabs tabIndex={tabIndex} handleTabChange={handleTabChange} />
      <Box sx={{ padding: 2 }}>
        {carouselLayoutData.find(
          (element) => element.tabIndex === tabIndex
        ) && (
          <CarouselLayout
            element={carouselLayoutData.find(
              (element) => element.tabIndex === tabIndex
            )}
          />
        )}
      </Box>
    </Box>
  );
};

export default Portfolio;
