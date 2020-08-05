class TabifitTitulo extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-ptitulo", this);
    }
}

customElements.define("tabifit-titulo", TabifitTitulo);