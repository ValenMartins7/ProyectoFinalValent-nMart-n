class TabifitPantallaAnterior extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-pantallaanterior", this);
    }
}

customElements.define("tabifit-pantallaanterior", TabifitPantallaAnterior);