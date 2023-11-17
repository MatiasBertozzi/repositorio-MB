//4. Detalles de serie y pelicula
let container = document.querySelector('.Peliculas')
let contador = 1
let boton = document.querySelector('.Peliculas')
button.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}`)
.then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        for (let i =0; i < data.results.length; i++){
            container.innerHTML += `
            <article>
                <img src=${data.results[i].image} />
                <h2>Name:${data.results[i].name}</h2>
                <h2>Rating:${data.results[i].rating}</h2>
                <h2>Estreno:${data.results[i].Estreno}</h2>
                <h2>Duracion:${data.results[i].Duracion}</h2>
                <h2>Sinposis:${data.results[i].Sinposis}</h2>
                <h2>Genero:${data.results[i].Genero}
            </article>`
        }
        contador = contador+1
    })
    .catch(function(error){
        console.log(error)
    })    
})

fetch('https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg')
.then(function(response){
    return response.json()
})

