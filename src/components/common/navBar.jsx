import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						{/* Left Side - Name */}
					<div className="nav-left">
						<h2 className="nav-logo">Palki Khare</h2>
					</div>

					{/* Center - Menu */}
						
			<ul className="nav-list">
						<li className={active === "home" ? "nav-item active" : "nav-item"}>
							<Link to="/">Home</Link>
						</li>
						<li className={active === "about" ? "nav-item active" : "nav-item"}>
							<Link to="/about">About</Link>
						</li>
						<li
							className={active === "projects" ? "nav-item active" : "nav-item"}
						>
							<Link to="/projects">Projects</Link>
						</li>
						<li
							className={active === "contact" ? "nav-item active" : "nav-item"}
						>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>

					{/* Right Side - Resume Button */}
					<div className="nav-right">
						<a
							href="https://drive.google.com/your-resume-link"
							target="_blank"
							rel="noopener noreferrer"
							className="resume-btn"
						>
							Resume
						</a>
					</div>
				</div>
			</nav>
		</div>
		</React.Fragment>
	);
};

export default NavBar;
