import React, { useState, useEffect, useContext } from 'react';
import Section1Context from '../../sections/Section1/context';
import M from 'materialize-css/dist/js/materialize.min.js';
import imgMobile from '../../assets/mobile-mockup.png';
import { useInterval } from '../../utils/functions';
import { Container, Carousel, MobileMockup, MobileContainer } from './styles';

function ImagesCarousel({ images, imgAlt })  {
  const [isMobile, setIsMobile] = useState(window.screen.width <= 1080 ? true: false);
  window.addEventListener("resize", () => setIsMobile(window.screen.width <= 1080 ? true: false));
  
  const [focusedIndex, setFocusedIndex] = useState(0);
  const { setIndexFocusedCarousel } = useContext(Section1Context);

  function defineItemFocused() {
    setTimeout(function() { 
      var nodeListItemsCarousel = document.querySelectorAll(".carousel-item");
      var arrItemsCarousel = Array.prototype.slice.call(nodeListItemsCarousel);
      arrItemsCarousel.map((item, idx) => 
        item.className === 'carousel-item active' 
          ? setFocusedIndex(idx) 
          : null
      );
      }, 200);
  }

  useEffect(() => {
    setIndexFocusedCarousel(focusedIndex);
  }, [setIndexFocusedCarousel, focusedIndex]);

  document.addEventListener("DOMContentLoaded", function() {
    if (isMobile === false) {
      var elems = document.querySelectorAll('.carousel');
      M.Carousel.init(elems, {});
      var el = document.querySelector(".carousel");
      var l = M.Carousel.getInstance(el);
      el.addEventListener('click', () => defineItemFocused());
    }
  });

  useInterval(() => {
    if (isMobile === true) {
      setFocusedIndex((focusedIndex+1) % images.length);
    } else {
      window.next = function() {
        var el = document.querySelector(".carousel");
        var l = M.Carousel.getInstance(el);
        defineItemFocused();
        l.next(1);
      }
      window.next();
    }
  }, isMobile ? 8000 : 10000);

  return (
    <Container onClick={() => console.log('ImagesCarousel')} >
      <Carousel className={isMobile ? "" : "carousel"}>
        { isMobile ?
            <MobileContainer key={images[focusedIndex].id}><img src={images[focusedIndex].url} alt={imgAlt} /></MobileContainer>
          : <>
            {images.map(image => (
              <div key={image.id} className="carousel-item"><img src={image.url} alt={imgAlt} /></div>
            ))}
          </>
        }
        <MobileMockup src={imgMobile} alt="" />
      </Carousel>
    </Container>
  );
}
export default ImagesCarousel;
