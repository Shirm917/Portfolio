import { Carousel } from "react-responsive-carousel";
import CircularProgress from "@mui/material/CircularProgress";

const PortfolioCarousel = (props) => {
  const { images } = props;

  return (
    <Carousel
      className="carousel"
      useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop
      showStatus={false}
    >
      {!images || images.length === 0 ? (
        <CircularProgress />
      ) : (
        images.map((element,index) => {
          return (
            <div key={index}>
              {element.type === "jpg" ? (
                <img src={element.imgPath} alt={element.alt} />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={element.imgPath}
                >{element.alt}</video>
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
