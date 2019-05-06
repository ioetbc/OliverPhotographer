import React, { Component } from 'react';

class CinemaMode extends Component {
    constructor() {
        super();
        this.state = { currentImage: false }
        this.handleNewImage = this.handleNewImage.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    };

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown(event) {
        if (event.code === 'Escape') {
            this.props.dismiss();
        }
    }

    handleNewImage(click, currentImage) {
        if (click === 'right') {
            this.setState(() => ({ currentImage: currentImage + 1 }));
        } else {
            this.setState(() => ({ currentImage: currentImage - 1 }));
        }
    }

    render() {
        const { startingImage, imageDetails, dismiss, imagePath } = this.props;
        const { currentImage } = this.state;

        const imageNo = currentImage || startingImage;

        return (
            <React.Fragment>
                <div className='hide-bg'
                    style={{
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="button-close" onClick={dismiss} />
                    <div style={{ position: 'relative' }}>
                        <img
                            style={{ height: '85vh' }}
                            src={imagePath[imageNo]}
                        />
                        <div className="slide">
                            <div
                                className={imageNo > 0 && 'left'}
                                onClick={() => this.handleNewImage('left', imageNo)}
                            />
                            <div
                                className={imageNo + 1 < imageDetails.length && 'right'}
                                onClick={() => this.handleNewImage('right', imageNo)}
                            ></div>
                        </div>
                        <p style={{ position: 'absolute', left: 0, right: 0, color: '#3a3a3a', textAlign: 'center', marginTop: '10px' }}>{imageNo + 1}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
 }
 export default CinemaMode;
