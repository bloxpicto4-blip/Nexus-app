const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "dark") document.body.classList.add("dark");
toggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  toggle.textContent = dark ? "☀" : "☾";
});

// اربط هنا رابط الـAPK لاحقًا:
// document.getElementById("downloadBtn").href = "app.apk";
document.getElementById("downloadBtn").addEventListener("click", (e) => {
  if (e.currentTarget.getAttribute("href") === "#") {
    e.preventDefault();
    alert("أضف رابط ملف APK داخل script.js عندما يكون الملف جاهزًا.");
  }
});
