const main = () => {
    const arrayUrl = window.location.href.split('?');
    const array2 = arrayUrl[1].split('/');
    const idProduct = array2[0], position = array2[1];

    getProductsByCategorie(idProduct, position);

}

const getProductsByCategorie = async (idCategorie, position) => {
    let _APIURLCATEGORIES = `http://fundamentos.academlo.com/api/v1/categories/${idCategorie}/products`;
    let response = await fetch(_APIURLCATEGORIES);
    let data = await response.json();
    console.log(data);
    document.querySelector('.categorie').innerText = data.name;
    document.querySelector('.titulo').innerText = data.products[position].name;
    document.querySelector('.descripcion').innerText = data.products[position].description;
    document.querySelector('.imagen img').src = data.products[position].image;
    document.querySelector('.url').href = data.products[position].url;
    document.querySelector('.goBack').href = `category-page.html?${idCategorie}`;

}

main();