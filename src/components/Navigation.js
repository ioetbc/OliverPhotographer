import React, { Component } from 'react';

import Contact from './Contact'

 class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            contact: false,
        }
        this.handleContactScreen = this.handleContactScreen.bind(this);
    }

    handleContactScreen() {
        this.setState({
            contact: !this.state.contact,
        });
    }

    render() {
        const { uniqueClass, handleNavigation, navItem, stickyNav } = this.props;
        const { contact } = this.state;

        return (
            <nav className="navigation">
                <div style={{position: stickyNav && 'fixed', top: stickyNav && '30px'}}>
                    <h2 style={{ marginTop: '0px'}}>Projects</h2>
                    <div className="anchors">
                        <ul>
                            { uniqueClass.map(c => 
                                <li><a
                                        className={navItem === c ? 'active' : ''}
                                        onClick={() => handleNavigation(c)}>{c}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center'}}>
                        <h2 className="shop" style={{ marginBottom: '0px' }}>Shop</h2>
                        <p className="tool-tip-coming-soon">Coming soon</p>
                    </div>
                    <h2 style={{ cursor: 'pointer' }} onClick={this.handleContactScreen}>Contact</h2>
                    {contact && 
                        <Contact 
                            contact={contact}
                            handleContactScreen={this.handleContactScreen}
                        />
                    }
                </div>
            </nav>
        )
    }
 }
 export default Navigation;
 