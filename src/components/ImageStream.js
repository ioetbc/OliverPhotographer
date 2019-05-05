import React, { Component } from 'react';
import { lazyLoad, loadBricks } from './Utils/helpers';

class ImageStream extends Component {
    componentDidMount() {
        loadBricks();
        lazyLoad();
    };

    render() {
        const { images, handleSlideShow } = this.props;
        return (
            <div className="grid" data-grid style={{ position: 'relative', width: '1100px', height: '13399px' }}>
                {images.map((image, i) => (
                    <img
                        id={'image-stream-' + i}
                        className="lazy grid-item"
                        style={{ height: image.height, cursor: 'pointer' }}
                        onClick={() => handleSlideShow(i, image.optimized)}
                        src={image.placeholder}
                        data-src={image.optimized}
                        data-srcset={image.optimized}
                    />
                ))}
            </div>
        )
    }
}

 export default ImageStream;
