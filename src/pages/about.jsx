

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
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

				<section id="about" className="section" style={{marginTop:"80px"}}>
                    <div className="sr show">
                        <div className="sec-eyebrow">01 — About Me</div>
                        <h2 className="sec-title">Who I Am</h2>
                    </div>
                    <div className="about-grid">
                        <div className="about-text sr show d1">
                            <p>
                                Hey! I'm <span className="hl">Palki Khare</span>, a Computer Science undergraduate
                                with a deep passion for building full-stack web applications.
                            </p>
                            <p>
                                {INFO.about.description}
                            </p>
                            <div className="about-chips">
                                <span className="chip">Open to Work ✅</span>
                                <span className="chip">Full Stack Dev</span>
                                <span className="chip">Django + React</span>
                                <span className="chip">India 🇮🇳</span>
                            </div>
                        </div>
                
                        <div className="terminal sr show d2">
                            <div className="term-bar">
                                <div className="td" style={{background:"#ff5f57"}}></div>
                                <div className="td" style={{background:"#febc2e"}}></div>
                                <div className="td" style={{background:"#28c840"}}></div>
                                <span style={{marginLeft:"8px",fontSize:"0.72rem",color:"var(--muted)"}}>~/palki.json</span>
                            </div>
                            <div className="term-body">
                                <div><span className="tp">❯</span><span className="tc">cat palki.json</span></div>
                                <span className="to" style={{marginTop:"6px"}}>{"{"}</span>
                                <span className="to"><span className="tk">"name"</span>: <span className="tv">"Palki Khare"</span>,</span>
                                <span className="to"><span className="tk">"role"</span>: <span className="tv">"Full Stack Dev"</span>,</span>
                                <span className="to"><span className="tk">"status"</span>: <span className="tv">"open_to_work ✅"</span></span>
                                <span className="to">{"}"}</span>
                                <div style={{marginTop:"8px"}}><span className="tp">❯</span><span className="blink-cur" style={{borderRight:"2px solid var(--cyan)", height:"1em", width:"2px"}}></span></div>
                            </div>
                        </div>
                    </div>
                </section>

				<Footer />
			</div>
		</>
	);
};

export default About;

