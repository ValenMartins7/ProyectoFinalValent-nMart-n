class TabifitPantallaAnterior extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-PantallaAnterior", this);
    }
}

customElements.define("tabifit-PantallaAnterior", TabifitPantallaAnterior);