const profileImage = document.getElementById("profile-image");
const imageModal = document.getElementById("image-modal");
const closeModal = document.getElementById("close-modal");

profileImage.addEventListener("click", function () {
    imageModal.classList.add("active");
});

closeModal.addEventListener("click", function () {
    imageModal.classList.remove("active");
});

imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
        imageModal.classList.remove("active");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        imageModal.classList.remove("active");
    }
});

// ================================
// DARK / LIGHT THEME TOGGLE
// ================================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme","dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme","light");

    }

});
// ================================
// LOAD SAVED THEME
// ================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

} else {

    themeToggle.textContent = "🌙";

}
// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});

// ================================
// CONTACT FORM - FORMSPREE
// ================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            formStatus.textContent = "Message sent successfully! ✓";
            formStatus.className = "success";

            contactForm.reset();

            submitButton.textContent = "Send Message";
            submitButton.disabled = false;

        } else {

            formStatus.textContent = "Something went wrong. Please try again.";
            formStatus.className = "error";

            submitButton.textContent = "Send Message";
            submitButton.disabled = false;
        }

    } catch (error) {

        formStatus.textContent = "Unable to send message. Please try again.";
        formStatus.className = "error";

        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
    }

});
// ================================
// CERTIFICATE VIEW POPUP
// ================================

const certificateModal =
    document.getElementById("certificate-modal");

const certificateModalImage =
    document.getElementById("certificate-modal-image");

const certificateModalTitle =
    document.getElementById("certificate-modal-title");

const closeCertificateModal =
    document.getElementById("close-certificate-modal");

const viewCertificateButtons =
    document.querySelectorAll(".view-certificate-btn");


// Open certificate popup
viewCertificateButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const certificateImage =
            button.getAttribute("data-certificate");

        const certificateTitle =
            button.getAttribute("data-title");

        certificateModalImage.src = certificateImage;

        certificateModalImage.alt = certificateTitle;

        certificateModalTitle.textContent = certificateTitle;

        certificateModal.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});


// Close popup using X button
closeCertificateModal.addEventListener("click", () => {

    certificateModal.classList.remove("active");

    certificateModalImage.src = "";

    document.body.style.overflow = "";

});


// Close popup by clicking outside the certificate
certificateModal.addEventListener("click", (event) => {

    if (event.target === certificateModal) {

        certificateModal.classList.remove("active");

        certificateModalImage.src = "";

        document.body.style.overflow = "";
    }

});


// Close popup using Escape key
document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        certificateModal.classList.contains("active")
    ) {

        certificateModal.classList.remove("active");

        certificateModalImage.src = "";

        document.body.style.overflow = "";
    }

});