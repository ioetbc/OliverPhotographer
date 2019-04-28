import React, { Component } from 'react';

import { lazyLoad, loadBricks } from './Utils/helpers';

class ImageStream extends Component {
    componentDidMount() {
        lazyLoad();
        loadBricks();
    };

    render() {
        const { images, handleSlideShow } = this.props;

        return (
        <div className="grid" data-grid>
            {images.map((image, i) => (
                <img
                    id={'image-stream-' + i}
                    className="lazy grid-item"
                    style={{ height: image.height, cursor: 'pointer' }}
                    onClick={() => handleSlideShow(i, image.optimized)}
                    src={require(`../images/placeholder/${image.placeholder}`)}
                    data-src={require(`../images/optimized/${image.optimized}`)}
                    data-srcset={require(`../images/optimized/${image.optimized}`)}
                />
            ))}
        </div>
        )
    }
}

 export default ImageStream;
