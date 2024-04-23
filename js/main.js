

const apuesta = 50;
const multiplicador = 7;
const bloques_rodillo = 23;
const credito = 1000;

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
    if (activador != 0) {
        let valor = obtener_valor(num1);
        ganancia = valor * activador;
        console.log("ganancia parcial=", ganancia, "conformado por:", valor + "*" + activador);
    }
    return ganancia;
}


// creo un objeto con todos las imagenes para luego linkearlas
const imagen = [
    {
        numero: 0,
        valor: 5
    },
    {
        numero: 1,
        valor: 10
    },
    {
        numero: 2,
        valor: 20
    },
    {
        numero: 3,
        valor: 30
    },
    {
        numero: 4,
        valor: 40
    },
    {
        numero: 5,
        valor: 50
    },
    {
        numero: 6,
        valor: 60
    },
]


// variables a usar
let ganancia_total = 0;
let tiradas=0;
let saldo=credito;
let contador_total=0;
let contador=0;

alert("Esto es una cuenta DEMO y tiene $"+credito+". \nCada apuesta realizada es de $"+apuesta);


console.log("Saldo inicial:",saldo);

// creo los rodillos
let rodillo_1 = [];
let rodillo_2 = [];
let rodillo_3 = [];
let rodillo_4 = [];
let rodillo_5 = [];

do {
    tiradas = prompt("ingrese la cantidad de tiradas a hacer entre 1 y 50: ");
} while (tiradas<1 || tiradas>50);

while((tiradas>=1 && tiradas<=50) && tiradas != "FIN"  ){
    
    do {
        contador+=1;
        console.log("tirada numero:",contador);
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
     
     
     
         for (let i = -1; i < 2; i++) {
             ganancia_total += chequeo_tirada(rodillo_1[num_1 + i], rodillo_2[num_2 + i], rodillo_3[num_3 + i], rodillo_4[num_4 + i], rodillo_5[num_5 + i], "la fila " + (i + 2));
         }
     
         let forma = "V";
         for (let i = -1; i < 2; i += 2) {
             ganancia_total += chequeo_tirada(rodillo_1[num_1 + i], rodillo_2[num_2], rodillo_3[num_3 - i], rodillo_4[num_4], rodillo_5[num_5 + i], "forma " + forma);
             forma = "^";
         }
     
         forma = "˙˙·˙˙";
         for (let i = -1; i < 2; i += 2) {
             ganancia_total += chequeo_tirada(rodillo_1[num_1 + i], rodillo_2[num_2 + i], rodillo_3[num_3], rodillo_4[num_4 + i], rodillo_5[num_5 + i], "forma " + forma);
             forma = "..·..";
         }
     
         forma = "·˙˙˙·";
         for (let i = -1; i < 2; i += 2) {
             ganancia_total += chequeo_tirada(rodillo_1[num_1], rodillo_2[num_2 + i], rodillo_3[num_3 + i], rodillo_4[num_4 + i], rodillo_5[num_5], "forma " + forma);
             forma = "·...·";
         }
         if(ganancia_total>0){
            console.log("ganancia total:", ganancia_total);
         }
         saldo = saldo-apuesta+ganancia_total;
         console.log("saldo total:", saldo);
         console.log("");
        tiradas-=1;
        
        ganancia_total=0;
    } while (tiradas>0 && saldo>=apuesta);
    
    
    if(saldo<apuesta){
        console.log("Su saldo es menor al valor de la apuesta");
    }
    else{
        console.log("finalizaron las",contador,"tiradas y su saldo final quedo en:",saldo);
    }

    do {
        tiradas = prompt("ingrese la cantidad de tiradas a hacer entre 1 y 50: \nEscribir FIN para finalizar");
        if(((tiradas>=1 && tiradas<=50)||tiradas==="FIN" )){
            contador_total+=contador;
            contador=0;
        }
    } while ( ((tiradas<1 || tiradas>50 || saldo<apuesta) && tiradas!="FIN"));
}

console.log("en un total de",contador_total,"tiradas, el saldo final es de: ",saldo);