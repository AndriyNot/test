import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationUK from './locales/uk/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    uk: {
        translation: translationUK
    }
};

i18n
    .use(initReactI18next) // підключаємо до React
    .init({
        resources,
        lng: 'uk', // мова за замовчуванням
        fallbackLng: 'en', // мова резерву
        interpolation: {
            escapeValue: false // не потрібно для React
        }
    });

export default i18n;