

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
<>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />

				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">

							<div className="about-right-side">
								<h1 className="about-title">Palki Khare</h1>

								<p className="title-stack">
									Full-Stack Developer | MERN Stack | Software Engineer
								</p>

								<p className="about-subtitle">
									{INFO.about.description}
								</p>

								{/* TEXT LINKS — NO ICONS */}
								<div className="about-links">
									<a
										href="https://github.com/palkikhare21"
										target="_blank"
										rel="noreferrer"
									>
										GitHub
									</a>
									<a
										href="https://www.linkedin.com/in/palki-khare-a"
										target="_blank"
										rel="noreferrer"
									>
										LinkedIn
									</a>
									<a href="mailto:palkikhare2@gmail.com">
										Email
									</a>
								</div>

							</div>
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};


export default About;

