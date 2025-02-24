import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
	const { t } = useTranslation()
	const formRef = useRef()
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [loading, setLoading] = useState(false)

	const handleChange = e => {
		const { target } = e
		const { name, value } = target

		setForm({
			...form,
			[name]: value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Nikita',
					from_email: form.email,
					to_email: 'ed.kahr.19063@gmail.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false)
					alert(t('contact.successMessage'))

					setForm({
						name: '',
						email: '',
						message: '',
					})
				},
				error => {
					setLoading(false)
					console.error(error)
					alert(t('contact.errorMessage'))
				}
			)
	}

	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>
					{t('contact.getInTouch')}
				</p>
				<h3 className={styles.sectionHeadText}>{t('contact.title')}</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							{t('contact.nameLabel')}
						</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder={t('contact.namePlaceholder')}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							{t('contact.emailLabel')}
						</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder={t('contact.emailPlaceholder')}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							{t('contact.messageLabel')}
						</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder={t('contact.messagePlaceholder')}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
					>
						{loading ? t('contact.sending') : t('contact.send')}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, 'contact')
