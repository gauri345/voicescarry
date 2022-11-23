import HttpClient from "@/util/http_client";

export default async function fetchTranslations() {

    try {
        const languagesResponse = await HttpClient.get('language');

        const languages = languagesResponse.data.data;

        const messages = {};

        languages.forEach(language => messages[language.code] = {});

        const response = await HttpClient.get(`translation`);

        const translations = response.data.data;

        translations.forEach(translation => {
                translation.items.forEach(item => {
                    messages[item.lang][translation.key] = item.content
                });
            }
        );
        return messages;

    } catch (error) {
        console.log(error);
    }
}
