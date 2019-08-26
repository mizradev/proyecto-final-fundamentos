// document ready minificado de Jquery
$( () => {

    // endpoint para obtener categorias
    const _APIURLDIRECTORIES = "http://fundamentos.academlo.com/api/v1/directories/"
    const keyCategorie = "5c82982e-b63e-4280-8287-4eba0e99716a" 

    const getCategoriesData = async () => {
        // peticion ajax minificada con fetch y async/await
        let res = await fetch(`${_APIURLDIRECTORIES}${keyCategorie}/categories`);
        let data = await res.json();
        // peticion ajax normal con fetch
        //fetch(`${_APIURL}${keyCategorie}/categories`)
        //    .then( res => { return res.json() })
        //    .then( data => console.log(data) )
        //    .catch(err => console.log(err))
        
        // se guarda el ID de la categoria para obtener products
        let idCategorie = data.uuid;
        // array de categorias
        let categories = data.categories; 
        
        // recorre el array de objetos y los pinta en HTML
        categories.forEach( (element,index) => {
            addCategoriesHTML('#categorias', element, index);
        });

        // Descomentar console.log(data); para ver el resultado de la peticion AJAX
        console.log(data);

    }

    // funcion que dibuja cada elemento en el HTML
    // recibe 3 parametros
    //      elePadre => elemento HTML donde se agregaran las categorias
    //      categoria => cada categoria del array de categorias.
    //      index => pocision del elemento por cada iteración del foreach
    const addCategoriesHTML = (elePadre, categoria, index) => {
        $(`${elePadre}`).append(`
        <div class="col-md-3 col-sm-12 mb-3">
            <div class="card text-white cardCategory">
                <img src="./static/img/0${index}.jpg" class="card-img" alt="...">
                <div class="overlay"></div>
                <div class="card-content">
                    <span class="iconCategory material-icons">flash_on</span>
                    <h3 class="card-title">${categoria.name}</h3>
                    <p class="">${categoria.id} listings</p>
                </div>
            </div>
        </div>
        `);
    } 

    // obtiene todos los productos por el id categorie
    const getProductsByCategorie = async (idCategorie) => {
        let _APIURLCATEGORIES = `http://fundamentos.academlo.com/api/v1/categories/${idCategorie}/products`;
        let response = await fetch(_APIURLCATEGORIES);
        let data = await response.json();
        console.log(data.products);
        
    }

    // funcion principal 
    getCategoriesData();

    // prueba
    getProductsByCategorie('f5cff243-9ae0-48da-899f-6ca95cc6a200');
});