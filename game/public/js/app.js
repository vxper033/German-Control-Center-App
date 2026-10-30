/* ------------------------------------------------------
------------------------ Buttons ------------------------ 
---------------------------------------------------------*/
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

//leaflet
var map = L.map('leafmap').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.locate({ setView: true, maxZoom: 14 });
map.on('click', function(e) {        
        var popLocation= e.latlng;
        var marker = L.marker(popLocation).addTo(map)
    });

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