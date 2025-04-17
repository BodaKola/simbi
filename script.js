window.addEventListener("load", () => {
  
let selectedLang = 'english';

const SimbiTopics = {
  english: {
    unemployment: "That’s a heavy space to be in... You’ve been fighting a silent battle for months.",
    nysc: "That 'now what?' is something many people experience after NYSC. You’re not behind. You’re in transition.",
    school: "Final year pressure can feel overwhelming. You’re doing your best — let’s find space to breathe.",
    drugs: "You’re not broken. You’re human, and healing is possible. Let’s walk through this together.",
    social: "Social media often hides the struggle. You’re valid even when you’re offline and unseen.",
    abuse: "You were a child. It wasn’t your fault. You’re not broken — you’re surviving. Peace is possible.",
    family: "Firstborn pressure is real. You’re carrying a lot. Let’s work on boundaries and healing.",
    stigma: "Seeking help is not madness — it’s strength. You deserve support without shame.",
    access: "Even if formal services are limited, support can still exist. You’re not alone.",
    religion: "Faith and therapy can co-exist. Seeking psychological help is courage, not betrayal.",
    default: "Simbi is here for you. You’re not alone. Tell me how you are feeling. I’m here to support you without judgment."
  },
  yoruba: {
    unemployment: "Ó nira gan-an... O ti n dojú kọ́ ogun aláìlárin pẹ́. Mi ò ní fi ẹ̀ sílẹ̀.",
    nysc: "Ìparí NYSC lè dà bí ẹni pé kò sí ònà síwájú, ṣùgbọ́n ìrìnàjò rẹ̀ ń bẹ lọ́nà.",
    default: "O ṣeun pé o pín èyí. Simbi wà pẹ̀lú rẹ. Ó dájú pé ìrànlọ́wọ́ wà."
  },
  pidgin: {
    unemployment: "Na serious mata be dis... You don dey waka dis road alone, but I dey here for you.",
    nysc: "After NYSC e fit be like say nothing dey happen, but your journey still dey go.",
    default: "Thanks say you yarn. You no dey alone. Simbi dey with you gidigba."
  }
};

function getResponse(msg) {
  const langSet = SimbiTopics[selectedLang] || SimbiTopics.english;
  for (let key in langSet) {
    if (msg.includes(key)) return langSet[key];
  }
  return langSet.default;
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.toLowerCase().trim();
  if (!message) return;

  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  const response = getResponse(message);
  setTimeout(() => {
    chatBox.innerHTML += `<div><strong>Simbi:</strong> ${response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  input.value = "";
}

document.getElementById("chat-icon").onclick = () =>
  document.getElementById("chat-widget").style.display = "flex";
// document.getElementById("open-chat-btn").onclick = () =>
//   document.getElementById("chat-widget").style.display = "flex";
document.getElementById("open-chat-hero").onclick = () =>
  document.getElementById("chat-widget").style.display = "flex";
document.querySelector(".close").onclick = () =>
  document.getElementById("chat-widget").style.display = "none";
document.getElementById("language-select").onchange = (e) => {
  selectedLang = e.target.value;
};

});