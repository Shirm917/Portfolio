import { Carousel } from 'react-responsive-carousel';

const PortfolioCarousel = (props) => {
  const { images } = props;

  return (
    <Carousel className="carousel" useKeyboardArrows={true} showThumbs={false}>
      {images.map((img) => {
        return (
          <div>
            <img src={img.imgPath} alt={img.alt}/>
            <p className="legend">{img.label}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default PortfolioCarousel;
