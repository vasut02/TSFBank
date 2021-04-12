import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


const Navabar = () => {
    return (
        <div className="NavBar ">
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">TSF Bank</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/customer" className="nav-link active" aria-current="page" href="#">Customer</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/transaction" className="nav-link active" aria-current="page" href="#">Transaction</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/send_money" className="nav-link active" href="#">Send Money</Link>
                            </li>                            
                        </ul>

                    </div>
                </div>
            </nav>

        </div >
    )
}

export default Navabar
