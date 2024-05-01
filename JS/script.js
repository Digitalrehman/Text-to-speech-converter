let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let selects = document.getElementById("selection");
let voices = [];
let speech = new SpeechSynthesisUtterance();
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (choice, i) => (selects.options[i] = new Option(choice.name, i))
  );
};
selects.addEventListener("change",()=>{
    speech.voice = voices[selects.value];
})
button.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});
