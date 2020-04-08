import React from "react"
import Nav from "./nav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Nav/>
      <main className='main-content'>{children}</main>
    </div>
  )
}

export default Layout