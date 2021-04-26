/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
let simbolo = ["♣", "♥", "♦", "♠"];
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12];
let misCartas = [];
let x = 0;

// BOTÓN DIBUJAR
var btnClick = document.querySelector("#btn1");
btnClick.addEventListener("click", function(e) {
  e.preventDefault();
  btnClick.disabled = true;
  var card = document.querySelector("#card");
  /* CANTIDAD DE CARTAS */
  var input = document.querySelector("#box").value;
  /* CONDICION QUE EVALUE SI MI VARIABLE INPUT ES MAYOR A 0 Y MENOR,IGUAL A 6. SI ESTO ES VERDADERO EJECUTAR BUCLE */
  if (input > 0 && input <= 6) {
    for (let i = 0; i < input; i++) {
      let simboloIndex = Math.floor(Math.random() * simbolo.length);
      let numeroInd = Math.floor(Math.random() * numero.length);
      let numeroRandom = numero[numeroInd];
      let simboloRandom = simbolo[simboloIndex];
      misCartas[i] = [numero[numeroInd], simbolo[simboloIndex]];
      card.appendChild(dibujarCarta(numeroRandom, simboloRandom));
    }
  }
});

// CREAR CARTA
function dibujarCarta(numeroRandom, simboloRandom) {
  let contenedor = document.createElement("div");
  contenedor.classList.add("contenedor1");

  let simb1 = document.createElement("p");
  simb1.classList.add("simb1");
  simb1.innerHTML = simboloRandom;

  let numA = document.createElement("p");
  if (numeroRandom == 1) {
    numeroRandom = "A";
  }
  if (numeroRandom == 11) {
    numeroRandom = "J";
  }
  if (numeroRandom == 12) {
    numeroRandom = "Q";
  }
  if (numeroRandom == 13) {
    numeroRandom = "K";
  }
  numA.classList.add("numeroA");
  numA.innerHTML = numeroRandom;

  let simb2 = document.createElement("p");
  simb2.classList.add("simb2");
  simb2.innerHTML = simboloRandom;

  contenedor.appendChild(simb1);
  contenedor.appendChild(numA);
  contenedor.appendChild(simb2);
  if (simboloRandom === "♦" || simboloRandom === "♥") {
    simb1.style.color = "red";
    simb2.style.color = "red";
  }
  console.log("miArrayOriginal");
  console.log(misCartas);

  return contenedor;
}

// ORDENAR CARTAS
var btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function(e) {
  e.preventDefault();
  let divOrdenadas = document.querySelector("#ordenCard");
  let cartasOrdenadas = [misCartas];
  cartasOrdenadas = bubbleSort(misCartas);
  console.log("Mi array ordenado");
  console.log(cartasOrdenadas);
  for (let i = 0; i < cartasOrdenadas.length; i++) {
    let cartas = dibujarCarta(cartasOrdenadas[i][0], cartasOrdenadas[i][1]);
    divOrdenadas.appendChild(cartas);
  }
});

// ORDEN DE CARTAS CON SELECT
var btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function(e) {
  e.preventDefault();
  let divOrdenadasSelect = document.querySelector("#ordenCard1");
  let cartasOrdenadasSelect = [misCartas];
  cartasOrdenadasSelect = bubbleSort(misCartas);
  console.log("Mi array ordenado");
  console.log(cartasOrdenadasSelect);
  for (let i = 0; i < cartasOrdenadasSelect.length; i++) {
    let cartas = dibujarCarta(
      cartasOrdenadasSelect[i][0],
      cartasOrdenadasSelect[i][1]
    );
    divOrdenadasSelect.appendChild(cartas);
  }
});

//metodo Sort
const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index][0] > arr[index + 1][0]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return arr;
};

const selectSort = arr => {
  let min = 0;
  /* Ordenamos los numeros */
  while (min < arr.length) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min][0] > arr[i][0]) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
  }
  return arr;
};
