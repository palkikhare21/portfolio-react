import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const location = useLocation();
	const isHome = location.pathname === "/";
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<React.Fragment>
			<nav>
				<div className="nav-logo">
					<Link to="/">
						<span className="nav-logo-bracket">[</span>
						<span className="nav-logo-name">Palki.Khare</span>
						<span className="nav-logo-bracket">]</span>
					</Link>
				</div>
				<ul className="nav-links">
					<li className={active === "about" ? "active" : ""}>
						{isHome ? <a href="#about">About</a> : <Link to="/about">About</Link>}
					</li>
					<li className={active === "skills" ? "active" : ""}>
						{isHome ? <a href="#skills">Skills</a> : <Link to="/">Skills</Link>}
					</li>
					<li className={active === "projects" ? "active" : ""}>
						{isHome ? <a href="#projects">Projects</a> : <Link to="/projects">Projects</Link>}
					</li>
					<li>
						<Link to="/contact" className="nav-cta">Contact</Link>
					</li>
				</ul>
				<button className="hamburger" onClick={toggleMenu} aria-label="Menu">
					<span></span><span></span><span></span>
				</button>
			</nav>

			{/* Mobile Nav Overlay */}
			<div className={`mob-nav ${isOpen ? "open" : ""}`}>
				<button className="mob-close" onClick={closeMenu}>✕</button>
				{isHome ? (
					<>
						<a href="#about" onClick={closeMenu}>About</a>
						<a href="#skills" onClick={closeMenu}>Skills</a>
						<a href="#projects" onClick={closeMenu}>Projects</a>
					</>
				) : (
					<>
						<Link to="/about" onClick={closeMenu}>About</Link>
						<Link to="/" onClick={closeMenu}>Skills</Link>
						<Link to="/projects" onClick={closeMenu}>Projects</Link>
					</>
				)}
				<Link to="/contact" onClick={closeMenu}>Contact</Link>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
