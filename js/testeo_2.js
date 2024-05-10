const imagenes = [
    {
        numero: 0,
        valor: 5,
        imagen: 'imagen0.jpeg'
    },
    {
        numero: 1,
        valor: 10,
        imagen: 'imagen1.jpeg'
    },
    {
        numero: 2,
        valor: 20,
        imagen: 'imagen2.jpeg'
    },
    {
        numero: 3,
        valor: 30,
        imagen: 'imagen3.jpeg'
    },
    {
        numero: 4,
        valor: 40,
        imagen: 'imagen4.jpeg'
    },
    {
        numero: 5,
        valor: 50,
        imagen: 'imagen5.jpeg'
    },
    {
        numero: 6,
        valor: 60,
        imagen: 'imagen6.jpeg'
    }
];

// Vectores con los números que representan las imágenes para cada columna
const ordenImagenes = [
    [0, 1, 2, 3, 4, 5, 6, 0, 1, 2],
    [6, 5, 4, 3, 2, 1, 0, 6, 5, 4],
    [2, 3, 4, 5, 6, 0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6, 0, 1, 2, 3],
    [5, 4, 3, 2, 1, 0, 6, 5, 4, 3]
];

let columnas = document.querySelectorAll(".columna");

// Función para agregar los divs a una columna según un orden de imágenes dado
function agregarDivs(columna, ordenImagenesColumna) {
    // Calcular la cantidad de divs que se deben agregar
    let divsToAdd = 13 - columna.querySelectorAll(".cuadrado").length;

    // Agregar divs adicionales si es necesario
    for (let i = 0; i < divsToAdd; i++) {
        let imageIndex = ordenImagenesColumna[i % ordenImagenesColumna.length]; // Obtener el número que representa la imagen
        let imagenObj = imagenes.find(obj => obj.numero === imageIndex); // Buscar el objeto de imagen correspondiente
        columna.innerHTML += `<div class="cuadrado"><img src="${imagenObj.imagen}" alt="Descripción de la imagen"></div>`;
    }
}

// Iterar sobre cada columna y agregar los divs correspondientes
columnas.forEach((columna, index) => {
    agregarDivs(columna, ordenImagenes[index]);
});
