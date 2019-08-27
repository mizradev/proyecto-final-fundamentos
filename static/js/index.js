
// obtiene la data del endpoint
const getCategoriesData = async () => {
    // endpoint para obtener categorias
    const _APIURLDIRECTORIES = "http://fundamentos.academlo.com/api/v1/directories/"
    const keyCategorie = "5c82982e-b63e-4280-8287-4eba0e99716a" 
    // peticion ajax minificada con fetch y async/await
    let res = await fetch(`${_APIURLDIRECTORIES}${keyCategorie}/categories`);
    let data = await res.json();
    // array de categorias
    let categories = data.categories; 

    for (let index = 1; index <= 4; index++) {
        addCategoriesHTML('.indexCategorie', categories[index], index);
    }
    // Descomentar console.log(data); para ver el resultado de la peticion AJAX
    console.log(data);
}

// funcion que agregar las categorias al html
const addCategoriesHTML = (elePadre, categoria, index) => {
    $(`${elePadre}`).append(`
    <div class="col-md-3 col-sm-12 mb-3">
        <a href="?${categoria.uuid}" target="_blank">
        <div class="card text-white cardCategory">
            <img src="./static/img/0${index}.jpg" class="card-img" alt="...">
            <div class="overlay"></div>
            <div class="card-content">
                <span class="iconCategory material-icons">flash_on</span>
                <h3 class="card-title">${categoria.name}</h3>
                <p class="">${categoria.id} listings</p>
            </div>
        </div>
        </a>
    </div>
    `);
} 

// inicializa la funcion principal
getCategoriesData();