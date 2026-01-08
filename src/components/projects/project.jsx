import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = ({ title, description, linkText, link, image }) => {
	return (
		<div className="project">
			<a href={link} target="_blank" rel="noreferrer">
				<div className="project-container">

					{/* ✅ Image (ONLY ONCE) */}
					{image && (
						<img
							src={image}
							alt={title}
							className="project-image"
						/>
					)}

					<div className="project-title">{title}</div>

					<div className="project-description">
						{description}
					</div>

					<div className="project-link">
						<span className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</span>
						<span className="project-link-text">
							{linkText}
						</span>
					</div>

				</div>
			</a>
		</div>
	);
};

export default Project;
