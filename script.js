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

    // const lienzo = document.getElementById('portrait');

    const contenedor = document.querySelector('main section div#auto');
    const boton = document.getElementById('boton');

    // Clearing previous image.
    contenedor.innerHTML = '';

    boton.addEventListener('click', () => {

        const index = Math.floor(Math.random() * 10) // Obtaining a random number between 0 and 9 without decimals.
        const imagen = document.createElement('img');
        imagen.setAttribute('src', autos[index], 'alt', 'automóvil');
        // imagen.setAttribute('alt', 'automóvil');
        // imagen.setAttribute('id', 'auto');
        contenedor.appendChild(imagen);

    });
});