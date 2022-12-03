import data from './articulos.json' assert { type: 'json' };

const sectionCards = document.getElementById("sectionCards");

const cards = data => {
    const prodCategorias = [];
    data.forEach(producto => {
        const { category, img } = producto;
        if (!prodCategorias.some(prod => prod.category === category)) {
            prodCategorias.push(producto);
            sectionCards.innerHTML += `
                <div class="col">
                    <a href="../HTML/productos.html">
                        <div class="card">
                            <img src="${img}" class="card-img-top img-fluid">
                            <div class="card-body border-top">
                                <h5 class="card-title">${category}</h5>
                            </div>
                        </div>
                    </a>
                </div>`
        }
    })
}

function listenerCards() {
    document.querySelectorAll('.card').forEach(item => {
        item.addEventListener('click', event => {
            const category=item.children[1].children[0].textContent;
            localStorage.setItem("category", category);
        })
    })
}
function listenerNavbar() {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', event => {
            localStorage.setItem("category", item.textContent);
            console.log(localStorage.getItem("category"));
        })
    })
}

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', () => {
    cards(data);
    listenerCards();
    listenerNavbar();
});