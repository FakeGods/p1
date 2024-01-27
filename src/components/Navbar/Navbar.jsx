//import { useState }from "react";
//import { Link } from "react-router-dom";

function Navbar () {
    const pageUp = () => {
        window.scrollTo({ top: (0,0), behavior: 'smooth' });
    };
    
    const navlinks = [
        {
            name: 'Home',
            link: '#home',
        },
        {
            name: 'About',
            link: '#about',
        },
        {
            name: 'Projects',
            link: '#projects',
        },
        {
            name: 'Contact',
            link: '#contact',
        },
    ]
    
    return (
        <nav>
            <h3 onClick={pageUp} className="logo">
                Piotrek?
            </h3>
                <ul>
                {navlinks.map((item) => (
                    <li key={item.name}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
                </ul>
        </nav>
    );
    }

export default Navbar ;