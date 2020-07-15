class TabifitBotonGuardarSesion extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-GuardarSesion", this);
    }
}

customElements.define("tabifit-GuardarSesion", TabifitBotonGuardarSesion);