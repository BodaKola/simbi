let selectedLang = 'english';
let SimbiTopics = {};

fetch('braveHeartChat.json')
  .then(res => res.json())
  .then(data => {
    SimbiTopics = {};
    data.forEach(entry => {
      entry.keywords.forEach(keyword => {
        SimbiTopics[keyword.toLowerCase()] = entry.responses;
      });
    });
    SimbiTopics["__default__"] = data.find(e => e.topic === "default")?.responses;
  });


  function getResponse(msg) {
    msg = msg.toLowerCase();
    for (let keyword in SimbiTopics) {
      if (msg.includes(keyword)) {
        const res = SimbiTopics[keyword];
        return res?.[selectedLang] || res?.english;
      }
    }
    return SimbiTopics["__default__"]?.[selectedLang] || "I'm here for you.";
  }
  

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.toLowerCase().trim();
  if (!message) return;

  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  const response = getResponse(message);
  setTimeout(() => {
    chatBox.innerHTML += `<div><strong>BraveHeart AI:</strong> ${response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  input.value = "";
}

document.getElementById("chat-icon").onclick = () =>
  document.getElementById("chat-widget").style.display = "block";
// document.getElementById("open-chat-btn").onclick = () =>
//   document.getElementById("chat-widget").classList.remove("hidden");
document.getElementById("open-chat-hero").onclick = () =>
  document.getElementById("chat-widget").style.display = "flex";
document.querySelector(".close").onclick = () =>
  document.getElementById("chat-widget").style.display = "none";
document.getElementById("language-select").onchange = (e) => {
  selectedLang = e.target.value;
};
