import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { title, description, link } = props;

	let icon = "🚀";
	if (title.includes("DID")) icon = "🔐";
	if (title.includes("Intern")) icon = "💼";
	if (title.includes("Portfolio")) icon = "🌐";
	if (title.includes("Dining")) icon = "🍽️";

	return (
		<div className="proj-card show sr">
			<div className="proj-top">
				<span className="proj-icon">{icon}</span>
				<div style={{display:"flex",alignItems:"center",gap:"8px"}}>
					<span className="proj-featured-badge">⭐ Featured</span>
					<div className="proj-links">
						<a href={link} target="_blank" rel="noreferrer" className="proj-link">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href={link} target="_blank" rel="noreferrer" className="proj-link">
							<FontAwesomeIcon icon={faExternalLinkAlt} />
						</a>
					</div>
				</div>
			</div>
			
			<div className="proj-content">
				<h3 className="proj-title">{title}</h3>
				<p className="proj-desc">{description}</p>
				<div className="proj-stack">
					<span className="stag">Django</span>
					<span className="stag">React</span>
					<span className="stag">MERN</span>
				</div>
			</div>
		</div>
	);
};

export default Project;
