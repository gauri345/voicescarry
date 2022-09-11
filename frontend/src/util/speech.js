export function textReader (inputTxt) {
    const synth = window.speechSynthesis;

    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (inputTxt.value !== '') {
        const utterThis = new SpeechSynthesisUtterance(inputTxt);
        utterThis.onend = function () {
            console.log('SpeechSynthesisUtterance.onend');
        }
        utterThis.onerror = function () {
            console.error('SpeechSynthesisUtterance.onerror');
        }
        utterThis.pitch = 0.9;
        utterThis.rate = 1;
        utterThis.lang = 'en-US';
        synth.speak(utterThis);
    }
}
