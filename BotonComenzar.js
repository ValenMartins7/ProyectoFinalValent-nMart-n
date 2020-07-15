class TabifitBotonComenzar extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-BotonComenzar", this);
    }
}

customElements.define("#tabifit-BotonComenzar", TabifitBotonComenzar);