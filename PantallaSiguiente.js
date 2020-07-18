class TabifitPantallaSiguiente extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-pantallasiguiente", this);
    }
}

customElements.define("tabifit-pantallasiguiente", TabifitPantallaSiguiente);