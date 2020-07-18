class TabifitContadorLargo extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-contadorlargo", this);
    }
}

customElements.define("tabifit-contadorlargo", TabifitContadorLargo);