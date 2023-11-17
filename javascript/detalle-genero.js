let queryString= location.search
let queryStringObj= new URLSearchParams(queryString)
let id=queryStringObj.get ("id")
console.log(id)
let genero=queryStringObj.get ("genero")

fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=d9e8474e58809c37dad25bc3341da3e5`)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    document.querySelector("article").innerHTML+=`
    <h1 class="terror">${genero}</h1>`
for(let i=0;i<data.results.length;i++){

    document.querySelector(".data-group").innerHTML+=`
    <div class="data-item">
                    <img src=""https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}">
                    <p>${data.results[i].title}</p>
                </div>`
    
}})

fetch(`https://api.themoviedb.org/3/discover/serie?with_genres=${id}&api_key=d9e8474e58809c37dad25bc3341da3e5`)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
for(let i=0;i<data.results.length;i++){

    document.querySelector(".series.data-group").innerHTML+=`
    <div class="data-item">
                    <img src=""https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}">
                    <p>${data.results[i].title}</p>
                </div>`
    
}})