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
    document.querySelector('.categorie').innerText = data.name;
    document.querySelector('.titulo').innerText = data.products[0].name;
    document.querySelector('.descripcion').innerText = data.products[0].description;
    document.querySelector('.imagen img').src = data.products[0].image;
    document.querySelector('.url').href = data.products[0].url;
}

main();