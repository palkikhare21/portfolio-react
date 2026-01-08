
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const [activeTab, setActiveTab] = useState("projects");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO =
		SEO.find((item) => item.page === "home") || {
			description: "",
			keywords: [],
		};

	return (

		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />

				<div className="content-wrapper">
					{/* ================= HERO ================= */}
					<section className="homepage-hero">
						<div className="homepage-title">
							{INFO.homepage.title}
						</div>

						<div className="homepage-subtitle">
							{INFO.homepage.description}
						</div>

						<div className="homepage-cta-btns">
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noreferrer"
								className="btn-primary"
							>
								Download CV
							</a>

							<button
								className="btn-secondary"
								onClick={() => {
									const el =
										document.getElementById("main-content");
									if (el)
										el.scrollIntoView({
											behavior: "smooth",
										});
								}}
							>
								View Projects
							</button>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a href={`mailto:${INFO.main.email}`}>
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</div>
					</section>

					{/* ================= TABS ================= */}
					<div className="tab-container" id="main-content">
						<div className="tab-wrapper">
							<button
								className={`tab-item ${
									activeTab === "projects"
										? "active"
										: ""
								}`}
								onClick={() =>
									setActiveTab("projects")
								}
							>
								Projects
							</button>

							<button
								className={`tab-item ${
									activeTab === "certificates"
										? "active"
										: ""
								}`}
								onClick={() =>
									setActiveTab("certificates")
								}
							>
								Certificates
							</button>

							<button
								className={`tab-item ${
									activeTab === "tech"
										? "active"
										: ""
								}`}
								onClick={() => setActiveTab("tech")}
							>
								Tech Stack
							</button>
						</div>
					</div>

					{/* ================= TAB CONTENT ================= */}
					<div className="homepage-display-area">
						{/* Projects */}
						{activeTab === "projects" && <AllProjects />}

						{/* Certificates */}
						{activeTab === "certificates" && (
							<div className="tab-placeholder">
								<h2>Certificates Coming Soon</h2>
							</div>
						)}

						{/* Tech Stack */}
						{activeTab === "tech" && (
							<div className="tech-stack-container">
								{/* Frontend */}
								<h3 className="tech-category-title">
									Frontend
								</h3>
								<div className="tech-stack-grid">
									{INFO.stack
										.filter(
											(t) =>
												t.category ===
												"frontend"
										)
										.map((tech, index) => (
											<div
												className="tech-card"
												key={index}
											>
												<div className="tech-card-icon">
													<img
														src={tech.logo}
														alt={
															tech.name
														}
													/>
												</div>
												<div className="tech-card-name">
													{tech.name}
												</div>
											</div>
										))}
								</div>

								{/* Backend */}
								<h3 className="tech-category-title">
									Backend
								</h3>
								<div className="tech-stack-grid">
									{INFO.stack
										.filter(
											(t) =>
												t.category ===
												"backend"
										)
										.map((tech, index) => (
											<div
												className="tech-card"
												key={index}
											>
												<div className="tech-card-icon">
													<img
														src={tech.logo}
														alt={
															tech.name
														}
													/>
												</div>
												<div className="tech-card-name">
													{tech.name}
												</div>
											</div>
										))}
								</div>

								{/* Languages & Tools */}
								<h3 className="tech-category-title">
									Languages & Tools
								</h3>
								<div className="tech-stack-grid">
									{INFO.stack
										.filter(
											(t) =>
												t.category ===
													"language" ||
												t.category ===
													"tool"
										)
										.map((tech, index) => (
											<div
												className="tech-card"
												key={index}
											>
												<div className="tech-card-icon">
													<img
														src={tech.logo}
														alt={
															tech.name
														}
													/>
												</div>
												<div className="tech-card-name">
													{tech.name}
												</div>
											</div>
										))}
								</div>
							</div>
						)}
					</div>

					<Footer />
				</div>
			</div>
		</>
	);
};

export default Homepage;
	