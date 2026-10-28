// Nav Buttons
const MapBtn = document.getElementById("NavMapBtn")
const BuildingsBtn = document.getElementById("Nav")
const CalloutsBtn = document.getElementById("NavCalloutsBtn")
const tabs = document.getElementsByClassName("tab")
MapBtn.addEventListener("click", () => {
    for (const i in tabs) {
        tabs[i].hidden = true
    }
})