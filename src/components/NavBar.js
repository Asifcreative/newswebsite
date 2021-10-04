import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const NavBar = (props) => {
    let pathname = window.location.pathname;
    const [lang, setlang] = useState("us")
    // useEffect(() => {
    //     pathname = window.location.pathname;
    // }, [window.location.pathname]);

    function english (){
        setlang('us');
        console.log(lang);
    }
    
    function arabic (){
        setlang('ae');
        console.log(lang);
    }
    return (
        <div>
            <nav className="bg-danger">
                <div className="container-fluid d-flex justify-content-between">
                    <p className="text-light my-auto"><i className="mnp-icon fa fa-clock"></i>&nbsp;{`${new Date().toDateString()}`}</p>
                    <div className="my-auto">
                        <i className="fab fa-fab fa-facebook-f bg-primary text-white fs-4 p-2 text-decoration-none"></i>
                        <i className="fab fa-twitter bg-info text-white fs-4 p-2  text-decoration-none" ></i>
                        <i className="fab fa-youtube bg-danger text-white fs-4 p-2 text-decoration-none" ></i>
                        <i className="fab fa-linkedin bg-primary text-white fs-4 p-2 text-decoration-none" ></i>
                        <i className="fab fa-instagram bg-warning text-white fs-4 p-2 text-decoration-none" ></i>
                    </div>

                </div>
            </nav>
            <div className="container-fluid">
                <h2>NewsWebsite</h2>
                <p>Changing the Dimension of News</p>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i className="fas fa-home"></i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`${pathname.match('/') ? 'nav-link active' : 'nav-link'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${pathname.match('/business') ? 'nav-link active' : 'nav-link'}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${pathname.match('/entertainment') ? 'nav-link active' : 'nav-link'}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${pathname.match('/health') ? 'nav-link active' : 'nav-link'}`}  to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${pathname.match('/science') ? 'nav-link active' : 'nav-link'}`}  to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${pathname.match('/sports') ? 'nav-link active' : 'nav-link'}`}  to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${pathname.match('/technology') ? 'nav-link active' : 'nav-link'}`}  to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <div className="btn-group me-3" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onClick={english}/>
                            <label className="btn btn-sm btn-outline-dark" htmlFor="btnradio1">Eng</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={arabic}/>
                            <label className="btn btn-sm btn-outline-dark" htmlFor="btnradio2">Arb</label>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
