let generos

fetch('https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=ba0b591fbb4dcbf21e7a279fceca5d5e' )
.then(function(response){
    return response.json()
})
then