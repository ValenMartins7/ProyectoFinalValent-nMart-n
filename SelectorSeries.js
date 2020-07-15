class TabifitSelectorSeries extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-SelectorSeries", this);
    }
}

customElements.define("tabifit-SelectorSeries", TabifitSelectorSeries);