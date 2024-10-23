import type {i18n as I18n} from 'i18next';
import {default as i18n} from 'i18next';
import {
    I18nContext,
    I18nextProvider,
    initReactI18next,
    useTranslation
} from 'react-i18next';
// import {getLang} from 'src/utils/locale/locale.js';
import ES from '../static-translations/es.json';
import ENG from '../static-translations/en.json';
import IT from '../static-translations/it.json';
import JA from '../static-translations/ja.json';

const resources = {
    ...ENG,
    ...IT,
    ...ES,
    ...JA
};

void i18n.use(initReactI18next).init({
    resources,
    // lng: getLang(),
    lng: 'en',
    fallbackLng: 'en',
    ns: [
        'form',
        'navigation',
        'nav-header',
        'orders',
        'sidebar',
        'order-wizard',
        'transfer-order-wizard',
        'order-lines'
    ],

    // config
    debug: false,
    keySeparator: '.',
    interpolation: {escapeValue: false}
});

export type {I18n};
export {I18nContext, I18nextProvider, i18n, useTranslation};