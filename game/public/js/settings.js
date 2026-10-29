// DarkMode
const DarkmodeCheck = document.getElementById("DarkModeCheck")
const DarkmodeText = document.getElementById("DarkModeText")

DarkmodeCheck.addEventListener("click", () => {
    if (DarkmodeCheck.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
})