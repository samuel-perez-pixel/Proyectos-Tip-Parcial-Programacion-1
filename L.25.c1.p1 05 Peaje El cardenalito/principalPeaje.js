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
alert(`El vehiculo de placa ${v1.placa} tiene una tarifa de ${v1.tarifaPagar()}`);
alert(`El vehiculo de placa ${v2.placa} tiene una tarifa de ${v2.tarifaPagar()}`);
alert(`El vehiculo de placa ${v3.placa} tiene una tarifa de ${v3.tarifaPagar()}`);
alert(`El vehiculo de placa ${v4.placa} tiene una tarifa de ${v4.tarifaPagar()}`);

alert(`Porcentaje de vehiculos particulares: ${peaje.porcentajeParticular()}`);
alert(`Porcentaje de vehiculos de Transporte: ${peaje.porcentajeTransporte()}`); 
alert(`Porcentaje de vehiculos de carga: ${peaje.porcentajeCarga()}`); 
alert(`Partida Municipal: ${peaje.porcentajeParticular()}`); 
let salida=document.getElementById("salida");
salida.innerHTML=`  
<br> El participante ${j1.nombre} tiene una puntuación de ${j1.puntajeFinal()}  
<br> El participante ${j2.nombre} tiene una puntuación de ${j2.puntajeFinal()}     
<br> El participante ${j3.nombre} tiene una puntuación de ${j3.puntajeFinal()} 
<br> Nombre del ganador: ${juego.Ganador()}
<br> Porcentaje de jugadores con menos de 10 puntos: ${juego.porcMenos10()}
`; 
