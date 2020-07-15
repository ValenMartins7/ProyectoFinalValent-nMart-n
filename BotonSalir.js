class TabifitBotonSalir extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-Salir", this);
    }
}

customElements.define("tabifit-Salir", TabifitBotonSalir);