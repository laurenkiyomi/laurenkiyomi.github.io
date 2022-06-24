import * as React from "react"
import "./Home.css"
import Hero from "./Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SubNavBar from "./SubNavBar"

export default function Home({ products, handleAddItemToCart, handleRemoveItemFromCart, setSearch, setCategory, search, returnQuantity }) {
  return (
    <div className="home">
      <Hero />
      <SubNavBar setSearch={setSearch} setCategory={setCategory} search={search} />
      <ProductGrid
        products={products} 
        handleAddItemToCart={handleAddItemToCart} 
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        returnQuantity={returnQuantity}/>
      <div className="bottom-label">About</div>
      <About />
      <div className="bottom-label">Contact</div>
      <Contact />
      <Footer />
    </div>

  )
}

export function About(props) {
  return (
    <div id="about" className="about">
      <div className="about-container">
        <p className="about-text">The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
        <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
      </div>
      <img className="about-image" src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg"/>
    </div>
  )
}

export function Contact(props) {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <span className="contact-info">Email: code@path.org</span>
        <span className="contact-info">Phone Number: 1-800-CODEPATH</span>
        <span className="contact-label">Address: 9450 Gilman Drive, La Jolla, CA</span>
      </div>
      <img className="contact-image" src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"/>
    </div>
  )
}

export function Footer(props) {
  return (
    <div className="footer">
      Built by Lauren Lee
    </div>
  )
}


