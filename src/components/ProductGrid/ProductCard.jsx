import * as React from "react"
import { Link } from "react-router-dom";
export default function ProductCard({ product, name, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription, image }) {
    const productURL = `/products/${productId}`
    let price = product.price.toFixed(2) + ""
    if (price.length < 3) {
        price = "0" + price
    }

    return (
        <div className="product-card">
            <div className="media"><Link to={productURL} className="product-image product-link" ><img className="product-image" src={image} alt={name}/></Link></div>
            <div className="product-card-text">
                <h2 className="product-name">{name}</h2>
                <p className="product-price">{`$${price}`}</p>
            </div>
            {showDescription ? <p className="product-description">{product.description}</p> : ""}
            <div className="quantity-buttons">
                <button className="remove" onClick={() => handleRemoveItemFromCart(productId)}>-</button>
                <p className="product-quantity">{quantity}</p>
                <button className="add" onClick={() => handleAddItemToCart(productId)}>+</button>
            </div>
        </div>
    )
}