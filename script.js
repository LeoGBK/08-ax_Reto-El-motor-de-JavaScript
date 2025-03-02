document.addEventListener('DOMContentLoaded', () => {
    const autos = [
        "auto1.jpg",
        "auto2.jpg",
        "auto3.jpg",
        "auto4.jpg",
        "auto5.jpg",
        "auto6.jpg",
        "auto7.jpg",
        "auto8.jpg",
        "auto9.jpg",
        "auto10.jpg"
    ];

    const lienzo = document.getElementById('#portrait');
    const contenedor = document.querySelector('main section div#auto');

    autos.forEach(auto => {
        document.addEventListener('click', () => {
            lienzo.style.display = 'none';
            const imagen = document.createElement('img');
            imagen.setAttribute('src', imagen);
            imagen.setAttribute('alt', 'automóvil');
            contenedor.appendChild(imagen);
            // lienzo.style.display = 'block';
        })
    }
});