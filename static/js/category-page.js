const main = () => {
    const arrayUrl = window.location.href.split('?');
    const idProduct = arrayUrl[1];
    getProductsByCategorie(idProduct);

}

const getProductsByCategorie = async (idCategorie) => {
    let _APIURLCATEGORIES = `http://fundamentos.academlo.com/api/v1/categories/${idCategorie}/products`;
    let response = await fetch(_APIURLCATEGORIES);
    let data = await response.json();
    console.log(data);
    let products = data.products;
    document.querySelector('.categoryName').innerText = data.name;
    products.forEach( (element,index) => {
        addCategoriesHTML('.categories', element, index, data.uuid);
    });

}

// funcion que agregar las categorias al html
const addCategoriesHTML = (elePadre, categoria, index, idPadre) => {
    $(`${elePadre}`).append(`
    <div class=" box col-12 col-sm-12 col-lg-4 col-lx-4 ">
                    <div class="card-group">
                        <div class="card">
                            
                            <div class="imagen card-img-top">
                                <img src="${categoria.image}" class="img-fluid" alt="Card image cap">
                            </div>
                            
                            <div class="card-body">
                                <h3>${categoria.name}</h3>  
                                <p class="card-text"></p>
                                <a href="product.html?${idPadre}/${index}" class="btn btn-outline-info btn-style-card">Visit info</a>
                            </div>
                        </div>
                    </div>
    </div>
    `);
} 

// inicializa la funcion principal
main();