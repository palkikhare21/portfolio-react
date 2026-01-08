import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />

				<div className="content-wrapper contact-main">
					{/* NEW MODERN GRID LAYOUT */}
					<div className="contact-container-grid">
						
						{/* LEFT SIDE: Text & Info */}
						<div className="contact-left-side">
							<h1 className="contact-title">
								Let's build something <span className="highlight">extraordinary</span> together.
							</h1>
							<p className="contact-subtitle">
								I’m currently seeking MERN Stack roles and freelance collaborations. 
								Whether you have a question or just want to say hi, my inbox is always open.
							</p>

							<div className="contact-info-grid">
								<div className="info-item">
									<h4>📍 Location</h4>
									<p>India • Remote Worldwide</p>
								</div>
								<div className="info-item">
									<h4>📧 Email</h4>
									<p>{INFO.main.email}</p>
								</div>
							</div>
							
							<div className="contact-social-wrapper">
								<Socials />
							</div>
						</div>

						{/* RIGHT SIDE: The Attraction Form Card */}
						<div className="contact-right-side">
							<div className="contact-form-card">
								<form className="contact-form">
									<div className="form-group">
										<label>Full Name</label>
										<input type="text" placeholder="Enter your name" required />
									</div>
									<div className="form-group">
										<label>Email Address</label>
										<input type="email" placeholder="email@example.com" required />
									</div>
									<div className="form-group">
										<label>Message</label>
										<textarea placeholder="Tell me about your project..." rows="5" required></textarea>
									</div>
									<button type="submit" className="contact-submit-btn">
										Send Message 🚀
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;