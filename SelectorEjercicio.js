class TabifitSelectorEjercicio extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-selectorejercicio", this);
    }
}

customElements.define("tabifit-selectorejercicio", TabifitSelectorEjercicio);