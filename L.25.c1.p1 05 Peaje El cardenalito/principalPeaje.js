import Cl_Vehiculo from "./Cl_Vehiculo.js";
import Cl_Peaje from "./Cl_Peaje.js";

let v1=new Cl_Vehiculo("KBS11E",1);
let v2=new Cl_Vehiculo("XXES12",2);
let v3=new Cl_Vehiculo("YXZQE1",3);
let v4=new Cl_Vehiculo("KBS23E",1);

let peaje=new Cl_Peaje();
peaje.procesarVehiculo(v1);
peaje.procesarVehiculo(v2);
peaje.procesarVehiculo(v3);
peaje.procesarVehiculo(v4); 
alert(`El vehiculo de placa ${v1.placa} tiene una tarifa de ${v1.puntajeFinal()}`);
alert(`El participante ${j2.nombre} tiene una puntuación de ${j2.puntajeFinal()}`);
alert(`El participante ${j3.nombre} tiene una puntuación de ${j3.puntajeFinal()}`); 
alert(`Nombre del ganador: ${juego.Ganador()}`);
alert(`Porcentaje de jugadores con menos de 10 puntos: ${juego.porcMenos10()}`);    
let salida=document.getElementById("salida");
salida.innerHTML=`  
<br> El participante ${j1.nombre} tiene una puntuación de ${j1.puntajeFinal()}  
<br> El participante ${j2.nombre} tiene una puntuación de ${j2.puntajeFinal()}     
<br> El participante ${j3.nombre} tiene una puntuación de ${j3.puntajeFinal()} 
<br> Nombre del ganador: ${juego.Ganador()}
<br> Porcentaje de jugadores con menos de 10 puntos: ${juego.porcMenos10()}
`; 
