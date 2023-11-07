function animacionMenu(x) {
    x.classList.toggle("cambio");
    var div = document.getElementById('oculto');
    var boton = document.querySelector('boton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

document.getElementById('tacos').addEventListener('click', function() {
    document.getElementById('id').style.backgroundImage = 'url("img/tacos.jpeg")';
    });

document.getElementById('tortas').addEventListener('click', function() {
    document.getElementById('id').style.backgroundImage = 'url("img/tortas.jpg")';
    });

document.getElementById('chilaquiles').addEventListener('click', function() {
    document.getElementById('id').style.backgroundImage = 'url("img/chilaquiles.jpeg")';
    });

document.getElementById('tamales').addEventListener('click', function() {
    document.getElementById('id').style.backgroundImage = 'url("img/tamales.jpg")';
    });