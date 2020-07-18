class TabifitSelectorSeries extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-selectorseries", this);
    }
}

customElements.define("tabifit-selectorseries", TabifitSelectorSeries);