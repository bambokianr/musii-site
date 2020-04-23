import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import imgMobile from '../../assets/mobile-mockup.png';
import { useInterval } from '../../utils';

import { Container, Carousel, MobileMockup } from './styles';

function ImagesCarousel({ images, imgAlt })  {
    const [focusedIndex, setFocusedIndex] = useState(0);

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
      console.log('aaaa', focusedIndex);
    }, [focusedIndex]);

    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll('.carousel');
       M.Carousel.init(elems, {});
      var el = document.querySelector(".carousel");
      el.addEventListener('click', () => defineItemFocused());
    });

    useInterval(() => {
      window.next = function() {
        var el = document.querySelector(".carousel");
        var l = M.Carousel.getInstance(el);
        defineItemFocused();
        l.next(1);
      }
      window.next();
    }, 10000);

    return (
      <Container onClick={() => console.log('aa')} >
        <Carousel className="carousel">
        {images.map(image => (
         <div key={image.id} className="carousel-item"><img src={image.url} alt={imgAlt} /></div>
        ))}
        <MobileMockup src={imgMobile} alt="" />
      </Carousel>
    </Container>
    );
}
export default ImagesCarousel;
