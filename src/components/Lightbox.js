import React, { Component } from 'react';
import CinemaMode from './Cinema/index';

 class Lightbox extends Component {
    constructor() {
        super();
        this.state = {
            cinemaMode: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // const lightboxWrapper = document.getElementById('horizontal-layout-alignment');
        // // const mountedImagePosition = document.getElementById('lightbox' + this.props.index).offsetLeft;

        // // console.log('mountedImagePosition', mountedImagePosition)

        // lightboxWrapper.scrollTo({
        //     top: 0,
        //     left: 500,
        //     behavior: 'smooth'
        // });
        window.scrollConverter.activate();
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
    }
    
    componentWillUnmount() {
        window.scrollConverter.deactivate();
    }

    handleClick(id) {
        this.setState({
            cinemaMode: !this.state.cinemaMode,
            imageId: id,
        })
    }

    render() {
        const { images, imageDetails, handleLightBox, imagePath } = this.props;
        const { cinemaMode, imageId } = this.state;

        return (
            <React.Fragment>
                <div id="horizontal-layout-alignment" className="horizontal-layout-alignment">
                    <div className="button-close" style={{ position: 'fixed' }} onClick={handleLightBox}></div>
                    {images.map((image, i) => (
                        <img
                            id={'lightbox' + i}
                            className="image lazy"
                            onClick={() => this.handleClick(image.id)}
                            src={require(`../images/optimized/${image.optimized}`)}
                        />
                    ))}
                    {cinemaMode &&
                        <CinemaMode
                            imageId={imageId}
                            imagePath={imagePath}
                            imageDetails={imageDetails}
                            dismiss={this.handleClick}
                        />
                    }
                </div>
            </React.Fragment>

        )
    }
 }
 export default Lightbox;
 