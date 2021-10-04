import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {

    return (
<footer className="footer-area">
    <div className="Container bg-dark text-center text-white py-4 mt-3">
    <span>NewsApp By </span>
    <Link aria-current="page" to="/">ASIF JAVED</Link>
    <span> &reg; {new Date().getFullYear()}</span>
     
    </div>
</footer>
    )
}

export default Footer
