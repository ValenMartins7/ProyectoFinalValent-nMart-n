class Navegacion {
  constructor(pantallaInicial, rutas) {
    this.pantallaActual = pantallaInicial;
    this.rutas = rutas;
    
    const elementoPantalla = document.querySelector("tabifit-pantalla#" + this.pantallaActual);
    elementoPantalla.style.display = "block";
  }

  irAPantalla(pantallaDestino) {
    
    if (this.rutas[this.pantallaActual].includes(pantallaDestino)) {
      
      this.pantallaActual = pantallaDestino;

    
      const pantallas = document.querySelectorAll("tabifit-pantalla");
      
      for (let indice = 0; indice < pantallas.length; indice += 1) {
        pantallas[indice].style.display = "none";
      }

      const elementoPantalla = document.querySelector("tabifit-pantalla#" + this.pantallaActual);
      elementoPantalla.style.display = "block";
    }
  }
}

const navegacion = new Navegacion("bienvenida", {
    bienvenida: ["series"],
    series: ["bienvenida", "vueltas"],
    vueltas: ["series", "selectorejercicio"],
    selectorejercicio: ["vueltas", "preejercicio"],
    preejercicio: ["ejercicio"],
    ejercicio: ["bienvenida"]
  });

  const comenzar = document.querySelector("#botoncomenzar");
  const anterior = document.querySelector("#volver");
  const siguiente = document.querySelector("#siguiente");

  comenzar.addEventListener("click", function () {
    navegacion.irAPantalla("series");
  });
  
  anterior.addEventListener("click", function () {
    navegacion.irAPantalla("bienvenida");
  });
  
  siguiente.addEventListener("click", function () {
    navegacion.irAPantalla("vueltas");
  });

  const aseries = document.querySelector("#aseries")
  const aselector = document.querySelector("#aselector")

  aseries.addEventListener("click", function () {
    navegacion.irAPantalla("series");
  });

  aselector.addEventListener("click", function () {
    navegacion.irAPantalla("selectorejercicio");
  });

  const avueltas = document.querySelector("#avueltas")
  const apre = document.querySelector("#apre")

  avueltas.addEventListener("click", function () {
    navegacion.irAPantalla("vueltas");
  });

  apre.addEventListener("click", function(){
    navegacion.irAPantalla("preejercicio");
  });











class TabifitPantalla extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-pantalla", this);
    }
}

customElements.define("tabifit-pantalla", TabifitPantalla);