let queryString= location.search
let queryStringObj= new URLSearchParams(queryString)
let id=queryStringObj.get ("id")
console.log(id)
let genero=queryStringObj.get ("genero")
let pelicula=queryStringObj.get ("pelicula")
if(pelicula=="1"){
fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=d9e8474e58809c37dad25bc3341da3e5`)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)

for(let i=0;i<data.results.length;i++){
    document.querySelector(".data-group").innerHTML+=`   
    <div class="data-item">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}">
                    <p>${data.results[i].title}</p>
                </div> `
    
}})}
 else{
//series//
fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${id}&api_key=d9e8474e58809c37dad25bc3341da3e5`)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
for(let i=0;i<data.results.length;i++){
    document.querySelector(".movie .data-group").innerHTML+=`
    <div class="data-item">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}">
                    <p>${data.results[i].name}</p>
                </div>`
    
}})}