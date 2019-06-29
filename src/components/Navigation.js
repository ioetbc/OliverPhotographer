import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { openHamburger: false }
    }

    render() {
        let map = new Map;
        let result;

        const {
            pushObjHeading,
            desktopWidth,
            stickyNav,
            handleNavigation,
            handleAboutScreen,
            handleContactScreen,
            handleShop,
        } = this.props;

        const {
            openHamburger,
        } = this.state;
    
        pushObjHeading.forEach(o => Object.keys(o).forEach(k => {
            if (!map.has(k)) {
                map.set(k, new Set);
            }
            o[k].split(',').forEach(s => map.get(k).add(s));
        }));
        result = [...map].map(([k, s]) => ({ [k]: [...s] }));

        return (
            <nav
                className={`navigation ${!desktopWidth && 'navigation__mobile'}`
                }
                onClick={!desktopWidth && (() => this.setState({ openHamburger: !this.state.openHamburger }))}
            >
                <div className={`menu ${openHamburger && 'open-hamburger'}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div
                    className="sticky-wrapper"
                    style={{
                        position: stickyNav && desktopWidth && 'fixed',
                        top: stickyNav && desktopWidth && '30px'
                    }}
                >
                    <h2 style={{ marginTop: '0px'}}>Projects</h2>
                    <div className="anchors">
                        {result.map(item => ([
                            <h4>{Object.keys(item)}</h4>,
                            <ul>
                                {Object.values(item)[0].map(a => 
                                    <li>
                                        <a onClick={() => handleNavigation(a)}>{a}</a>
                                    </li>
                                )}
                            </ul>
                        ]))}
                    </div>
                    <h2 style={{ cursor: 'pointer' }} onClick={handleAboutScreen}>About</h2>
                    <h2 style={{ cursor: 'pointer' }} onClick={handleContactScreen}>Contact</h2>
                    {/*<h2 style={{ cursor: 'pointer' }} onClick={handleShop}>Shop</h2>*/}
                </div>
            </nav>
        )
    }
}

export default Navigation;
 