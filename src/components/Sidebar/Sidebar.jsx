import * as React from "react"
import "./Sidebar.css"
import CheckoutForm from "../CheckoutForm/CheckOutForm"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, returnQuantity, error, lastOrder }) {
  let sideBarState = isOpen ? "open" : ""

  return (
    <section className={`sidebar ${sideBarState}`}>
      {isOpen ? <OpenedSideBar 
              isOpen={isOpen} 
              shoppingCart={shoppingCart} 
              products={products} 
              checkoutForm={checkoutForm}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
              handleOnToggle={handleOnToggle}
              returnQuantity={returnQuantity}
              error={error}
              lastOrder={lastOrder}/> : 
            <ClosedSideBar
              handleOnToggle={handleOnToggle}/>}
    </section>

    

  )
}

export function ClosedSideBar({ handleOnToggle }) {
  return (
      <button className="toggle-button material-icons md-48" onClick={handleOnToggle}>arrow_forward</button>
  )
}

export function OpenedSideBar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, returnQuantity, error, lastOrder }) {
  return (
    <div className="open-sidebar">
      <button className="toggle-button material-icons md-48" onClick={handleOnToggle}>arrow_back</button>
      <ShoppingCart 
        isOpen={isOpen}
        products={products}
        shoppingCart={shoppingCart}
        returnQuantity={returnQuantity}/>
      <CheckoutForm 
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        checkoutForm={checkoutForm}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        error={error}
        lastOrder={lastOrder}
        products={products}/>
    </div>
  )
}
