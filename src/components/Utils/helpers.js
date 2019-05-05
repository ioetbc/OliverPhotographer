import Bricks from 'bricks.js';
import { isUndefined } from 'lodash';

export function lazyLoad() {
        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
        let active = false;
          if (active === false) {
            active = true;
            setTimeout(function() {
              lazyImages.forEach(function(lazyImage) {
                if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.srcset = lazyImage.dataset.srcset;
                  lazyImage.classList.remove("lazy");

                  lazyImages = lazyImages.filter(function(image) {
                    return image !== lazyImage;
                  });

                  if (lazyImages.length === 0) {
                    window.removeEventListener("load", lazyLoad);
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationchange", lazyLoad);
                  }
                }
              });

              active = false;
            }, 200);
          }
        window.addEventListener("load", lazyLoad);
        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    
}

export function loadBricks() {
  const sizes = [
      { columns: 1, gutter: 25 },
      { mq: '800px', columns: 2, gutter: 25 },
      { mq: '1300px', columns: 3, gutter: 25 },
      { mq: '1800px', columns: 4, gutter: 25 },
  ];
  const bricks = Bricks({
      container: '.grid',
      packed: 'data-packed',
      sizes: sizes,
      position: true,
  });
  window.addEventListener('load', function() {
      bricks.pack();
  });
  window.addEventListener('resize', function() {
      bricks.pack();
  });
}