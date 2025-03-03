document.addEventListener('DOMContentLoaded', () => {
    const autos = [
        "auto01.jpg",
        "auto02.jpg",
        "auto03.jpg",
        "auto04.jpg",
        "auto05.jpg",
        "auto06.jpg",
        "auto07.jpg",
        "auto08.jpg",
        "auto09.jpg",
        "auto10.jpg"
    ];

    const lienzo = document.getElementById('portrait');
    const contenedor = document.querySelector('main section div#auto');


    document.addEventListener('click', () => {
        autos.forEach(auto => {

            // Clearing previous image.
            contenedor.innerHTML = '';

            const imagen = document.createElement('img');
            imagen.setAttribute('src', auto);
            imagen.setAttribute('alt', 'automóvil');
            contenedor.appendChild(imagen);
        });
    });
});