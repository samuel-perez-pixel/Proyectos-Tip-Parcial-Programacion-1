/*GRUPOS DE DATOS 
Sean los siguientes grupos de datos: (cod, d1 y d2), (A, 10, 5), (B, 4, 8), (C, 2, 6), (D, 3, 9), 
(E, 1, 5). Para cada grupo, el d3 es el promedio de los otros datos. Se desea conocer el 
promedio de cada grupo de datos, y cual grupo tiene el mayor promedio. 
Para este caso, la salida debe ser así: 
El grupo A tiene un promedio de 7.50 
El grupo B tiene un promedio de 6.00 
El grupo C tiene un promedio de 4.00 
El grupo D tiene un promedio de 6.00 
El grupo E tiene un promedio de 3.00 
*/

import Cl_Dato from "./Cl_Dato.js";
import Cl_Grupo from "./Cl_Grupo.js";

let d1=new Cl_Dato("A",10,5);
let d2=new Cl_Dato("B",4,8);
let d3=new Cl_Dato("C",2,6);
let d4=new Cl_Dato("D",3,9);
let d5=new Cl_Dato("E",1,5);

let g=new Cl_Grupo();
g.procesarDato(d1);
g.procesarDato(d2);
g.procesarDato(d3);
g.procesarDato(d4);
g.procesarDato(d5);
alert(`El grupo ${d1.codigo} tiene un promedio de ${d1.dato3()}`);
alert(`El grupo ${d2.codigo} tiene un promedio de ${d2.dato3()}`);
alert(`El grupo ${d3.codigo} tiene un promedio de ${d3.dato3()}`);
alert(`El grupo ${d4.codigo} tiene un promedio de ${d4.dato3()}`);
alert(`El grupo ${d5.codigo} tiene un promedio de ${d5.dato3()}`);
alert(`El grupo ${g.Promedio()} tiene el mayor promedio`);

let salida=document.getElementById("salida");
salida.innerHTML=`  
<br> El grupo ${d1.codigo} tiene un promedio de ${d1.dato3()}
<br> El grupo ${d2.codigo} tiene un promedio de ${d2.dato3()}
<br> El grupo ${d3.codigo} tiene un promedio de ${d3.dato3()}
<br> El grupo ${d4.codigo} tiene un promedio de ${d4.dato3()}
<br> El grupo ${d5.codigo} tiene un promedio de ${d5.dato3()}
<br> El grupo ${g.Promedio()} tiene el mayor promedio
`;