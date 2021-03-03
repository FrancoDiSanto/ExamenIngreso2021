

//ebemos realizar la carga de una compra de 5(cinco) productos de desinfección
//de cada una debo obtener los siguientes datos:
//el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
//Se debe Informar al usuario lo siguiente:
//a) El promedio de cantidad por tipo de producto
//b) El tipo de inflamable con más cantidad de unidades en total de la compra
//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
//d) la marca y tipo del más caro de los productos
function mostrar()
{
	let nombre;
	let tipo;
	let precio;
	let cantidad;
	let inflamable;
	let marca;
	let acumALCOHOL=0;
	let acumIAC=0;
	let acumQUAT=0;
	let contALCOHOL=0;
	let contIAC=0;
	let contQUAT=0;
let promedioALCOHOL=0;
let promedioIAC=0;
let promedioQUAT=0;
let acumIACBarato =0; //punto
let masCaro;
let FlagMasCaro =1;
let marcaMasCaro;
let tipoMasCaro;
let cantidadMaximaInflamable;
let flagMasCantidad =1;


	for(let i =0 ; i <5 ; i++){
nombre = prompt("ingrese nombre de su producto ");
tipo = prompt("ingrese tipo de su producto EN MAYUSCULA");
while(tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT"){
	tipo = prompt("Error, ingrese tipo EN MAYUSCULA (ALCOHOL, IAC O QUAT");
}

precio = parseInt(prompt("ingrese precio"));
while(precio<100 || precio > 300){
	precio = parseInt(prompt("Error. ingrese un precio entre 100 y 300"));
} cantidad = parseInt(prompt("ingrese cantidad de unidades mayor a 0"));
while(cantidad< 1 || cantidad > 1000){
	cantidad= parseInt(prompt("Error. ingrese una cantidad mayor a 0 y menor a 1000"));
}inflamable= prompt("ingrese tipo de inflamabilidad, inifugo, combustible, explosivo ");
while(inflamable != "inifugo" && inflamable != "combustible" && inflamable != "explosivo"){
	inflamable = prompt("Error. ingrese un tipo de inflamabilidad valido, inifugo, combustible o explosivo");
}marca = prompt("ingrese marca");


if (tipo == "ALCOHOL"){
acumALCOHOL = acumALCOHOL + cantidad;
contALCOHOL++;
}else if(tipo =="QUAT"){
	acumQUAT = acumQUAT + cantidad;
	contQUAT++;
}else{
	acumIAC = acumIAC + cantidad;
	contIAC++;
}

if(tipo == "IAC" && precio <= 200){
	acumIACBarato = acumIACBarato + cantidad;  //Punto C
}

if(FlagMasCaro || precio > masCaro){
	masCaro= precio;
	marcaMasCaro = marca ;
	tipoMasCaro = tipo;
	FlagMasCaro =0;                // punto D
}
if(inflamable !="inifugo"){
	if(flagMasCantidad || cantidad > cantidadMaximaInflamable){    // punto b
		cantidadMaximaInflamable = cantidad ;
		flagMasCantidad =0;
	}
}

	}
	
	promedioALCOHOL = acumALCOHOL / contALCOHOL;    // PUNTO A
	promedioIAC = acumIAC / contIAC;
	promedioQUAT = acumQUAT / contQUAT;
	
	
document.write("A- el promedio de ALCOHOL es "+ promedioALCOHOL + " el promedio de IAC es " + promedioIAC + " y el promedio de QUAT es "+promedioQUAT + "<br>" );
document.write("B- el tipo de inflamable con mas cantidad es de  " + cantidadMaximaInflamable + "<br>");
document.write("C- la cantidad de unidades de IAC con precio menor o igual a 200 es de "+ acumIACBarato+ "<br>");
document.write("D- La marca del mas caro es "+ marcaMasCaro+ " y su tipo es "+ tipoMasCaro + "<br>");

}
