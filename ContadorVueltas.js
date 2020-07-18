class TabifitContadorVueltas extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-contadorvueltas", this);
    }
}

customElements.define("tabifit-contadorvueltas", TabifitContadorVueltas);