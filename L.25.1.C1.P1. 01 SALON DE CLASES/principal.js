import Cl_Estudiante from "./Cl_Estudiante.js" 
import Cl_Salon from "./Cl_Salon.js"
// OBjetos articulos

let est1=new Cl_Estudiante("Luis",16,"M");
let est2=new Cl_Estudiante("Ana",19,"F");
let est3=new Cl_Estudiante("Jose",20,"M");
let est4=new Cl_Estudiante("Carmen",18,"F");

//Objeto Salon

let sal= new Cl_Salon();

// Procesar los estudiantes

sal.procesarEstudiante(est1);
sal.procesarEstudiante(est2);
sal.procesarEstudiante(est3);
sal.procesarEstudiante(est4);

let salida=document.getElementById("salida");
salida.innerHTML=`
<br> La edad promedio es de ${sal.edadPromedio()} % 
<br> El mayor estudiante es ${sal.mayorEstudiante()}
<br> El porcentaje de chicas mayores es de ${sal.chicasMayor()}
`;