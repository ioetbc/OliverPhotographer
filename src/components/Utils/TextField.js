import React, { Component } from "react";

class Textfield extends Component {

    render() {
        const { label, type, id } = this.props;
        return (
        <React.Fragment>
            <div style={{width: '400px', marginBottom: '20px'}}>
                <input type={type} id={id} />
                <label for={id}>{label}</label>
                <div></div>
            </div>
        </React.Fragment>
        );
    }
}
export default Textfield;