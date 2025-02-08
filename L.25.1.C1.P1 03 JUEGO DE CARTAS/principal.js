/*JUEGO DE CARTAS 
En el juego a cada participante se le entregan 3 cartas numeradas del 1 al 12, gana quien 
sume mayor puntuación. Se desea conocer a) la puntuación de cada participante, b) el nombre 
del ganador, c) el porcentaje de jugadores con menos de 10 puntos. 
Se tiene que el formato para la salida de los requerimientos solicitados es: 
El participante Juan tiene una puntuación de 8 
El participante José tiene una puntuación de 14 
El participante Rosa tiene una puntuación de 27 
Nombre del ganador: Rosa 
Porcentaje de jugadores con menos de 10 puntos:33.33% 
La salida corresponde a los siguientes datos del participante (nombre, carta1, carta2, carta3): 
(Juan,1,5,2) (José, 12,1,1) (Rosa, 10,9,8). 
*/

import Cl_Jugador from "./Cl_Jugador.js";
import Cl_Juego from "./Cl_Juego.js";

let j1=new Cl_Jugador("Juan",1,5,2);
let j2=new Cl_Jugador("José",12,1,1);
let j3=new Cl_Jugador("Rosa",10,9,8);

let juego=new Cl_Juego();
juego.procesarJugador(j1);
juego.procesarJugador(j2);
juego.procesarJugador(j3);      
alert(`El participante ${j1.nombre} tiene una puntuación de ${j1.puntajeFinal()}`);
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
