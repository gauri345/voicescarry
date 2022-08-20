import HttpClient from "@/util/http_client";
import LocalStorage from "@/util/local_storage";

export default {
    actions: {
        async storeSurvey() {
            const survey = LocalStorage.get('survey');
            const answers = LocalStorage.get("answer")
                .map(storedQuestion => {
                    return {
                        questionId: storedQuestion.questionId,
                        questionNumber: storedQuestion.questionNumber,
                        answerValue: storedQuestion.answerValue ? storedQuestion.answerValue : '',
                        answerText: storedQuestion.answerText ? storedQuestion.answerText : '',
                        factoryCode: storedQuestion.survey.factoryCode,
                        surveyId: survey.surveyId,
                        answerDate: storedQuestion.survey.surveyDate,
                    };
                });

            try {
                const response = await HttpClient.post('answer/storeBulk', answers);
                if ("success" === response.data.status) {
                    LocalStorage.remove('answer');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}