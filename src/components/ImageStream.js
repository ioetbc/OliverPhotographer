import React, { Component } from 'react';
import Bricks from 'bricks.js'

 class ImageStream extends Component {
    constructor() {
        super();
        this.state = {
            videoMode: false,
        }
    };

    componentDidMount() {
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
        document.addEventListener("DOMContentLoaded", function() {
            let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
            let active = false;

            const lazyLoad = function() {
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
                        document.removeEventListener("scroll", lazyLoad);
                        window.removeEventListener("resize", lazyLoad);
                        window.removeEventListener("orientationchange", lazyLoad);
                      }
                    }
                  });

                  active = false;
                }, 200);
              }
            };

            document.addEventListener("scroll", lazyLoad);
            window.addEventListener("resize", lazyLoad);
            window.addEventListener("orientationchange", lazyLoad);
          });
    };

    render() {
        const { lightbox } = this.props;
        const { images, handleSlideShow } = this.props;

        return (
            <React.Fragment>
                <div className="grid" data-grid style={{ display: lightbox ? 'none' : '' }}>
                    {images.map((image, i) => (
                        <img
                            id={'image-stream-' + i}
                            className="lazy grid-item"
                            style={{ height: image.height, cursor: 'pointer' }}
                            onClick={() => handleSlideShow(i, image.optimized,)}
                            src={require(`../images/placeholder/${image.placeholder}`)}
                            data-src={require(`../images/optimized/${image.optimized}`)}
                            data-srcset={require(`../images/optimized/${image.optimized}`)}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }
 }
 export default ImageStream;
