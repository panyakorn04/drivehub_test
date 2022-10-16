import React from 'react'
import logo from "../logo.svg";

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className="app-header">
                <img src={logo} alt="logo"></img>
                <span>Drivehub</span>
            </div>
        </header>
    )
}

export default Header