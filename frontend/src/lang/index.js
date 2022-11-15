import HttpClient from "@/util/http_client";

export default async function fetchTranslations() {
    const response = await HttpClient.get(`translation`);

    const translations = response.data.data;

    const languages = translations[0].items.map(item => item.lang);

    const messages = {};

    languages.forEach(language => messages[language] = {});

    translations.forEach(translation => {
            translation.items.forEach(item => messages[item.lang][translation.key] = item.content);
        }
    );
    return messages;
}
