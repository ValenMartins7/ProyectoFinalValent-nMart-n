class TabifitContadorSeries extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-ContadorSeries", this);
    }
}

customElements.define("tabifit-ContadorSeries", TabifitContadorSeries);