class TabifitContadorCorto extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-ContadorCorto", this);
    }
}

customElements.define("tabifit-ContadorCorto", TabifitContadorCorto);