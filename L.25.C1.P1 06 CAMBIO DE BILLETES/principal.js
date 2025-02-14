/*CAMBIO DE BILLETES 
La casa de moneda abre con cierta cantidad de cada billete para cambio (1: $10, 2: $20, 
3: $50), y llegan los clientes buscando sencillo; ejemplo: traen uno de $100 y se llevan 1 de 
$50, 2 de $20 y 1 de $10. Se conoce por la casa la cantidad inicial de los billetes para cambio, y 
por cada cliente el billete a cambiar (i. $100, ii. $50, iii. $20) y la cantidad correcta de cada 
billete que desea para el cambio que recibirá. Se desea conocer por cada cliente: a) la cantidad 
de billetes que se lleva, y por un día de servicios en la casa: b) el monto total cambiado, c) la 
cantidad que le queda de cada tipo de billete para cambio, incluyendo los de $100. 
La casa informa que, por ejemplo, el día anterior se comenzó con 20 billetes de $10, 10 de 
$20 y 6 de $50, y se procesaron los siguientes registros: (nombre, billete, cambioDe50, 
 GUÍA DE EJERCICIOS DE PROGRAMACIÓN I (3154) Y PROGRAMACIÓN (C4) - CORTE 1 
Pág. 6 
______________________________________________________ 
UCLA - DCyT - Coordinación del Eje de Programación 
cambioDe20, cambioDe10) (Luis, 100, 2, 0, 0) (Ana, 50, 0, 2, 1) (José, 100, 0, 4, 2) 
(Carmen, 20, 0, 0, 2) (Eva, 50, 0, 1, 3), según lo cual la salida requerida presenta el siguiente 
formato: 
Luis se lleva 2 billetes 
Ana se lleva 3 billetes 
José se lleva 6 billetes 
Carmen se lleva 2 billetes 
Eva se lleva 4 billetes 
Se cambiaron $320 
Quedaron 2 billetes de $100 
Quedaron 4 billetes de $50 
Quedaron 3 billetes de $20 
Quedaron 12 billetes de $10 */

import Cl_Cliente from "./Cl_Cliente.js";
import Cl_CasadeCambio from "./Cl_CasadeCambio.js";
// creemos los clientes
let c1=new Cl_Cliente("Luis",100,2,0,0);
let c2=new Cl_Cliente("Ana",50,0,2,1);
let c3=new Cl_Cliente("José",100,0,4,2);
let c4=new Cl_Cliente("Carmen",20,0,0,2);
let c5=new Cl_Cliente("Eva",50,0,1,3);
let cambio=new Cl_CasadeCambio();
cambio.procesarCliente(c1);
cambio.procesarCliente(c2);
cambio.procesarCliente(c3);
cambio.procesarCliente(c4);
cambio.procesarCliente(c5);
alert(`Luis se lleva ${c1.totalBilletes()} billetes`); 
alert(`Ana se lleva ${c2.totalBilletes()} billetes`); 
alert(`José se lleva ${c3.totalBilletes()} billetes`); 
alert(`Carmen se lleva ${c4.totalBilletes()} billetes`); 
alert(`Eva se lleva ${c5.totalBilletes()} billetes`); 
alert(`Se cambiaron ${cambio.totalCambio()}`); 
alert(`Quedaron ${cambio.ingreso100()} billetes de $100`); 
alert(`Quedaron ${cambio.resto50()} billetes de $50`); 
alert(`Quedaron ${cambio.resto20()} billetes de $20`); 
alert(`Quedaron ${cambio.resto10()} billetes de $10`);

let salida=document.getElementById("salida");
salida.innerHTML=`  
<br> Luis se lleva ${c1.totalBilletes()} billetes  
<br> Ana se lleva ${c2.totalBilletes()} billetes 
<br> José se lleva ${c3.totalBilletes()} billetes 
<br> Carmen se lleva ${c4.totalBilletes()} billetes 
<br> Eva se lleva ${c5.totalBilletes()} billetes 
<br> Se cambiaron ${cambio.totalCambio()} 
<br> Quedaron ${cambio.ingreso100()} billetes de $100 
<br> Quedaron ${cambio.resto50()} billetes de $50 
<br> Quedaron ${cambio.resto20()} billetes de $20 
<br> Quedaron ${cambio.resto10()} billetes de $10`; 