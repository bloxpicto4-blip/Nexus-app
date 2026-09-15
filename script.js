// ========================================
// NEXUS PLAN - Main JavaScript
// Developed by Abdelrhman
// ========================================

const themeToggle = document.getElementById("themeToggle");
const downloadBtn = document.getElementById("downloadBtn");


// ========================================
// اسم التطبيق
// ========================================

document.title = "NEXUS PLAN — تحميل";


// ========================================
// الوضع الداكن / الفاتح
// ========================================

const savedTheme = localStorage.getItem("nexus-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateThemeIcon(true);
} else {
    updateThemeIcon(false);
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        localStorage.setItem(
            "nexus-theme",
            isDark ? "dark" : "light"
        );

        updateThemeIcon(isDark);
    });
}

function updateThemeIcon(isDark) {

    if (!themeToggle) return;

    themeToggle.textContent = isDark ? "☀" : "☾";

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "تفعيل الوضع الفاتح"
            : "تفعيل الوضع الداكن"
    );
}


// ========================================
// رابط تحميل APK
// ========================================

// اسم الملف الحقيقي الموجود في GitHub
const APK_URL = "NEXUS%20PLAN.apk";

if (downloadBtn) {

    downloadBtn.href = APK_URL;

    downloadBtn.setAttribute(
        "download",
        "NEXUS PLAN.apk"
    );

}


// ========================================
// زر التحميل
// ========================================

if (downloadBtn) {

    downloadBtn.addEventListener("click", function () {

        console.log("NEXUS PLAN APK download started.");

    });

}


// ========================================
// Smooth Scroll
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const href = this.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        const target = document.querySelector(href);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// رسالة في Console
// ========================================

console.log("NEXUS PLAN loaded successfully.");
console.log("Developed by Abdelrhman.");
console.log("APK file: NEXUS PLAN.apk");
