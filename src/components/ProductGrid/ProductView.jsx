import * as React from "react"
import ProductCard from "./ProductCard";

export default function ProductView({ product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription }) {
    // Don't show the product unless we have fetched the product
    if (!product) { return null; }

    return (
        <div className="product-view">
            <h1 className="product-id">{`Product #${productId}`}</h1>
            <ProductCard 
                product={product}
                name={product.name}
                productId={productId}
                quantity={quantity}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={showDescription}
                image={product.image}/>
        </div>
    )
}