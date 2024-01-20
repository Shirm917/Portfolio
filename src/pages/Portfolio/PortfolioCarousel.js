import { Carousel } from "react-responsive-carousel";
import CircularProgress from "@mui/material/CircularProgress";

const PortfolioCarousel = (props) => {
  const { media } = props;

  return (
    <Carousel
      className="carousel"
      useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop
      showStatus={false}
    >
      {!media || media.length === 0 ? (
        <CircularProgress />
      ) : (
        media.map((element, index) => {
          return (
            <div key={index}>
              {element.type === "jpg" ? (
                <img src={element.mediaPath} alt={element.alt} />
              ) : (
                <video autoPlay muted loop playsInline src={element.mediaPath}>
                  {element.alt}
                </video>
              )}
              <p className="legend">{element.label}</p>
            </div>
          );
        })
      )}
    </Carousel>
  );
};

export default PortfolioCarousel;
