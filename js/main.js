const apuesta = 100;
const multiplicador = 7;

function numero_random() {
    let numero = parseInt(Math.random() * multiplicador);
    return numero;
}

function chequeo_tirada(num1, num2, num3, num4, num5, forma) {
    let ganancia = 0;
    if (num1 === num2 && num1 === num3) {
        if (num1 === num4) {
            if (num1 === num5) {
                console.log("Linea de 5 en", forma);
                ganancia = 600;
            }
            else {
                console.log("Linea de 4 en", forma);
                ganancia = 500;
            }
        }
        else {
            console.log("Linea de 3 en", forma);
            ganancia = 400;
        }
    }
    return ganancia;
}

function conexiones(ganancia, ganancia_total) {
    if (ganancia === ganancia_total) {
        return 0;
    }
    else
        return 1;
}



let entrada = "a";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;
let num9 = 0;
let num10 = 0;
let num11 = 0;
let num12 = 0;
let num13 = 0;
let num14 = 0;
let num15 = 0;

let cant_conexiones = 0;
let ganancia = 0;
let ganancia_total = ganancia;
let credito = 1000;

alert("Esto es una cuenta DEMO y tiene $" + credito, ".\nCada apuesta realizada es de $100");
// Más adelante hacer un boton con el cual subir o bajar el valor de la apuesta
do {
    entrada = prompt("ingrese cualquier caracter para finalizar: ");
    if (entrada === '') {
        num1 = numero_random();
        num2 = numero_random();
        num3 = numero_random();
        num4 = numero_random();
        num5 = numero_random();
        num6 = numero_random();
        num7 = numero_random();
        num8 = numero_random();
        num9 = numero_random();
        num10 = numero_random();
        num11 = numero_random();
        num12 = numero_random();
        num13 = numero_random();
        num14 = numero_random();
        num15 = numero_random();

        console.log(num1, "    ", num2, "    ", num3, "    ", num4, "    ", num5);
        console.log(num6, "    ", num7, "    ", num8, "    ", num9, "    ", num10);
        console.log(num11, "    ", num12, "    ", num13, "    ", num14, "    ", num15);

        ganancia += chequeo_tirada(num1, num2, num3, num4, num5, "la fila 1");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;

        ganancia += chequeo_tirada(num6, num7, num8, num9, num10, "la fila 2");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;

        ganancia += chequeo_tirada(num11, num12, num13, num14, num15, "la fila 3");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;

        ganancia += chequeo_tirada(num1, num7, num13, num9, num5, "forma V");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;

        ganancia += chequeo_tirada(num11, num7, num3, num9, num15, "forma ^");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;

        ganancia += chequeo_tirada(num1, num2, num8, num4, num5, "forma ˙˙·˙˙");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;

        ganancia += chequeo_tirada(num11, num12, num8, num14, num15, "forma ..·..");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;

        ganancia += chequeo_tirada(num6, num2, num3, num4, num10, "forma ·˙˙˙·");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;

        ganancia += chequeo_tirada(num6, num12, num13, num14, num15, "forma ·...·");
        cant_conexiones += conexiones(ganancia, ganancia_total);
        ganancia_total = ganancia;
        
    }

    if (cant_conexiones === 0) {
        cant_conexiones = 1;
        if (entrada != '') {
            cant_conexiones = 0;
        }
    }

    credito = credito - (cant_conexiones * apuesta) + ganancia;
    ganancia = 0;
    cant_conexiones = 0;
    console.log("Crédito:", credito);
    console.log("");
} while (entrada === '' && credito >= apuesta);