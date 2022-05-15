import React from 'react'
import { Link } from 'react-router-dom'

const NavTabs = () => {
  return (
    
    <ul className="nav nav-tabs bg-primary justify-content-center">
    <li className="nav-item">
      <Link className="nav-link text-light " data-bs-toggle="tab" to="#home">
        ALL
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-light " data-bs-toggle="tab" to="#profile">
        Tops
        </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-light" to="#">
        SwimWear
      </Link>
    </li>
  </ul>
  )
}

export default NavTabs