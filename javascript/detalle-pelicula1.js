let queryString= location.search
let queryStringObj= new URLSearchParams(queryString)
let id=queryStringObj.get ("id")
console.log(id)



fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d9e8474e58809c37dad25bc3341da3e5`)
 .then(function(response){
    return response.json()
 })

 .then(function(data){
     console.log(data)
    
      
     
          document.querySelector(".detalle-pelicula1").innerHTML+=
          `<div class="peliculas-item">
             <div class="media-container">
              <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}"/>
             </div> 
           <h1> Nombre:${data.title}</h1>
           <p> Calificacion: ${data.vote_average}</p>
           <p> Fecha de estreno: ${data.release_date}</p>
           <p> Sinopsis: ${data.overview}</p>
           <p> Duracion: ${data.runtime} Minutos</p>
          </div>`
         
 })
.catch(function(error){
   console.log(error)
})