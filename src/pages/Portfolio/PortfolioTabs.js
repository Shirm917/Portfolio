import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const PortfolioTabs = ({ tabIndex, handleTabChange }) => {
  return (
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
  );
};

export default PortfolioTabs;
