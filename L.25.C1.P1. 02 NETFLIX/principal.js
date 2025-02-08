/*5. NETFLIX 
Una agencia vende planes Netflix (A: para 1 TV, B: para 2 TVs, C: para 5 TVs), así: A= 
suscripción $3, B= suscripción $5, C= suscripción $10; además el suscriptor debe pagar un 10% 
adicional del valor de la suscripción por servicio de conexión (menos el plan C, que ya lo incluye). 
En este sentido, se desea conocer: a) precio a pagar por cada suscriptor, b) porcentaje de 
suscriptores que no pagaron servicio de conexión, c) cuál es el plan favorito. 
La agencia manifiesta que el formato para la salida de los requerimientos solicitados es: 
El suscriptor con cedula 15457858 paga 3.3$ 
El suscriptor con cedula 15457859 paga 5.5$ 
El suscriptor con cedula 15457667 paga 10$ 
Porcentaje de suscriptores que no pagaron servicio de conexión: 33.33% 
Cuál es el plan favorito: Iguales de favorito: Plan A, Plan B y Plan C. 
La salida corresponde a los siguientes datos del suscriptor (cedula, tipo plan): 
(15457858, A) (15457859, B) (15457667, C) */

import Cl_Agencia from "./Cl_Agencia.js";
import Cl_Suscriptor from "./Cl_Suscriptor.js";

// Objeto suscriptor

let s1=new Cl_Suscriptor(15457858,"A");
let s2=new Cl_Suscriptor(15457859,"B");
let s3=new Cl_Suscriptor(15457667,"C");

// Objeto agencia

let a=new Cl_Agencia();

// Procesar los suscriptores

a.procesarSuscriptor(s1);
a.procesarSuscriptor(s2);
a.procesarSuscriptor(s3);

let salida=document.getElementById("salida");
salida.innerHTML=`
<br> El suscriptor con cedula ${s1.cedula} paga ${s1.precioPgar()}$ 
<br> El suscriptor con cedula ${s2.cedula} paga ${s2.precioPgar()}$ 
<br> El suscriptor con cedula ${s3.cedula} paga ${s3.precioPgar()}$ 
<br> Porcentaje de suscriptores que no pagaron servicio de conexión: ${a.porcentajeSusC()}% 
<br> Cuál es el plan favorito: ${a.planFavorito()}
`
alert(`El suscriptor con cedula ${s1.cedula()} paga ${s1.precioPgar()}$ `); 
alert(`El suscriptor con cedula ${s2.cedula()} paga ${s2.precioPgar()}$ `); 
alert(`El suscriptor con cedula ${s3.cedula()} paga ${s3.precioPgar()}$ `); 
alert(`Porcentaje de suscriptores que no pagaron servicio de conexión: ${a.porcentajeSusC()}% `); 
alert(`Cuál es el plan favorito: ${a.planFavorito()}`); 