import * as React from "react"

export default function SubNavBar( {setSearch, setCategory, search} ) {
    const [type, setType] = React.useState("all")

    const handleOnSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="sub-navbar">
            <SearchBar className="search-bar" value={search} handleOnSearchChange={handleOnSearchChange}/>
            <NavLinks setSearch={setSearch} setCategory={setCategory} type={type} setType={setType}/>
        </div>
    )
}

export function NavLinks({ setSearch, setCategory, type, setType }) {
    return (
        <ul className="nav-links"> 
            <NavLink category="all" title="All Categories" setCategory={setCategory} type={type} setType={setType} />
            <NavLink category="clothing" title="Clothing" setCategory={setCategory} type={type} setType={setType} />
            <NavLink category="food" title="Food" setCategory={setCategory} type={type} setType={setType} />
            <NavLink category="accessories" title="Accessories" setCategory={setCategory} type={type} setType={setType} />
            <NavLink category="tech" title="Technology" setCategory={setCategory} type={type} setType={setType} />
        </ul>
    )
}

export function NavLink({ category, title, setCategory, type, setType }) {
    const changeCategory = () => {
        if (category === "all") {
            setCategory("all")
        }

        else {
            setCategory(category)
        }
    }

    return (
        <button className={`nav-button ${type == category ? "active" : ""}`} onClick={() => {
            changeCategory()
            setType(category)
        }}
        >{title}</button>
    )
}

export function SearchBar({ value, handleOnSearchChange }) {
    return (
        <input 
            className="search" 
            name="product-search-input"
            type="text"
            placeholder="Search for a product"
            value={value}
            onChange={handleOnSearchChange}>
        </input>
    )
}