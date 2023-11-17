
//peliculas
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e`)
.then(function(response){
    console.log(response)
    return response.json()
})

.then(function(data){
  
    for(let i=0;i< data.genres.length; i++){
    document.querySelector(".data-group").innerHTML+=
    ` <div class="data-item">
            <a href="./detalle-genero.html?id=${data.genres[i].id}&genero=${data.genres[i].name}">
                <h3>${data.genres[i].name}</h3>
            </a>
        </div>`
    }
})
 


//`https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`