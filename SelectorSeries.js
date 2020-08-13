class TabifitSelectorSeries extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-selectorseries", this);
    }
}
customElements.define("tabifit-selectorseries", TabifitSelectorSeries);



function totalseries() {
    const numeroseries = document.querySelector("#camposeries");
    numeroseries.value = cantidadseries;
}

function sumarseries() {
    cantidadseries += 1;
    totalseries();
}

function restarseries() {
     
    cantidadseries -= 1;
    totalseries();
    
}




let cantidadseries = 1;

totalseries();

const aumentarserie = document.querySelector("#BotonSumaSeries");
const reduceserie= document.querySelector("#BotonRestaSeries");

aumentarserie.addEventListener("click", sumarseries);
reduceserie.addEventListener("click", restarseries);















