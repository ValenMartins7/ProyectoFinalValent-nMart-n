class TabifitSelectorVueltas extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-SelectorVueltas", this);
    }
}

customElements.define("tabifit-SelectorVueltas", TabifitSelectorVueltas);