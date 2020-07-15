class TabifitEjercicioActual extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-EjercicioActual", this);
    }
}

customElements.define("tabifit-EjercicioActual", TabifitEjercicioActual);