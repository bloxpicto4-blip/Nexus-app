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
// Dark Mode
// ========================================

const savedTheme = localStorage.getItem("nexus-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateThemeIcon(true);
} else {
    updateThemeIcon(false);
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {

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
// تحميل ملف APK
// ========================================

// مهم:
// يجب أن يكون NEXUS-PLAN.apk بجانب index.html

const APK_URL = "NEXUS-PLAN.apk";

if (downloadBtn) {

    // رابط ملف APK
    downloadBtn.href = APK_URL;

    // اسم الملف عند التحميل
    downloadBtn.download = "NEXUS-PLAN.apk";

}


// ========================================
// التحقق من زر التحميل
// ========================================

if (downloadBtn) {

    downloadBtn.addEventListener("click", function () {

        console.log("Downloading NEXUS PLAN APK...");

    });

}


// ========================================
// Smooth Scroll
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const href = this.getAttribute("href");

        // تجاهل الرابط الفارغ
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
// تشغيل الموقع
// ========================================

console.log("NEXUS PLAN loaded successfully.");
console.log("Developed by Abdelrhman.");
console.log("APK: " + APK_URL);
