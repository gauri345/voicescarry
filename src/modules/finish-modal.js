import HttpClient from "@/util/http_client";
import LocalStorage from "@/util/local_storage";

export default {
    actions: {
        async storeSurvey() {
            const answers = LocalStorage.get("answer")
                .map(storedQuestion => {
                return {
                    questionId: storedQuestion.questionId,
                    questionNumber: storedQuestion.questionNumber,
                    answerValue: storedQuestion.answerValue,
                    answerText: storedQuestion.answerText,
                    factoryCode: storedQuestion.survey.factoryCode,
                    surveyCode: storedQuestion.survey.surveyCode
                };
            });

            try {
                await HttpClient.post('answer/storeBulk', answers);
            } catch (error) {
                console.log(error);
            }
        }
    }
}