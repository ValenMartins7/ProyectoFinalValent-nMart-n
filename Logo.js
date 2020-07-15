class TabifitLogo extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-Logo", this);
    }
}

customElements.define("tabifit-Logo", TabifitLogo);