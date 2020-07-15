class TabifitBotonRepetir extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-BotonRepetir", this);
    }
}

customElements.define("tabifit-BotonRepetir", TabifitBotonRepetir);