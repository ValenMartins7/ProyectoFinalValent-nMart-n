class TabifitSelectorVueltas extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-selectorvueltas", this);
    }
}

customElements.define("tabifit-selectorvueltas", TabifitSelectorVueltas);