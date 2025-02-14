export default class Cl_CasadeCambio {
    constructor() {
        this.acumTotal = 0;
        this.auxMayor = 0;
        this.auxPelicula = "";
        this.montoAladino = 0;
        this.montoThor = 0;
        this.montoDracula = 0;
    }

    procesarCinefilo(c) {
        // Acumular el monto total cobrado
        this.acumTotal += c.montoTotal();

        // Acumular el monto por película
        if (c.nombrePeli === "Aladino") {
            this.montoAladino += c.montoTotal();
        } else if (c.nombrePeli === "Thor") {
            this.montoThor += c.montoTotal();
        } else if (c.nombrePeli === "Drácula") {
            this.montoDracula += c.montoTotal();
        }

        // Determinar la película que más recaudó
        if (this.montoAladino > this.auxMayor) {
            this.auxMayor = this.montoAladino;
            this.auxPelicula = "Aladino";
        }
        if (this.montoThor > this.auxMayor) {
            this.auxMayor = this.montoThor;
            this.auxPelicula = "Thor";
        }
        if (this.montoDracula > this.auxMayor) {
            this.auxMayor = this.montoDracula;
            this.auxPelicula = "Drácula";
        }
    }

    peliculaMayor() {
        return this.auxPelicula;
    }
}