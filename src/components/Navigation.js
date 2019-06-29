import React from 'react';

const Navigation = (props) => {
    const map = new Map;
    let result;

    props.pushObjHeading.forEach(o => Object.keys(o).forEach(k => {
        if (!map.has(k)) {
            map.set(k, new Set);
        }
        o[k].split(',').forEach(s => map.get(k).add(s));
    }));
    result = [...map].map(([k, s]) => ({ [k]: [...s] }));
    return (
        <nav className="navigation">
            <div style={{ position: props.stickyNav && 'fixed', top: props.stickyNav && '30px' }}>
                <h2 style={{ marginTop: '0px'}}>Projects</h2>
                <div className="anchors">
                    {result.map(item => ([
                        <h4>{Object.keys(item)}</h4>,
                        <ul>
                            {Object.values(item)[0].map(a => 
                                <li>
                                    <a onClick={() => props.handleNavigation(a)}>{a}</a>
                                </li>
                            )}
                        </ul>
                    ]))}
                </div>
                <h2 style={{ cursor: 'pointer' }} onClick={props.handleAboutScreen}>About</h2>
                <h2 style={{ cursor: 'pointer' }} onClick={props.handleContactScreen}>Contact</h2>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center'}}>
                    <h2 className="shop" onClick={props.handleShop} style={{ margin: '0px' }}>Shop</h2>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
 