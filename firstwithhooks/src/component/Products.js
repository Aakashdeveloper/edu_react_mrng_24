import React from 'react';
import './product.css';

const Products = ({ prodData }) => {

    const renderProducts = prodData.map(({ id, image, name, description, cost, uses }) => {
        return (
            <div className="card" key={id}>
                <img src={image} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>Rs.{cost}</p>
                    <p>{uses}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="main">
            {renderProducts}
        </div>
    );
};

export default Products;
