import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top animated-navbar 
      ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}
    >
      <div className="container">
        <a className="navbar-brand brand-animate" href="/">
          Flora A
        </a>

{/* <Link className="navbar-brand brand-animate" to="/">
  Flora A
</Link> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li className="nav-item nav-item-animate" key={item}>
                <a className="nav-link nav-link-underline" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
