import React from 'react';

const Navigation = (props) => (
    <nav className="navigation">
        <div style={{position: props.stickyNav && 'fixed', top: props.stickyNav && '30px'}}>
            <h2 style={{ marginTop: '0px'}}>Projects</h2>
            <div className="anchors">
                <ul>
                    { props.uniqueClass.map(c => 
                        <li><a
                                className={props.navItem === c ? 'active' : ''}
                                onClick={() => props.handleNavigation(c)}>{c}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center'}}>
                <h2 className="shop" onClick={props.handleShop} style={{ marginBottom: '0px' }}>Shop</h2>
            </div>
            <h2 style={{ cursor: 'pointer' }} onClick={props.handleContactScreen}>Contact</h2>
        </div>
    </nav>
)

export default Navigation;
 