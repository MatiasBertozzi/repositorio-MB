let API_Key = 'd9e8474e58809c37dad25bc3341da3e5'
let InfoDetalles = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${API_Key}`;
    let ListaDetalles = document.querySelector(".ListaDetalles");
    console.log (ListaDetalles);
   
    fetch(InfoDetalles)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.results);
            for (let index = 0; index < 5; index ++) {
                ListaDetalles.innerHTML += `
                <div class="data-item">
                    <a href="detalle-pelicula${index + 1}.html">
                        <img src="https://image.tmdb.org/t/p/w500${data.results[index].poster_path}" alt="${data.results[index].name}">
                    </a>
                    <h3>${data.results[index].title}</h3>
                    <p>Fecha de estreno: ${data.results[index].first_air_date}</p>
                    </div>`
            }
        })
        .catch(function(errors) {
            console.log(errors);
            return errors;
        });
