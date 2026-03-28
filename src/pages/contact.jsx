import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
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
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />

				<section id="contact" className="section" style={{marginTop:"80px"}}>
                    <div className="contact-wrap">
                        <div className="sr show">
                            <div className="sec-eyebrow">04 — Contact</div>
                            <h2 className="contact-title">Let's <span className="grad-text">Connect</span></h2>
                            <p className="contact-desc">
                                I'm open to internship opportunities, collaborations, and just a good chat about tech.
                            </p>
                            <a href={`mailto:${INFO.main.email}`} className="contact-email-btn">
                                <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '10px'}} />
                                Say Hello →
                            </a>
                        </div>
                    </div>
                </section>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Contact;