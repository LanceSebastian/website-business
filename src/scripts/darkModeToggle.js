const darkModeToggle = document.getElementById("darkModeToggle");

const enableDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem("darkmode", "active");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("darkmode", "inactive");
}

darkModeToggle.addEventListener("click", () => {
    const darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});