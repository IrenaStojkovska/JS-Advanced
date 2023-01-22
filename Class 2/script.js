let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");
let infoContainer = document.getElementById("infoContainer");

let movies = ["Iron Man", "Hulk", "Thor", "The Avengers", "Captain America", "Guardians of the Galaxy", "Ant-Man", "Doctor Strange", "Spider-Man", "Black Panter", "Captain Marvel"];

searchButton.addEventListener("click", function() {
    let isMovieFound = false;
    for (let movie of movies) {
        if (movie.toLowerCase() === searchInput.value.toLowerCase()) {
            isMovieFound = true;
            break;
        }
    }

    if (isMovieFound) {
        infoContainer.innerHTML = `<h1 class="found">The movie can be rented</h1>`;
    } else {
        infoContainer.innerHTML = `<h1 class="not-found">The movie can't be rented</h1>`;
    }
})