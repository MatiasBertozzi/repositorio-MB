let queryString= location.search 
// location nos permite obtener info de la url y con search almacenamos la query string de una url//
let queryStringObj= new URLSearchParams(queryString)

let info=queryStringObj.get("buscador")
//con get obtenemos el valor de la clave del input del form, en este caso la clave es "buscador"//
console.log(info)

let imagen=document.querySelector(".data-group")
let boton= document.querySelector("#boton")

//ruta de donde quiero sacar la info o end point//
fetch( `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&api_key=d9e8474e58809c37dad25bc3341da3e5&query=${info}`)
 .then(function(response){
    return response.json()
 })

 .then(function(data){
    console.log(data)
    for (let i =0;i < data.results.length; i++){
        imagen.innerHTML +=
        `<div class="data-item">
            <a href="../repositorio-MB/detalle-pelicula1.html?query=${info}&id=${data.results[i].id}&numero=${i}">
                <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}"/>
             </a>
        </div>`
    }
    if (data.results.length === 0){
        document.querySelector(".ResultadosBusqueda").innerHTML= "no hay resultados para su busqueda"
    }
})
// con la etiqueta <a> lo que hacemos es linkear otro archivo, que es donde nos va a llevar y //
//que informacion queremos llevar a ese otro archivo, en este caso el id //
.catch(function(error){
    console.log(error)
})

document.querySelector(".ResultadosBusqueda").innerHTML= `Resultados de Busqueda para: ${info}`



