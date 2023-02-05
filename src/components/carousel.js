import { useState, Fragment } from "react";

import Image from "react-bootstrap/Image"

function Carousel({ images, duration = 1 }) {
  const [current, setCurrent] = useState(0);

  setTimeout(() => {
    setCurrent((current + 1) % images.length);
  }, duration*1000);

  return (
    <Fragment >
      { images.map((image, index) => 
        <Image 
          src={image} 
          rounded={true} 
          key={index}
          style={{ 
            width: "100%", height: "23rem",
            marginBottom: index < images.length-1 ? "-23rem":"3rem", 
            objectFit: "cover",
            display: "block",
            opacity: (current == index ? 100 : 0), transitionDuration: "2s", 
            visibility: current == index ? "visible":"hidden" 
          }} 
        />
      )}
    </Fragment>
  );
}

export default Carousel;