class TabifitContadorSeries extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-contadorseries", this);
    }
}

customElements.define("tabifit-contadorseries", TabifitContadorSeries);