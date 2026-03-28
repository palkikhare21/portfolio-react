import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faChevronDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const [typedText, setTypedText] = useState("");
	const [roleIndex, setRoleIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [charIndex, setCharIndex] = useState(0);
    const [counts, setCounts] = useState({ projects: 0, tech: 0 });

	const roles = [
		"Full Stack Developer",
		"Software Engineer",
		"React Frontend Dev",
		// "Web3 Explorer",
		"Problem Solver",
		"CS Undergraduate"
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Typing Effect Logic
	useEffect(() => {
		const currentRole = roles[roleIndex];
		const timeout = setTimeout(() => {
			if (!isDeleting) {
				setTypedText(currentRole.substring(0, charIndex + 1));
				setCharIndex(prev => prev + 1);
				if (charIndex === currentRole.length) {
					setTimeout(() => setIsDeleting(true), 1800);
				}
			} else {
				setTypedText(currentRole.substring(0, charIndex - 1));
				setCharIndex(prev => prev - 1);
				if (charIndex === 0) {
					setIsDeleting(false);
					setRoleIndex(prev => (prev + 1) % roles.length);
				}
			}
		}, isDeleting ? 38 : 78);

		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, roleIndex]);

    // Counter Animation Logic
    useEffect(() => {
        const timer = setTimeout(() => {
            const projectInterval = setInterval(() => {
                setCounts(prev => ({
                    ...prev,
                    projects: prev.projects < 5 ? prev.projects + 1 : 5
                }));
            }, 180);
            
            const techInterval = setInterval(() => {
                setCounts(prev => ({
                    ...prev,
                    tech: prev.tech < 15 ? prev.tech + 1 : 15
                }));
            }, 70);

            return () => {
                clearInterval(projectInterval);
                clearInterval(techInterval);
            };
        }, 1700);
        return () => clearTimeout(timer);
    }, []);

	// Scroll Reveal Logic
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
				}
			});
		}, { threshold: 0.1 });

		document.querySelectorAll(".sr").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />

				<main>
					{/* ══ HERO ══ */}
					<section id="hero">
						<div className="orb orb-1"></div>
						<div className="orb orb-2"></div>

						<div className="hero-tag">AVAILABLE FOR OPPORTUNITIES</div>

						<h1 className="hero-h1">Hi, I'm <span className="grad-text">Palki</span></h1>
						<h1 className="hero-h1-line2">Khare.</h1>

						<div className="hero-typing">
							<span style={{ color: "var(--muted)" }}>$ role →&nbsp;</span>
							<span id="typed">{typedText}</span><span className="blink-cur"></span>
						</div>

						<p className="hero-desc">
							A passionate <span className="hl">Full Stack Developer</span> building modern web apps.
							Currently working on <span className="hl">DID authentication</span> with Django &amp; Web3.
							I love turning complex problems into elegant digital solutions.
						</p>

						<div className="hero-btns">
							<a href="#projects" className="btn btn-filled">
								<FontAwesomeIcon icon={faChevronDown} style={{marginRight: '9px', fontSize: '0.8rem'}} />
								View Projects
							</a>
							<a href={`mailto:${INFO.main.email}`} className="btn btn-ghost">
								Get in Touch
								<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '9px', fontSize: '0.8rem'}} />
							</a>
						</div>

						<div className="hero-stats">
							<div className="hstat">
								<div className="hstat-num">{counts.projects}+</div>
								<div className="hstat-label">Projects Built</div>
							</div>
							<div className="hstat">
								<div className="hstat-num">{counts.tech}+</div>
								<div className="hstat-label">Technologies</div>
							</div>
							<div className="hstat">
								<div className="hstat-num">2025-26 </div>
								<div className="hstat-label">Currently Active</div>
							</div>
						</div>

						<div className="hero-scroll">
							<div className="scroll-mouse"><div className="scroll-wheel"></div></div>
							scroll to explore
						</div>
					</section>

					{/* ══ ABOUT ══ */}
					<section id="about" className="section alt">
						<div className="sr">
							<div className="sec-eyebrow">01 — About Me</div>
							<h2 className="sec-title">Who I Am</h2>
						</div>
						<div className="about-grid">
							<div className="about-text sr d1">
								<p>
									Hey! I'm <span className="hl">Palki Khare</span>, a Computer Science undergraduate
									with a deep passion for building full-stack web applications that are fast,
									functional, and beautifully designed.
								</p>
								<p>
									I'm currently interning and building a <span className="hl">DID (Decentralised Identity)
									authentication system</span> — a MetaMask wallet signature-based login using
									Django and the <span className="hl">eth-account</span> library. It's my first deep-dive
									into Web3 + traditional backend engineering.
								</p>
								<p>
									When I'm not coding, I'm learning new technologies, collaborating on team projects,
									and looking for the next problem worth solving.
								</p>
								<div className="about-chips">
									<span className="chip">Open to Work ✅</span>
									<span className="chip">Full Stack Dev</span>
									<span className="chip">MERN + React</span>
									<span className="chip">Next Js Curious</span>
									<span className="chip">India 🇮🇳</span>
								</div>
							</div>

							<div className="terminal sr d2">
								<div className="term-bar">
									<div className="td" style={{ background: "#ff5f57" }}></div>
									<div className="td" style={{ background: "#febc2e" }}></div>
									<div className="td" style={{ background: "#28c840" }}></div>
									<span style={{ marginLeft: "8px", fontSize: "0.72rem", color: "var(--muted)" }}>~/palki.json</span>
								</div>
								<div className="term-body">
									<div><span className="tp">❯</span><span className="tc">cat palki.json</span></div>
									<span className="to" style={{ marginTop: "6px" }}>{"{"}</span>
									<span className="to"><span className="tk">"name"</span>: <span className="tv">"Palki Khare"</span>,</span>
									<span className="to"><span className="tk">"role"</span>: <span className="tv">"Full Stack Dev"</span>,</span>
									<span className="to"><span className="tk">"location"</span>: <span className="tv">"India 🇮🇳"</span>,</span>
									<span className="to"><span className="tk">"email"</span>: <span className="tv">"palkikhare2@gmail.com"</span>,</span>
									<span className="to"><span className="tk">"stack"</span>: [<span className="tv">"React js"</span>, <span className="tv">"Next js"</span>, <span className="tv">"Python"</span>],</span>
									{/* <span className="to"><span className="tk">"exploring"</span>: <span className="tv">"Web3 + DID Auth"</span>,</span> */}
									<span className="to"><span className="tk">"status"</span>: <span className="tv">"open_to_work ✅"</span></span>
									<span className="to">{"}"}</span>
									<div style={{ marginTop: "8px" }}><span className="tp">❯</span><span className="blink-cur" style={{borderRight: '2px solid var(--cyan)', height: '1.2em', width: '2px', display: 'inline-block', verticalAlign: 'middle'}}></span></div>
								</div>
							</div>
						</div>
					</section>

					{/* ══ SKILLS ══ */}
					<section id="skills" className="section">
						<div className="sr">
							<div className="sec-eyebrow">02 — Skills</div>
							<h2 className="sec-title">Tech Stack</h2>
							<p className="sec-sub">Languages, frameworks, and tools I work with.</p>
						</div>

						<div className="skills-cats">
							<div className="sr d1">
								<div className="cat-label">Languages</div>
								<div className="skills-row">
									{INFO.stack.filter(s => s.category === "language").map((skill, i) => (
										<div className="skill-pill" key={i}><span className="skill-em">{skill.icon}</span><span className="skill-name-t">{skill.name}</span></div>
									))}
								</div>
							</div>

							<div className="sr d2">
								<div className="cat-label">Frameworks & Libraries</div>
								<div className="skills-row">
									{INFO.stack.filter(s => s.category === "framework").map((skill, i) => (
										<div className="skill-pill" key={i}><span className="skill-em">{skill.icon}</span><span className="skill-name-t">{skill.name}</span></div>
									))}
								</div>
							</div>

							<div className="sr d3">
								<div className="cat-label">Tools & Platforms</div>
								<div className="skills-row">
									{INFO.stack.filter(s => s.category === "tool").map((skill, i) => (
										<div className="skill-pill" key={i}><span className="skill-em">{skill.icon}</span><span className="skill-name-t">{skill.name}</span></div>
									))}
								</div>
							</div>
						</div>
					</section>

					{/* ══ PROJECTS ══ */}
					<section id="projects" className="section alt">
						<div className="sr">
							<div className="sec-eyebrow">03 — Projects</div>
							<h2 className="sec-title">Things I've Built</h2>
							<p className="sec-sub">A few projects I'm proud of — from Web3 auth to job portals.</p>
						</div>

						<div className="projects-grid">
							{INFO.projects.map((proj, i) => (
								<div className="proj-card sr" key={i}>
									<div className="proj-top">
										<span className="proj-icon">{proj.title.includes("DID") ? "🔐" : proj.title.includes("Intern") ? "💼" : "🌐"}</span>
										<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
											{i === 0 && <span className="proj-featured-badge">⭐ Featured</span>}
											<div className="proj-links">
												<a href={proj.link} target="_blank" rel="noreferrer" className="proj-link" title="Source">
													<FontAwesomeIcon icon={faGithub} />
												</a>
											</div>
										</div>
									</div>
									<h3 className="proj-title">{proj.title}</h3>
									<p className="proj-desc">{proj.description}</p>
									<div className="proj-stack">
										{proj.title.includes("DID") ? (
											["Django", "Python", "Web3.js", "MetaMask", "eth-account", "React"].map((s, si) => <span className="stag" key={si}>{s}</span>)
										) : proj.title.includes("Intern") ? (
											["Django", "React", "PostgreSQL", "REST API", "Render"].map((s, si) => <span className="stag" key={si}>{s}</span>)
										) : (
											["React.js", "CSS", "JavaScript", "Vercel"].map((s, si) => <span className="stag" key={si}>{s}</span>)
										)}
									</div>
								</div>
							))}
						</div>
					</section>

					{/* ══ CONTACT ══ */}
					<section id="contact" className="section">
						<div className="contact-wrap sr">
							<div className="sec-eyebrow">04 — Contact</div>
							<h2 className="contact-title">Let's <span className="grad-text">Connect</span></h2>
							<p className="contact-desc">
								I'm open to internship opportunities, collaborations, and just a good chat about tech.
								My inbox is always open — feel free to reach out!
							</p>
							<a href={`mailto:${INFO.main.email}`} className="contact-email-btn">
								<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
								Say Hello →
							</a>
							<div className="contact-socials">
								<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" className="cs-link" title="LinkedIn">
									<FontAwesomeIcon icon={faLinkedin} style={{fontSize: '1.2rem'}} />
								</a>
								<a href={INFO.socials.github} target="_blank" rel="noreferrer" className="cs-link" title="GitHub">
									<FontAwesomeIcon icon={faGithub} style={{fontSize: '1.2rem'}} />
								</a>
							</div>
						</div>
					</section>
				</main>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Homepage;