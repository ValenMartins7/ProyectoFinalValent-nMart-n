class TabifitMensaje extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-mensaje", this);
    }
}

customElements.define("tabifit-mensaje", TabifitMensaje);