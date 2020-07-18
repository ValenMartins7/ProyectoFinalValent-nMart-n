class TabifitEjercicioActual extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-ejercicioactual", this);
    }
}

customElements.define("tabifit-ejercicioactual", TabifitEjercicioActual);