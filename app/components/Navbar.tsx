import Link from "next/link";
import React from 'react'; 

export default function Navbar(){
    return(
        <header className="head">
        <nav className="nav">
          <div className="nav_div">
            <a href="#" className="portfolio">MyPortfolio</a>
          </div>
          
          
          <ul className="list">
            <li><Link href="/" className="link">Home</Link></li>
            <li><Link href="/about" className="link">About</Link></li>
            <li><a href="/skills" className="link">Skills</a></li>
            <li><a href="/contact" className="link">Contact</a></li>
            <li><a href="/mywork" className="link">Mywork</a></li>
          </ul>
          
          </nav>
          </header>
    )}