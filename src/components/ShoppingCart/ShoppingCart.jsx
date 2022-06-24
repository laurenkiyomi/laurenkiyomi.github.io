import * as React from "react"
import axios from 'axios';
import "./ShoppingCart.css"

export default function ShoppingCart({ isOpen, products, shoppingCart, returnQuantity }) {  
    const getSubtotal = () => {
        let subtot = 0;
        for (let i = 0; i < shoppingCart.length; i++) {
            for (let j = 0; j < products.length; j++) {
                if (products[j].id === shoppingCart[i].itemId) {
                    subtot += returnQuantity(products[j].id) * products[j].price
                }
            }
        }

        return subtot
    }


    return (
        <div className="shopping-cart">
            <h1 className="shopping-cart-title">YOUR CART</h1>
            {shoppingCart.length===0 ? 
                <p className="notification">No items added to cart yet. Start shopping now!</p> : 
                <div className="cart-contents">
                    <div className="cart-header">
                        <h2 className="header-text header-item">Item</h2>
                        <h2 className="header-text header-quantity">Quantity</h2>
                        <h2 className="header-text header-unit">Unit Price</h2>
                        <h2 className="header-text header-cost">Cost</h2>
                    </div>
                    {shoppingCart.map((item) => {
                        return (
                            <ProductRow key={item.itemId} item={item} quantity={returnQuantity(item.itemId)} products={products}/>
                        )
                    })}
                    
                    <div className="receipt-table subtotal">
                        <span className="receipt-label">SUBTOTAL</span>
                        <span className="receipt-price">{`$${(getSubtotal()).toFixed(2)}`}</span>
                    </div>
                    <div className="receipt-table tax">
                        <span className="receipt-label">TAXES & FEES</span>
                        <span className="receipt-price">{`$${(getSubtotal() * .0875).toFixed(2)}`}</span>
                    </div>
                    <div className="receipt-table total-price">
                        <span className="receipt-label">TOTAL</span>
                        <span className="receipt-price">{`$${(getSubtotal() * 1.0875).toFixed(2)}`}</span>
                    </div>
                </div>}
        </div>
    )
}

export function ProductRow({ item, quantity, products }) {
    const [product, setProduct] = React.useState(null)

    const getProductData = async () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === item.itemId) {
                setProduct(products[i])
            }
        }
    }

    React.useEffect(() => {
        getProductData()
    }, [])

    // Don't show the product unless we have fetched the product
    if (!product) { return null; }

    return (
        <div className="product-row">
            <div className="cart-product-name">{product.name}</div>
            <div className="cart-product-quantity">{quantity}</div>
            <div className="cart-product-unit-price">{`$${product.price.toFixed(2)}`}</div>
            <div className="cart-product-price">{`$${(product.price * quantity).toFixed(2)}`}</div>
        </div>
    )


}