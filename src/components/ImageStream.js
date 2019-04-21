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
        window.addEventListener("DOMContentLoaded", function() {
            var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
            if ("IntersectionObserver" in window) {
                let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });
                lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            }
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
                            className="grid-item lazy"
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
