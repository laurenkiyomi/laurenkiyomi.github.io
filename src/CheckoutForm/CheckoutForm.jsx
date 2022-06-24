import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({ isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, error, lastOrder, products }) {
    return (
        <div className="checkout-form">
            <input 
                required
                className="checkout-form-input"
                type="email"
                name="email"
                placeholder="student@codepath.org"
                value={checkoutForm.email}
                onChange={(event) => {handleOnCheckoutFormChange("email", event.target.value)}}
            ></input>
            <input 
                required
                className="checkout-form-input"
                type="text"
                name="name"
                placeholder="Student Name"
                value={checkoutForm.name}
                onChange={(event) => {handleOnCheckoutFormChange("name", event.target.value)}}
            ></input>
            <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>
                Checkout
            </button>
            {error === "Success" ? 
                <div className="success">{"Success!"}</div> : 
                <div className="error">{error}</div>}
            {lastOrder === null ?
                <div className="receipt"></div> :
                <Receipt lastOrder={lastOrder} products={products}/>
            }
        </div>
    )
}

export function Receipt({ lastOrder, products }) {
    const getName = (productId) => {
        let name = ""
        for(let i = 0; i < products.length; i++) {
            if (products[i].id == productId) {
                name = products[i].name
            }
        }

        return name
    }

    return (
        <div className="receipt">
            <h2 className="receipt-title ">Receipt</h2>
            <p className="receipt-name">{`Showing receipt for ${lastOrder.checkoutForm.name}:`}</p>
            {lastOrder.shoppingCart.map((item) => {
                return (
                        <div className="receipt-item" key={item.itemId}>
                            
                            <span className="material-icons md-48">arrow_right</span>
                            <span>{`${getName(item.itemId)}: ${item.quantity}`}</span>
                        </div>
                )
            })}
        </div>
    )
}