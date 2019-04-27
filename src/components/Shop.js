import React from 'react';

const Shop = (props) => (
    <div
        className="hide-bg"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
    <div className="button-close" onClick={props.handleShop}></div>
        <p>This will be the shop</p>
    </div>
)

export default Shop;

 