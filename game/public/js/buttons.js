// Nav Buttons
const MapBtn = document.getElementById("NavMapBtn")
const BuildingsBtn = document.getElementById("NavBuildingsBtn")
const CalloutsBtn = document.getElementById("NavCalloutsBtn")
const SettingsBtn = document.getElementById("NavSettingsBtn")
const tabs = document.getElementsByClassName("tab")
MapBtn.addEventListener("click", () => {
    for (const i in tabs) {
        tabs[i].hidden = true
    }
    document.getElementById("Map").hidden = false
})
BuildingsBtn.addEventListener("click", () => {
    for (const i in tabs) {
        tabs[i].hidden = true
    }
    document.getElementById("Buildings").hidden = false
})
CalloutsBtn.addEventListener("click", () => {
    for (const i in tabs) {
        tabs[i].hidden = true
    }
    document.getElementById("Callouts").hidden = false
})
SettingsBtn.addEventListener("click", () => {
    for (const i in tabs) {
        tabs[i].hidden = true
    }
    document.getElementById("Settings").hidden = false
})
//a
const footer = document.querySelector(".footer");

console.log("Footer gefunden:", footer);
console.log(
    "Secondary:",
    getComputedStyle(document.documentElement)
        .getPropertyValue("--secondary")
);
console.log(
    "Footer-Hintergrund:",
    getComputedStyle(footer).backgroundColor
);