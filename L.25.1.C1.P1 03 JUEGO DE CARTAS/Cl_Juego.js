export default class Cl_Juego{
    constructor(){
        this.auxMayor=0;
        this.cntJugadoresmenos10=0;
        this.auxNombre="";
        this.cntJugadores=0;
    }
    procesarJugador(j){
        // ganador
        if(j.puntajeFinal()>this.auxMayor){
            this.auxMayor=j.puntajeFinal();
            this.auxNombre=j.nombre;
    }

    //Jugadores con menos de 10 puntos
    if(j.puntajeFinal()<10){
        this.cntJugadoresmenos10++;
    }
    // contador de jugadores
    this.cntJugadores++;
}
Ganador(){
    return this.auxNombre;
}
porcMenos10(){
    return (this.cntJugadoresmenos10*100)/this.cntJugadores;
}
}