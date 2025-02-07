export default class Cl_Salon{
    constructor(){
        this.acumEdad=0;
        this.auxMayor=0;
        this.cntChicas=0;
        this.cntChicasMay=0;
        this.auxNombre="";
        this.cntEstudiantes=0;
    }
    procesarEstudiante(e){
        // Estudiantes
        this.cntEstudiantes++;
        // Estudiante mayor
        if(e.edad>this.auxMayor){
            this.auxMayor=e.edad;
            this.auxNombre=e.nombre;
        }
        // contar chicas 
        if(e.sexo==="F"){
            this.cntChicas++;
        }
        // Chicas Mayores de edad
        if(e.sexo==="F" && e.edad>=18){
            this.cntChicasMay++;
        }
        // Edad promedio
        this.acumEdad+=e.edad;
    }
    edadPromedio(){
        return this.acumEdad/this.cntEstudiantes;}
        mayorEstudiante(){
            return this.auxNombre;
        }
        chicasMayor(){
            return (this.cntChicasMay*100)/this.cntChicas;
        }
    
}