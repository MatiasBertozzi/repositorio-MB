let queryString= location.search
let queryStringObj= new URLSearchParams(queryString)
let info=queryStringObj.get ("query")
let id=queryStringObj.get ("id")
let numero=queryStringObj.get("numero")
console.log(info)
console.log(id)
console.log(numero)

let i=numero


fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&api_key=d9e8474e58809c37dad25bc3341da3e5&query=${info}`)
 .then(function(response){
    return response.json()
 })

 .then(function(data){
   if(data.results[i].name){
         nombre=data.results[i].name
   }else{  nombre=data.results[i].title}

    console.log(data)
         document.querySelector(".detalle-pelicula1").innerHTML+=
         `<div class="peliculas-item">
            <div class="media-container">
             <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].name}"/>
             
            </div> 
          <h1> Nombre:${nombre}</h1>
          <p> Calificacion: ${data.results[i].vote_average}<p>
          <p> Fecha de estreno: ${data.results[i].first_air_date}<p>
          <p> Sinopsis: ${data.results[i].overview}<p>
         </div>
         
         
         `
 })

.catch(function(error){
   console.log(error)
})





