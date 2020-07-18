class TabifitBotonComenzar extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-boton", this);
    }
}

customElements.define("#tabifit-boton", TabifitBotonComenzar);