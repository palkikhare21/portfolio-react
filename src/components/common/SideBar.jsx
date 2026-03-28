import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import "./styles/SideBar.css";

const SideBar = () => {
	return (
		<div className="side-socials">
			<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" className="soc-link" title="LinkedIn">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href={INFO.socials.github} target="_blank" rel="noreferrer" className="soc-link" title="GitHub">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a href={`mailto:${INFO.main.email}`} className="soc-link" title="Email">
				<FontAwesomeIcon icon={faEnvelope} />
			</a>
		</div>
	);
};

export default SideBar;
