class TabifitBoton extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-boton", this);
    }
}

customElements.define("tabifit-boton", TabifitBoton);