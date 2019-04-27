import React from 'react';

const About = (props) => (
    <div
        className="hide-bg"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <div className="button-close" onClick={props.handleAboutScreen}></div> {/* TODO make this a component */}
        <div className="about">
            <div>
                <img className="about__image" src={require(`../images/optimized/london/22.jpg`)} />
            </div>
            <div className="about__content">
                <h2>Oliver Cole</h2>
                <p className="about__description">
                    Oliver Cole is a Winchester based photographer whose work incorporates themes of colour, minimalism, shape and light.
                    Oliver Cole is a Winchester based photographer whose work incorporates.
                </p>
            </div>
        </div>
    </div>
)

export default About;

