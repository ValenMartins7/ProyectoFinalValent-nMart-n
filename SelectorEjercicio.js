class TabifitSelectorEjercicio extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-SelectorEjercicio", this);
    }
}

customElements.define("tabifit-SelectorEjercicio", TabifitSelectorEjercicio);