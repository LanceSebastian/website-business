const darkModeToggle = document.getElementById("darkModeToggle");

const enableDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkmode", "active");
}

const disableDarkMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkmode", "inactive");
}

darkModeToggle.addEventListener("click", () => {
    const darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});