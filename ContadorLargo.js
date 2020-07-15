class TabifitContadorLargo extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-ContadorLargo", this);
    }
}

customElements.define("tabifit-ContadorLargo", TabifitContadorLargo);