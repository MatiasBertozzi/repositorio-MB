let API_Key = 'd9e8474e58809c37dad25bc3341da3e5'
let InfoPelicula = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`;
let ListaPeliculas = document.querySelector("#ListaPeliculas");
console.log (ListaPeliculas);

fetch(InfoPelicula)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.results);
        for (let index = 0; index < 5; index ++) {
            ListaPeliculas.innerHTML += `
            <div class="data-item">
            <a href="../repositorio-MB/detalle-pelicula1.html?id=${data.results[index].id}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[index].poster_path}" alt="${data.results[index].title}">
                </a>
                <h3>${data.results[index].title}</h3>
                <p>Fecha de estreno: ${data.results[index].release_date}</p>
                </div>`
        }
    })
    .catch(function(errors) {
        console.log(errors);
        return errors;
    });
    
let InfoSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${API_Key}`;
let ListaSeries = document.querySelector("#ListaSeries");
console.log (ListaSeries)

fetch(InfoSeries)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results);
        for (let index = 0; index < 5; index++) {
            ListaSeries.innerHTML += `
                <div class="data-item">
                <a href="../repositorio-MB/detalle-pelicula1.html?id=${data.results[index].id}">
                        <img src="https://image.tmdb.org/t/p/w500${data.results[index].poster_path}" alt="${data.results[index].name}"> 
                    </a>
                    <h3>${data.results[index].name}</h3>
                    <p>Fecha de estreno: ${data.results[index].first_air_date}</p>

                </div>`
            }
    });

let InfoMasValoradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}`;
    let ListaMasValoradas = document.querySelector("#ListaMasValoradas");
    console.log (ListaMasValoradas)
    
    fetch(InfoMasValoradas)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.results);
            for (let index = 0; index < 5; index++) {
                ListaMasValoradas.innerHTML += `
                    <div class="data-item">
                    <a href="../repositorio-MB/detalle-pelicula1.html?id=${data.results[index].id}">
                        <img src="https://image.tmdb.org/t/p/w500${data.results[index].poster_path}" alt="${data.results[index].title}"> 
                    </a>
                        <h3>${data.results[index].title}</h3>
                        <p>Fecha de estreno: ${data.results[index].release_date}</p>
                        
                    </div>`
                }
            })



    .catch(function(errors) {
        console.log(errors);
        return errors;

    });

