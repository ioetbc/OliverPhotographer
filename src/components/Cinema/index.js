import React, { Component } from 'react';

import ImageDetails from './imageDetails';

class CinemaMode extends Component {
    constructor() {
        super();
        this.state = {
            showDetails: false,
            hideRightChevon: false,
            landscape: false,
            currentImage: false,
        }
        this.handleDetails = this.handleDetails.bind(this);
        this.handleNewImage = this.handleNewImage.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    };

    handleKeyDown(event) {
        console.log(event.code)

        switch(event.code) {
            case 'Escape':
            this.props.dismiss();
                break;
            case 'ArrowRight':
                this.setState(() => ({ currentImage: this.state.currentImage + 1 }));
                break;
            case 'ArrowLeft':
                this.setState(() => ({ currentImage: this.state.currentImage - 1 }));
            default:
                break;
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleDetails() {
        this.setState({
            showDetails: !this.state.showDetails,
        })
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
        const { showDetails, currentImage } = this.state;

        const imageNo = currentImage || startingImage;

        return (
            <React.Fragment>
                <div className='hide-bg'
                    style={{
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <div className="button-close" onClick={dismiss} />
                    <div style={{ position: 'relative' }}>
                        <img
                            style={{ height: '85vh' }}
                            id={'cinemaImage' + startingImage}
                            src={require(`../../images/optimized/${imagePath[imageNo]}`)}
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
                    {showDetails &&
                        <ImageDetails
                            imageDetails={imageDetails}
                            imageId={imageNo}
                            handleDetails={this.handleDetails}
                        />
                    }
                </div>
            </React.Fragment>
        )
    }
 }
 export default CinemaMode;
