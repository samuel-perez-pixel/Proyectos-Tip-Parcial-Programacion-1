/*MINI CINE 
Se tienen 3 salas de proyección con una capacidad de 1: 30, 2: 20, 3: 10 personas, y se 
registra el nombre de cada película. Las entradas cuestan $2 adultos y $1 niños. A la taquilla de 
acercan los cinéfilos y solicitan la sala, indican cantidad adultos y cantidad niños. Se desea 
conocer por cada Cinéfilo a) el monto a pagar, y por el cine b) cuál película vendió más $, 
c) cantidad de entradas vendidas, y d) monto total cobrado. 
A manera de ejemplo, el administrador de la sala señala que el domingo se exhibían Drácula, 
Thor y Aladino, en las salas 1, 2 y 3 respectivamente, y que, por ejemplo, si llega Felix con 2 
adultos y 1 niño para Aladino, José sólo con su novia para Thor, Carmen con 3 niños para 
Aladino, y Rafael con 3 compañeros de trabajo para Drácula, entonces la salida sería así: 
Félix debe pagar $8 
José debe pagar $4 
Carmen debe pagar $5 
Rafael debe pagar $8 
La película que vendió más $ fue Aladino con $13 */

import Cl_Cinefilo from "./Cl_Cinefilo.js";
import Cl_Cine from "./Cl_Cine.js";

// creemos los cinefilos
let cinefilo1=new Cl_Cinefilo(3,"Aladino",1,3);
let cinefilo2=new Cl_Cinefilo(2,"Thor",2,0);
let cinefilo3=new Cl_Cinefilo(3,"Aladino",1,3);
let cinefilo4=new Cl_Cinefilo(1,"Drácula",4,0);
 let Cin= new Cl_Cine();
Cin.procesarCinefilo(cinefilo1);
Cin.procesarCinefilo(cinefilo2);
Cin.procesarCinefilo(cinefilo3);      
Cin.procesarCinefilo(cinefilo4);
      
alert(`Félix debe pagar ${cinefilo1.montoTotal()}`);
alert(`José debe pagar ${cinefilo2.montoTotal()}`);
alert(`Carmen debe pagar ${cinefilo3.montoTotal()}`);
alert(`Rafael debe pagar ${cinefilo4.montoTotal()}`);
alert(`La pelicula que vendió mayor $ fue ${Cin.peliculaMayor() }`);

let salida=document.getElementById("salida");
salida.innerHTML=`  
<br> Félix debe pagar ${cinefilo1.montoTotal()} 
<br> José debe pagar ${cinefilo2.montoTotal()} 
<br> Carmen debe pagar ${cinefilo3.montoTotal()} 
<br> Rafael debe pagar ${cinefilo4.montoTotal()} 
<br> La pelicula que vendió mayor $ fue ${Cin.peliculaMayor() } con un monto de ${Cin.auxMayor}
`;