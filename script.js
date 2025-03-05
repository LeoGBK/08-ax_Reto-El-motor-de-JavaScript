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

    // Selecting specific tag in the HTML file which will be used later to add the image.
    const contenedor = document.querySelector('main section div#auto');
    const boton = document.getElementById('boton');

    // Declaring variable to validate that index doesn't repeat with each click.
    let previous = -1;

    boton.addEventListener('click', () => {

        // Reducing the size of the button when clicked.
        boton.style.transform = 'scale(0.9)';

        // Once the button is clicked, the text inside changes.
        boton.textContent = 'Cambiar Imagen';

        // Restoring the size of the button after a very small delay.
        setTimeout(() => {
            boton.style.transform = 'scale(1)';
        }, 200)

        // Clearing previous image.
        contenedor.innerHTML = '';

        // Declaring variable to use for store the random value of the list index.
        let index;

        do {
            // Obtaining a random number between 0 and the length of the list without decimals.
            index = Math.floor(Math.random() * autos.length);
        } while (index === previous); // This do while loop avoids getting the same previous index value.

        // Storing the new index in "previous" variable.
        previous = index;

        // Creating the img element for the HTML
        const imagen = document.createElement('img');

        // Giving the img element the attribute image so it can be later shown.
        imagen.setAttribute('src', autos[index]);

        // Setting alt attribute to the created image.
        imagen.setAttribute('alt', 'automóvil');

        // Adding and showing the created image on the web page.
        contenedor.appendChild(imagen);

    });
});