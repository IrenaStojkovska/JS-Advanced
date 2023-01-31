let getPlanetsBtn = document.getElementById("getPlanetsBtn");
let tableBody = document.getElementById("tableBody");
let loader = document.getElementById("loader");
let nextBtn = document.getElementById("nextBtn");
let previousBtn = document.getElementById("previousBtn");
let message = document.getElementById("message");
let nextUrl;
let previousUrl;

getPlanetsBtn.addEventListener("click", () => {
    getPlanets("https://swapi.dev/api/planets/?page=1");
    getPlanetsBtn.style.display = "none";
    message.style.display = "none";
})

nextBtn.addEventListener("click", () => {
    getPlanets(nextUrl);
})

previousBtn.addEventListener("click", () => {
    getPlanets(previousUrl);
})

function getPlanets(url) {
    tableBody.innerHTML = "";
    loader.style.display = "block";
    $.ajax({
        url: url,
        success: function (data) {
            togglePageButtons(data);
            data.results.forEach(planet => insertPlanetIntoTable(planet));
        },
        error: function () {
            alert('Something went wrong.');
        },
        complete: function () {
            loader.style.display = "none";
        }
    })
}

function togglePageButtons(data) {
    nextUrl = data.next;
    previousUrl = data.previous;

    nextBtn.style.display = nextUrl === null ? "none" : "block";
    previousBtn.style.display = previousUrl === null ? "none" : "block";
}

function insertPlanetIntoTable(planet) {
    tableBody.innerHTML += `
        <tr>
            <td>${planet.name}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
            <td>${planet.population}</td>
        </tr>
    `;
}