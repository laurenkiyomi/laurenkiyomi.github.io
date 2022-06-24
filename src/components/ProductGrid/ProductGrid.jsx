import * as React from "react"
import ProductCard from "./ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({ products, handleAddItemToCart, handleRemoveItemFromCart, returnQuantity }) {
    if (products.length === 0) {
        return (
            <p className="no-products-message">No products available.</p>
        )
    }

    return (
        <div className="product-grid">
            {products.map((product) => {
                
                return (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        name={product.name}
                        productId={product.id} 
                        quantity={returnQuantity(product.id)}
                        handleAddItemToCart={handleAddItemToCart}
                        handleRemoveItemFromCart={handleRemoveItemFromCart}
                        showDescription={false}
                        image={product.image}/>
                )
            })}
        </div>
    )
}




