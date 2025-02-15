/*AUMENTO SUELDO 
En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
personal administrativo. La empresa necesita determinar cuánto es el total del monto adicional 
que deberá pagar en la próxima quincena. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
gana $150: 
Juan tiene un aumento de $20 
Ana tiene un aumento de $24 
Lin tiene un aumento de $20 
Mary tiene un aumento de $10 
Carlos tiene un aumento de $15 
El total de monto adicional que debe pagar la empresa es de $89 */

import Cl_Personal from "./Cl_Personal.js";
import Cl_Empresa from "./Cl_Empresa.js";

let Juan=new Cl_Personal("Juan","obrero",100);
let Ana=new Cl_Personal("Ana","obrero",120);
let Lin=new Cl_Personal("Lin","administrativo",200);
let Mary=new Cl_Personal("Mary","obrero",50);
let Carlos=new Cl_Personal("Carlos","administrativo",150);

let empresa=new Cl_Empresa();
empresa.procesarPersonal(Juan);
empresa.procesarPersonal(Ana);
empresa.procesarPersonal(Lin);
empresa.procesarPersonal(Mary);
empresa.procesarPersonal(Carlos);
alert(`Juan tiene un aumento de ${Juan.aumento()}`);
alert(`Ana tiene un aumento de ${Ana.aumento()}`);
alert(`Lin tiene un aumento de ${Lin.aumento()}`);
alert(`Mary tiene un aumento de ${Mary.aumento()}`);
alert(`Carlos tiene un aumento de ${Carlos.aumento()}`);
alert(`El total de monto adicional que debe pagar la empresa es de ${empresa.montoAdicional()}`);
let salida=document.getElementById("salida");
salida.innerHTML=`  
<br> Juan tiene un aumento de ${Juan.aumento()} 
<br> Ana tiene un aumento de ${Ana.aumento()} 
<br> Lin tiene un aumento de ${Lin.aumento()} 
<br> Mary tiene un aumento de ${Mary.aumento()} 
<br> Carlos tiene un aumento de ${Carlos.aumento()} 
<br> El total de monto adicional que debe pagar la empresa es de ${empresa.montoAdicional()}`;