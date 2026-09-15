// ========================================
// NEXUS PLAN - Main JavaScript
// Developed by Abdelrhman
// ========================================

const themeToggle = document.getElementById("themeToggle");
const downloadBtn = document.getElementById("downloadBtn");

// -------------------------------
// اسم التطبيق
// -------------------------------
document.title = "NEXUS PLAN — تحميل";


// -------------------------------
// Dark Mode
// -------------------------------

const savedTheme = localStorage.getItem("nexus-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateThemeIcon(true);
} else {
    updateThemeIcon(false);
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(
        "nexus-theme",
        isDark ? "dark" : "light"
    );

    updateThemeIcon(isDark);
});

function updateThemeIcon(isDark) {
    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"
    );
}


// -------------------------------
// رابط تحميل APK
// -------------------------------

// لو ملف APK موجود بجانب index.html
const APK_URL = "NEXUS-PLAN.apk";

downloadBtn.setAttribute("href", APK_URL);
downloadBtn.setAttribute("download", "");


// -------------------------------
// رسالة احتياطية عند عدم وجود الرابط
// -------------------------------

downloadBtn.addEventListener("click", (event) => {

    const href = downloadBtn.getAttribute("href");

    if (!href || href === "#") {
        event.preventDefault();

        alert(
            "ملف NEXUS PLAN APK غير مرتبط حاليًا."
        );
    }

});


// -------------------------------
// Smooth Scroll
// -------------------------------

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// -------------------------------
// Console
// -------------------------------

console.log("NEXUS PLAN loaded successfully.");
console.log("Developed by Abdelrhman.");
