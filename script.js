const resultDiv = document.getElementById("result");
const toggleMode = document.getElementById("toggleMode");

const techKeywords = {
  react: "React ⚛️",
  vue: "Vue.js 💚",
  angular: "Angular 🔴",
  node: "Node.js 🟢",
  express: "Express.js 🚂",
  firebase: "Firebase 🔥",
  wordpress: "WordPress 📝",
  next: "Next.js ⏭️",
  python: "Python 🐍",
  django: "Django 🌿",
  php: "PHP 🐘",
  html: "HTML5 🔶",
  css: "CSS3 🎨",
  javascript: "JavaScript ⚡",
  tailwind: "Tailwind CSS 🌬️",
  bootstrap: "Bootstrap 🟪",
  mongodb: "MongoDB 🍃",
  mysql: "MySQL 🐬",
  cloudflare: "Cloudflare 🌐"
};

function analyzeWebsite() {
  const url = document.getElementById("urlInput").value.toLowerCase();
  resultDiv.innerHTML = "";

  if (!url) return alert("Please enter a valid URL.");

  // Simulate detection based on domain keywords
  let found = [];

  for (let key in techKeywords) {
    if (url.includes(key)) {
      found.push(techKeywords[key]);
    }
  }

  // Fallback example if nothing detected
  if (found.length === 0) {
    found = [
      "HTML5 🔶",
      "CSS3 🎨",
      "JavaScript ⚡",
      "Cloudflare 🌐"
    ];
  }

  found.forEach(tech => {
    const div = document.createElement("div");
    div.className = "tech-card";
    div.textContent = tech;
    resultDiv.appendChild(div);
  });
}

// Dark mode toggle
let darkMode = localStorage.getItem("darkMode") === "true";
if (darkMode) document.body.classList.add("dark");

toggleMode.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
};
