// You can add interactive features here if needed
// For example, a button to toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Example: Add a button to toggle dark mode
const darkModeButton = document.createElement("button");
darkModeButton.innerText = "Toggle Dark Mode";
darkModeButton.addEventListener("click", toggleDarkMode);
document.body.appendChild(darkModeButton);