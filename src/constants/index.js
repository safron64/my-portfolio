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
	{ id: 'about', title: 'nav.about' },
	{ id: 'work', title: 'nav.work' },
	{ id: 'contact', title: 'nav.contact' },
]

const services = [
	{
		title: 'services.frontendDeveloper',
		icon: web,
	},
	{
		title: 'services.reactNativeDeveloper',
		icon: mobile,
	},
	{
		title: 'services.fullStackDeveloper',
		icon: backend,
	},
]

const technologies = [
	{
		name: 'technologies.html5',
		icon: html,
	},
	{
		name: 'technologies.css3',
		icon: css,
	},
	{
		name: 'technologies.javascript',
		icon: javascript,
	},
	{
		name: 'technologies.typescript',
		icon: typescript,
	},
	{
		name: 'technologies.reactjs',
		icon: reactjs,
	},
	{
		name: 'technologies.redux',
		icon: redux,
	},
	{
		name: 'technologies.tailwindcss',
		icon: tailwind,
	},
	{
		name: 'technologies.nodejs',
		icon: nodejs,
	},
	{
		name: 'technologies.git',
		icon: git,
	},
	{
		name: 'technologies.docker',
		icon: docker,
	},
	{
		name: 'technologies.figma',
		icon: figma,
	},
]

const experiences = [
	{
		title: 'FullStack Developer',
		company_name: 'Synergy',
		icon: web,
		iconBg: '#383E56',
		date: 'experiences.synergy.date',
		points: [
			'experiences.synergy.points.0',
			'experiences.synergy.points.1',
			'experiences.synergy.points.2',
		],
	},
	{
		title: 'FullStack Developer',
		company_name: 'Realeasy',
		icon: backend,
		iconBg: '#383E56',
		date: 'experiences.realeasy.date',
		points: [
			'experiences.realeasy.points.0',
			'experiences.realeasy.points.1',
			'experiences.realeasy.points.2',
			'experiences.realeasy.points.3',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Apusher',
		icon: web,
		iconBg: '#E6DEDD',
		date: 'experiences.apusher.date',
		points: [
			'experiences.apusher.points.0',
			'experiences.apusher.points.1',
			'experiences.apusher.points.2',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'Web Studio',
		icon: web,
		iconBg: '#383E56',
		date: 'experiences.webStudio.date',
		points: [
			'experiences.webStudio.points.0',
			'experiences.webStudio.points.1',
			'experiences.webStudio.points.2',
		],
	},
]

const testimonials = [
	{
		testimonial: 'testimonials.andreyK.testimonial',
		name: 'Andrey K.',
		designation: 'CTO',
		company: 'Realeasy',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
	},
	{
		testimonial: 'testimonials.olgaV.testimonial',
		name: 'Olga V.',
		designation: 'Product Manager',
		company: 'Apusher',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
	},
	{
		testimonial: 'testimonials.ivanS.testimonial',
		name: 'Ivan S.',
		designation: 'CEO',
		company: 'Web Studio',
		image: 'https://randomuser.me/api/portraits/men/3.jpg',
	},
]

const projects = [
	{
		name: 'projects.cloudStorage.name',
		description: 'projects.cloudStorage.description',
		tags: [
			{
				name: 'projects.cloudStorage.tags.0',
				color: 'blue-text-gradient',
			},
			{
				name: 'projects.cloudStorage.tags.1',
				color: 'green-text-gradient',
			},
			{
				name: 'projects.cloudStorage.tags.2',
				color: 'red-text-gradient',
			},
			{
				name: 'projects.cloudStorage.tags.3',
				color: 'orange-text-gradient',
			},
		],
		image: cloud,
		source_code_link: 'https://github.com/safron64/cloud-storage-client',
	},
	{
		name: 'projects.friendFinder.name',
		description: 'projects.friendFinder.description',
		tags: [
			{
				name: 'projects.friendFinder.tags.0',
				color: 'orange-text-gradient',
			},
			{
				name: 'projects.friendFinder.tags.1',
				color: 'green-text-gradient',
			},
			{
				name: 'projects.friendFinder.tags.2',
				color: 'pink-text-gradient',
			},
			{
				name: 'projects.friendFinder.tags.3',
				color: 'blue-text-gradient',
			},
		],
		image: ff,
		source_code_link: 'https://github.com/safron64/Dating-fs',
	},
	{
		name: 'projects.tomorrowMe.name',
		description: 'projects.tomorrowMe.description',
		tags: [
			{ name: 'projects.tomorrowMe.tags.0', color: 'blue-text-gradient' },
			{
				name: 'projects.tomorrowMe.tags.1',
				color: 'green-text-gradient',
			},
			{
				name: 'projects.tomorrowMe.tags.2',
				color: 'purple-text-gradient',
			},
			{
				name: 'projects.tomorrowMe.tags.3',
				color: 'orange-text-gradient',
			},
		],
		image: tm,
		source_code_link: 'https://github.com/safron64/TomorrowMe-app',
	},
]

export { services, technologies, experiences, testimonials, projects }
