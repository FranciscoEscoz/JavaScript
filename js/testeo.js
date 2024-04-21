

const apuesta = 100;
const multiplicador = 7;
const bloques_rodillo = 15;

//el numero 6 representa el scatter que más adelante va a hacer un bonus especial. Sólo puede haber
// 1 escatter por rodillo

// sólo un simbolo escatter por rodillo
function numero_random_condicionado() {
    let numero = parseInt(Math.random() * (multiplicador - 1));
    return numero;
}

function numero_random() {
    let numero = parseInt(Math.random() * multiplicador);
    return numero;
}

// se selecciona una parte del rodillo que va a ser el que se va a visualizar en pantalla (entre el 1 y el 13)
function seccion_rodillo() {
    let numero = parseInt(Math.random() * (bloques_rodillo - 2) + 1);   // quito los extremos
    return numero;
}

function formacion_rodillo(vector) {
    //repetir por cada rodillo
    for (let i = 0; i < bloques_rodillo; i++) {
        if (i >= 3 && (vector[i - 2] === (multiplicador - 1) || vector[i - 1] === (multiplicador - 1))) {
            vector.push(numero_random_condicionado());      //agrego 1-5 (sin posibilidad de 6)
        }
        else {
            vector.push(numero_random());                       //agrego 1-6 (con posibilidad de 6)
        }

        // console.log("vector[" + i + "] =", vector[i]);
    }
}


// Función para obtener el valor asociado cuando hay ganancia
function obtener_valor(num) {
    let resultado = imagen.find((elemento) => elemento.numero === num);
    return resultado.valor;
}


function chequeo_tirada(num1, num2, num3, num4, num5, forma) {
    let ganancia = 0;
    let activador = 0;
    if (num1 === num2 && num1 === num3) {
        if (num1 === num4) {
            if (num1 === num5) {
                console.log("Linea de 5 en", forma);
                activador = 5;
            }
            else {
                console.log("Linea de 4 en", forma);
                activador = 4;
            }
        }
        else {
            console.log("Linea de 3 en", forma);
            activador = 3;
        }
    }
    if(activador!=0){
        ganancia=obtener_valor(num1)*activador;
    }
    return ganancia;
}


// creo un objeto con todos las imagenes para luego linkearlas
const imagen = [
    {
        numero: 0,
        valor: 10
    },
    {
        numero: 1,
        valor: 100
    },
    {
        numero: 2,
        valor: 200
    },
    {
        numero: 3,
        valor: 300
    },
    {
        numero: 4,
        valor: 400
    },
    {
        numero: 5,
        valor: 500
    },
    {
        numero: 6,
        valor: 1000
    },
]




// creo los rodillos
let rodillo_1 = [];
let rodillo_2 = [];
let rodillo_3 = [];
let rodillo_4 = [];
let rodillo_5 = [];

// les doy valores a todas sus posiciones
formacion_rodillo(rodillo_1);
formacion_rodillo(rodillo_2);
formacion_rodillo(rodillo_3);
formacion_rodillo(rodillo_4);
formacion_rodillo(rodillo_5);

// creo variable que va a seleccionar la parte de cada arreglo
let num_1;
let num_2;
let num_3;
let num_4;
let num_5;

// de forma elatoria seleciona parte del rodillo
num_1 = seccion_rodillo();
num_2 = seccion_rodillo();
num_3 = seccion_rodillo();
num_4 = seccion_rodillo();
num_5 = seccion_rodillo();

// es la forma que tengo de poder comprobar el correcto funcionamiento
console.log(rodillo_1[num_1 - 1] + "   " + rodillo_2[num_2 - 1] + "   " + rodillo_3[num_3 - 1] + "   " + rodillo_4[num_4 - 1] + "   " + rodillo_5[num_5 - 1]);
console.log(rodillo_1[num_1] + "   " + rodillo_2[num_2] + "   " + rodillo_3[num_3] + "   " + rodillo_4[num_4] + "   " + rodillo_5[num_5]);
console.log(rodillo_1[num_1 + 1] + "   " + rodillo_2[num_2 + 1] + "   " + rodillo_3[num_3 + 1] + "   " + rodillo_4[num_4 + 1] + "   " + rodillo_5[num_5 + 1]);







// ejemplo con el valor del medio del 1er rodillo
let valorCorrespondiente = obtener_valor(rodillo_1[num_1]);
console.log("El valor asociado al número", rodillo_1[num_1], "es:", valorCorrespondiente);





// Obtener el primer elemento con la clase 'titulo'
// let titulo = document.getElementsByClassName('bloque_1')[0];

// Modificar el texto del elemento
// titulo.innerText = 'H';