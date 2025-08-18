import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: { translation: { "hero_title": "Banner of Nations", "get_started":"Get started" } },
  tr: { translation: { "hero_title": "Banner of Nations", "get_started":"Başla" } }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})
export default i18n

