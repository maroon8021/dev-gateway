import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1 className="title">
        <img src={logo} />
      </h1>
    </Link>
  </header>
)

export default Header
