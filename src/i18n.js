// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/translation.json'
import ruTranslation from './locales/ru/translation.json'

const resources = {
	en: {
		translation: enTranslation,
	},
	ru: {
		translation: ruTranslation,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en', 
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
