/*FACTURACIÓN 
Por cada artículo vendido se conoce su nombre, precio y cantidad. De desea conocer: a) 
subtotal de cada artículo, b) subtotal de la factura, c) 16% de IVA y total de la factura al aplicarlo. 
Al ser consultada por la forma como desean que se presente la salida, el peaje cardenal 
suministra el siguiente formato, sobre la base de los siguientes datos: 
(nombre, precio, cantidad) 
(Harina, 40, 2) (Arroz, 45, 4) (Azúcar, 45, 2) (Pasta, 47.5, 3) 
Subtotal del articulo 80 Bs 
Subtotal del articulo 180 Bs 
Subtotal del articulo 90 Bs 
Subtotal del articulo 142.5 Bs 
 GUÍA DE EJERCICIOS DE PROGRAMACIÓN I (3154) Y PROGRAMACIÓN (C4) - CORTE 1 
Pág. 4 
______________________________________________________ 
UCLA - DCyT - Coordinación del Eje de Programación 
Subtotal de la factura 492.5 
Monto a pagar por IVA (16%) 78.8 Bs 
Total de la factura 571.3 Bs */

import Cl_Articulo from "./Cl_Articulo.js";
import Cl_Venta from "./Cl_Venta.js";

let a1=new Cl_Articulo("Harina",40,2);
let a2=new Cl_Articulo("Arroz",45,4);
let a3=new Cl_Articulo("Azúcar",45,2);
let a4=new Cl_Articulo("Pasta",47.5,3);

let venta=new Cl_Venta();
venta.procesarVenta(a1);
venta.procesarVenta(a2);
venta.procesarVenta(a3);
venta.procesarVenta(a4);
alert(`Subtotal del articulo ${a1.nombre} ${a1.precio*a1.cantidad} Bs `); 
alert(`Subtotal del articulo ${a2.nombre} ${a2.precio*a2.cantidad} Bs `); 
alert(`Subtotal del articulo ${a3.nombre} ${a3.precio*a3.cantidad} Bs `); 
alert(`Subtotal del articulo ${a4.nombre} ${a4.precio*a4.cantidad} Bs `); 
alert(`Subtotal de la factura ${venta.subTotalFactura()} Bs `); 
alert(`Monto a pagar por IVA (16%) ${venta.IVA()} Bs `); 
alert(`Total de la factura ${venta.totalFactura()} Bs `);
let salida=document.getElementById("salida");
salida.innerHTML=`  
<br> Subtotal del articulo ${a1.nombre} ${a1.precio*a1.cantidad} Bs 
<br> Subtotal del articulo ${a2.nombre} ${a2.precio*a2.cantidad} Bs 
<br> Subtotal del articulo ${a3.nombre} ${a3.precio*a3.cantidad} Bs     
<br> Subtotal del articulo ${a4.nombre} ${a4.precio*a4.cantidad} Bs 
<br> Subtotal de la factura ${venta.subTotalFactura()} Bs        
<br> Monto a pagar por IVA (16%) ${venta.IVA()} Bs 
<br> Total de la factura ${venta.totalFactura()} Bs 
`;  