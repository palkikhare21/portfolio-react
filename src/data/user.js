const INFO = {
	main: {
		title: "Palki Khare — Portfolio",
		name: "Palki Khare",
		email: "erpalkikhare21@gmail.com",
	},

	socials: {
		twitter: "https://x.com/PalkiKhare32820/",
		github: "https://github.com/palkikhare21",
		linkedin: "https://www.linkedin.com/in/palkikhare",
	},

	homepage: {
		title: "Palki Khare | Full Stack Developer",
		description:
			"A passionate Full Stack Developer building modern web apps. Currently working on DID authentication with Django & Web3. I love turning complex problems into elegant digital solutions.",
	},

	about: {
		title: "Palki Khare — Full Stack Developer",
		description:
			"Hey! I'm Palki Khare, a Computer Science undergraduate with a deep passion for building full-stack web applications that are fast, functional, and beautifully designed. I'm currently interning and building a DID (Decentralised Identity) authentication system — a MetaMask wallet signature-based login using Django and the eth-account library. It's my first deep-dive into Web3 + traditional backend engineering. When I'm not coding, I'm learning new technologies, collaborating on team projects, and looking for the next problem worth solving.",
	},

	projects: [
		{
			title: "DID Authentication System",
			description:
				"MetaMask wallet signature-based login gate built with Django. Uses a challenge-response flow — Django generates a structured challenge, the user signs it via MetaMask, and Django verifies the signature using eth-account.",
			linkText: "View on GitHub",
			link: "https://github.com/palkikhare21",
		},
		{
			title: "ApnaIntern — Job & Internship Portal",
			description:
				"A full-featured internship and job search portal built as a group project. Features company listings, search & filters, user authentication, and application management. Deployed on Render.",
			linkText: "View Live",
			link: "https://apnaintern.onrender.com",
		},
		{
			title: "Personal Portfolio",
			description:
				"My personal portfolio website built with React.js and custom CSS. Fully responsive with smooth animations, project showcase, and a clean modern design. Deployed on Vercel.",
			linkText: "View on Vercel",
			link: "https://palkikhare.vercel.app",
		},
	],

	stack: [
        { name: "Python", category: "language", icon: "🐍" },
        { name: "JavaScript", category: "language", icon: "⚡" },
        // { name: "Java", category: "language", icon: "☕" },
        { name: "C++", category: "language", icon: "⚙️" },
        // { name: "SQL", category: "language", icon: "🗄️" },
        { name: "HTML / CSS", category: "language", icon: "🎨" },
        { name: "Django", category: "framework", icon: "🦄" },
        { name: "React.js", category: "framework", icon: "⚛️" },
        // { name: "REST APIs", category: "framework", icon: "🔗" },
        { name: "Bootstrap", category: "framework", icon: "🅱️" },
        // { name: "eth-account", category: "framework", icon: "🔐" },
        // { name: "Git", category: "tool", icon: "🌿" },
        { name: "GitHub", category: "tool", icon: "🐙" },
        { name: "VS Code", category: "tool", icon: "💻" },
        { name: "Vercel", category: "tool", icon: "▲" },
        // { name: "PostgreSQL", category: "tool", icon: "🐘" },
        // { name: "Figma", category: "tool", icon: "🎭" },
    ]
};

export default INFO;
