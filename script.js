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

    const contenedor = document.querySelector('main section div#auto');
    const boton = document.getElementById('boton');

    // Declaring variable to validate that index doesn't repeat with each click.
    let previous = -1;

    boton.addEventListener('click', () => {

        // Reducing the size of the button when clicked.
        boton.style.transform = 'scale(0.9)';

        // Restoring the size of the button after a very small delay.
        setTimeout(() => {
            boton.style.transform = 'scale(1)';
        }, 200)

        // Clearing previous image.
        contenedor.innerHTML = '';

        let index;

        do {
            // Obtaining a random number between 0 and the length of the list without decimals.
            index = Math.floor(Math.random() * autos.length);
        } while (index === previous); // This do while loop avoids getting the same previous index value.

        // Storing the new index in "previous" variable.
        previous = index;

        const imagen = document.createElement('img');
        imagen.setAttribute('src', autos[index]);
        // imagen.setAttribute('alt', 'automóvil');
        contenedor.appendChild(imagen);

    });
});