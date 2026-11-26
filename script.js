
const elements = document.querySelectorAll(
    ".section, .menu-card"
);

if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}

// 予約フォーム

const bookingForm = document.getElementById("booking-form");
const dateInput = document.getElementById("date");

const today = new Date();

dateInput.min = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const date = dateInput.value;
    const people = document.getElementById("people").value;
    const course = document.getElementById("course").value;
    const name = document.getElementById("name").value;

    document.getElementById("booking-result").textContent =
        `${name} 様\n\n` +
        `ご希望日：${date}\n` +
        `ご人数：${people}\n` +
        `コース：${course}\n\n` +
        `予約内容を確認しました。\n` +
        `※デモのため予約は送信されていません。`;
});
