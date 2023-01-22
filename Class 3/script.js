let searchButton = document.getElementById("searchButton");
let infoContainer = document.getElementById("infoContainer");

searchButton.addEventListener("click", function () {
    $.ajax({
        url: "https://swapi.dev/api/people/1",
        success: function (data) {
            console.log(data);
            infoContainer.innerHTML = `
            <h1 class="yellow">${data.name}</h1>
            <table>
                <tr>
                    <th>Height</th>
                    <th>Birth year</th>
                    <th>Eye color</th>
                    <th>Hair color</th>
                </tr>
                <tr>
                    <td>${data.height}</td>
                    <td>${data.birth_year}</td>
                    <td>${data.eye_color}</td>
                    <td>${data.hair_color}</td>
                </tr>
            </table>
            `
        },
        error: function () {
            alert('Error');
        }
    })
})