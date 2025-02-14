document.addEventListener("DOMContentLoaded", function() {
    const passwordOverlay = document.getElementById("password-overlay");
    const mainContent = document.getElementById("main-content");
    const passwordInput = document.getElementById("password-input");
    const submitPassword = document.getElementById("submit-password");
    const errorMessage = document.getElementById("error-message");

    const correctPassword = "brat"; // Change this to your desired password

    submitPassword.addEventListener("click", function() {
        if (passwordInput.value === correctPassword) {
            passwordOverlay.style.display = "none"; // Hide password overlay
            mainContent.style.display = "block"; // Show main content
        } else {
            errorMessage.style.display = "block"; // Show error message
        }
    });

    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            submitPassword.click();
        }
    });
});

// Pickup lines array
const pickupLines = [
    "Are you French? Because Eiffel for you.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Do you believe in love at first sight? Or should I walk by again… and again… until you notice how much I adore you?",
    "If you were a vegetable, you'd be a cute-cumber!",
    "You must be a magician? Because whenever I look at you, everyone else disappears.",
    "Are you a personal trainer? Because every time I see your biceps, my heart lifts a little more.",
    "Are you an artist? Because you just drew me in.",
    "Can you lend me a kiss? I promise I'll give it back.",
    "You must be made of copper and tellurium because you're Cu-Te!"
];

// Get section elements
const emailSection = document.getElementById("email-section");
const profileSection = document.getElementById("profile-section");
const homeSection = document.getElementById("s-section");
const pickupText = document.getElementById("pickup-line");

emailSection.style.display = "none";
profileSection.style.display = "none";
homeSection.style.display = "none";

//hide all sections
function hideAllSections() {
    emailSection.style.display = "none";
    profileSection.style.display = "none";
    homeSection.style.display = "none";
}

// Profile Button - Show Random Pickup Line & Hide Others
document.getElementById("profile-btn").addEventListener("click", function() {
    hideAllSections();
    profileSection.style.display = "block"; // Show profile section
    let randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    pickupText.textContent = randomLine;
});

// Email Button - Show Love Letter & Hide Others
document.getElementById("email-btn").addEventListener("click", function() {
    hideAllSections();
    emailSection.style.display = "block"; // Show email section
});

// Home Button - Show Welcome Section & Hide Others
document.getElementById("s-btn").addEventListener("click", function() {
    hideAllSections();
    homeSection.style.display = "block"; // Show home section
});
