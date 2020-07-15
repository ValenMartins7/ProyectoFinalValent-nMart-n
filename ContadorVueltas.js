class TabifitContadorVueltas extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-ContadorVueltas", this);
    }
}

customElements.define("tabifit-ContadorVueltas", TabifitContadorVueltas);