class TabifitContadorCorto extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-contadorcorto", this);
    }
}

customElements.define("tabifit-contadorcorto", TabifitContadorCorto);