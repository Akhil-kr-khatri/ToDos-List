import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                     <div className="navbar-brand fw-bold text-primary fs-4">ToDo-List</div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link hover:text-green-400" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hover:text-green-400" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hover:text-green-400" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hover:text-green-400" href="#">Help</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
