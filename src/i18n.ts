import i18next from 'i18next';

i18next.use({
    type: 'backend',
    read(language, namespace, callback) {
        import(`./locales/${language}/translation.json`)
            .then((resources) => {
                callback(undefined, resources[namespace]);
            })
            .catch((error) => {
                callback(error);
            });
    },
});

i18next.init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    supportedLngs: [
        'en',
        'cn',
        'ja',
        'de',
        'es',
        'fr',
        'ko',
        'it',
        'nl',
        'pl',
        'vi',
        'ru',
        'pt',
        'tr',
    ],
});
