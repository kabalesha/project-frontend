
import Logo from "./logo/logo.jsx"
import React from "react"
import css from "./header.module.css"
import AuthNav from "./AuthNav/AuthNav.jsx"




const Header = () => {
    return (
        <>
        <header className={css.headerContainer}>
            <Logo />
            <AuthNav/>
          </header>
            </>
    )
    
}

export default Header

