import * as React from "react"

export default function Hero(props) {
    return (
        <div className="hero">
            <div className="intro">
                <p>Welcome! <br/> Find Your Merch!</p> 
                <p className="intro-para">We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p> 
            </div>
            <img className="hero-img" src="	https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="Hero" />
        </div>
    )
}
