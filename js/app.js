$(document).foundation()


// Get all list items
const listItems = document.querySelectorAll('#languageList li');

// Iterate over each list item
listItems.forEach(item => {
    // Get the star icon within the current list item
    const starIcon = item.querySelector('span');

    // Get the number of stars from the class name
    const starCount = parseInt(starIcon.className.split('-')[2]);

    // Set the number of stars
    for (let i = 2; i <= starCount; i++) {
        starIcon.innerHTML += '<i class="fi-star"></i>';
    }
});

// Exibir ou ocultar o botão de volta ao topo dependendo da posição da página
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}
//Função para rolar suavemente para o topo da página
function topFunction() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
}
