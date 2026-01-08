// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";

// import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
// import Socials from "../components/about/socials";

// import INFO from "../data/user";
// import SEO from "../data/seo";

// import "./styles/contact.css";
// import { faYahoo } from "@fortawesome/free-brands-svg-icons";

// const Contact = () => {
// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, []);

// 	const currentSEO = SEO.find((item) => item.page === "contact");

// 	return (
// 		<React.Fragment>
// 			<Helmet>
// 				<title>{`Contact | ${INFO.main.title}`}</title>
// 				<meta name="description" content={currentSEO.description} />
// 				<meta name="keywords"
// 					content={currentSEO.keywords.join(", ")}	/>
// 			</Helmet>

// 					<div className="page-content">
// 				<NavBar active="contact" />

// 				<div className="content-wrapper contact-main">

// 					{/* LEFT SECTION */}
// 					<div className="contact-left">

// 						<h1 className="contact-title">
// 							Let's Connect — I’d Love to Hear From You 💬
// 						</h1>

// 						<p className="contact-subtitle">
// 							I’m open to opportunities, collaborations, freelance work,
// 							and general questions. You can email me at{" "}
// 							<a href={`mailto:${INFO.main.email}`}>
// 								{INFO.main.email}
// 							</a>{" "}
// 							or connect via my social platforms below.
// 						</p>

// {/* SOCIAL LINKS */}
// 						<div className="contact-socials">
// 							<Socials />
// 						</div>

// 						{/* INFORMATION SECTIONS */}
// 						<div className="contact-info-sections">

// 							<div className="info-block">
// 								<h3>💡 What I Can Help You With</h3>
// 								<ul>
// 									<li>Frontend Web Development</li>
// 									<li>Portfolio & Resume Websites</li>
// 									<li>UI/UX Suggestions & Improvements</li>
// 									<li>Project Guidance & Coding Help</li>
// 									<li>Internship Collaborations</li>
// 								</ul>
// 							</div>

// 							<div className="info-block">
// 								<h3>🚀 Current Status</h3>
// 								<p>
// 									 I’m currently seeking job opportunities, remote work, freelance projects,
//         and collaboration opportunities.
// 								</p>
// 							</div>

// 							<div className="info-block">
// 								<h3>📍 Location</h3>
// 								<p>India • Available for remote worldwide work.</p>
// 							</div>

// 						</div>

// 						{/* CONTACT FORM */}
// 						<form className="contact-form">
// 							<input type="text" placeholder="Your Name" required />
// 							<input type="email" placeholder="Your Email" required />
// 							<textarea placeholder="Your Message" required></textarea>
// 							<button type="submit">Send Message</button>
// 						</form>
// 					</div>

				// 	{/* RIGHT SIDE IMAGE */}
				// 	{/* <div className="contact-right">
				// 		<img
				// 			src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-us-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--help-support-communication-pack-e-commerce-illustrations-5273837.png"
				// 			alt="contact"
				// 			className="contact-image"
				// 		/>
				// 	</div> */}
				// {/* </div>

// 				<div className="page-footer">
// 					<Footer />
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default Contact; */}


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
							
							{/* <div className="contact-social-wrapper">
								<Socials />
							</div> */}
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