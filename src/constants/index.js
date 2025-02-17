import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	cloud,
	ff,
	tm,
	// postgresql,
	// nextjs,
	// mobx,
	// restapi,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Frontend Developer',
		icon: web,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
	{
		title: 'Full-Stack Developer',
		icon: backend,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	// {
	// 	name: 'Next.js',
	// 	icon: nextjs,
	// },
	{
		name: 'Redux',
		icon: redux,
	},
	// {
	// 	name: 'MobX',
	// 	icon: mobx,
	// },
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node.js',
		icon: nodejs,
	},
	// {
	// 	name: 'PostgreSQL',
	// 	icon: postgresql,
	// },
	// {
	// 	name: 'REST API',
	// 	icon: restapi,
	// },
	{
		name: 'Git',
		icon: git,
	},
	{
		name: 'Docker',
		icon: docker,
	},
	{
		name: 'Figma',
		icon: figma,
	},
]

const experiences = [
	{
		title: 'Full-Stack Developer',
		company_name: 'Realeasy',
		icon: backend,
		iconBg: '#383E56',
		date: 'September 2024 - Present',
		points: [
			'Developed and implemented a Telegram bot using Node.js with OpenAI API and PostgreSQL integration, increasing client interaction efficiency by 30%.',
			'Designed a Telegram mini-app using React and TypeScript, improving system performance and response time.',
			'Configured CI/CD pipeline for automatic deployment to Heroku, reducing release time for new versions.',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Apusher',
		icon: web,
		iconBg: '#E6DEDD',
		date: 'June 2024 - September 2024',
		points: [
			'Set up ESLint and Prettier linters, enhancing code quality and reducing errors.',
			'Developed a mobile application using React Native, expanding the user base through improved accessibility.',
			'Integrated frontend with backend, ensuring seamless data synchronization and faster loading times.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'Web Studio',
		icon: web,
		iconBg: '#383E56',
		date: 'July 2023 - July 2024',
		points: [
			'Created responsive and cross-browser web pages (25+), improving SEO and increasing website traffic by 20%.',
			'Developed interactive UI components using ReactJS, enhancing user experience and engagement.',
			'Optimized existing code by modernizing JavaScript functions, reducing page load time by 30%.',
		],
	},
]

const testimonials = [
	{
		testimonial:
			'An excellent developer who helped us automate processes with a Telegram bot.',
		name: 'Andrey K.',
		designation: 'CTO',
		company: 'Realeasy',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
	},
	{
		testimonial:
			'Nikita did an amazing job with the frontend of our mobile app, the performance is outstanding!',
		name: 'Olga V.',
		designation: 'Product Manager',
		company: 'Apusher',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
	},
	{
		testimonial:
			'Website performance significantly improved after his optimizations.',
		name: 'Ivan S.',
		designation: 'CEO',
		company: 'Web Studio',
		image: 'https://randomuser.me/api/portraits/men/3.jpg',
	},
]
const projects = [
	{
		name: 'Cloud Storage',
		description:
			'A powerful cloud storage solution with a modern Next.js frontend and a NestJS backend. Features secure file management, user authentication, and seamless integration with PostgreSQL.',
		tags: [
			{ name: 'Next.js', color: 'blue-text-gradient' },
			{ name: 'TypeScript', color: 'green-text-gradient' },
			{ name: 'NestJS', color: 'red-text-gradient' },
			{ name: 'PostgreSQL', color: 'orange-text-gradient' },
		],
		image: cloud,
		source_code_link: 'https://github.com/safron64/cloud-storage-client',
	},

	{
		name: 'Friend Finder',
		description:
			'An innovative web app for making new connections. Built with React.js and Node.js, featuring real-time chat, secure authentication, and a scalable Dockerized backend.',
		tags: [
			{ name: 'React.js', color: 'orange-text-gradient' },
			{ name: 'Node.js', color: 'green-text-gradient' },
			{ name: 'MongoDB', color: 'pink-text-gradient' },
			{ name: 'Docker', color: 'blue-text-gradient' },
		],
		image: ff,
		source_code_link: 'https://github.com/safron64/Dating-fs',
	},

	{
		name: 'TomorrowMe',
		description:
			'A smart AI-powered chat app built with React Native & Expo. Leverages OpenAI API for natural language conversations, with Zustand for smooth state management.',
		tags: [
			{ name: 'React Native', color: 'blue-text-gradient' },
			{ name: 'Expo', color: 'green-text-gradient' },
			{ name: 'OpenAI API', color: 'purple-text-gradient' },
			{ name: 'Zustand', color: 'orange-text-gradient' },
		],
		image: tm,
		source_code_link: 'https://github.com/safron64/TomorrowMe-app',
	},
]

export { services, technologies, experiences, testimonials, projects }
