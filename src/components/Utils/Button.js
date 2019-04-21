import React, { Component } from "react";

class SubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkout: false,
        }
    }

    render() {
        const { text, onClick, isBasketEmpty } = this.props;
        return (
            <React.Fragment>
                <button
                    onClick={onClick}
                    disabled={isBasketEmpty}
                    style={{ width: '110px' }}
                >
                    {text}
                </button>
            </React.Fragment>
        );
    }
}
export default SubmitButton;
