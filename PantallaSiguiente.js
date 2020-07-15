class TabifitPantallaSiguiente extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-PantallaSiguiente", this);
    }
}

customElements.define("tabifit-PantallaSiguiente", TabifitPantallaSiguiente);