import React, { Component } from 'react';

class ImageDetails extends Component {
    constructor() {
        super();
        this.state = {
        }
    };

    render() {
        const { imageId, imageDetails, handleDetails } = this.props;

        return (
            <React.Fragment>
                <div className='hide-bg'
                    style={{
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#00000094',
                    }}
                    onClick={handleDetails}
                >
                <div className="button-close"></div>
                    <div className="details-modal">
                        <div className="modal-heading">
                            <h2>{imageDetails[imageId - 1].title}</h2>
                            <p>Published on January 26 2019</p>
                        </div>
                            <div className="modal-info">
                                <div className="modal-section">
                                    <div>
                                        <p>camera make</p>
                                        <p>fujifilm</p>
                                    </div>
                                    <div>
                                        <p>camera modal</p>
                                        <p>t10</p>
                                    </div>
                                    <div>
                                        <p>Lens</p>
                                        <p>fujifilm 109</p>
                                    </div>
                                </div>
                                <div className="modal-section">
                                    <div>
                                        <p>ISO</p>
                                        <p>100/200</p>
                                    </div>
                                    <div>
                                        <p>aperture</p>
                                        <p>f/14.0</p>
                                    </div>
                                    <div>
                                        <p>shutter speed</p>
                                        <p>1/5s</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <p>Download</p>
                                <p>Add to basket</p>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
 }
 export default ImageDetails;









{/* <p>{imageDetails[imageId - 1].desc}</p>
<p>{imageDetails[imageId - 1].iso}</p>
<p>{imageDetails[imageId - 1].cost}</p> */}