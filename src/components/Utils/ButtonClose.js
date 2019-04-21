import React, { Component } from 'react';

 class ButtonClose extends Component {
    render() {
        const { position } = this.props
        return (
            <div className="button-close" style={{ position: position ? 'absolute' : '', top: position ? '5px' : ''}}></div>
        )
    }
 }
 export default ButtonClose;
