//Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA
//, los datos solicitados son:
//nombre
//Tipo curasada("libre";"presencial";"remota")
//cantidad de materias( mas de cero y menos de 8)
//Sexo ( femenino , masculino , no binario)
//Nota promedio (entre 0 y 10)
//edad (validar)
//se debe informar de existir, o informar que no existe , en el caso que corresponda.
//a) El nombre del mejor promedio que no sea masculino
//b) El nombre del mas joven de los alumnos entre los que la dan libre
//c) El promedio de nota por sexo
//d) La edad y nombre del que cursa mas materias que no sean en forma remota

function mostrar()
{
  let nombre;
  let tipoCursada;
  let cantMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let seguir;
  let mejorPromedioNoMasculino=0;
  let FlagMejorPromedioNoMasculino=1;
  let nombreMejorPromedioNoMasculino;
  let alumnoMasJovenLibre;
  let nombreAlumnoMasjovenLibre;
  let acumuladorM =0;
  let acumuladorF=0;
  let acumNoBin=0;
  let contadorM=0;
  let contadorF =0;
  let contadorNB =0;
  let promedioM =0;
  let promedioF=0;
  let promedioNB=0;

  
 
  do{

    nombre = prompt ( "ingrese su nombre");
    tipoCursada = prompt("ingrese su tipo de cursada, libre, presecial, o remota");
    while (tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota"){
      tipoCursada = prompt("Error. coloque un tipo de cursada valido");
    }
    cantMaterias = parseInt(prompt("coloque la cantidad de materia a las que esta inscripto"));
    while(cantMaterias<0 && cantMaterias >8){
      cantMaterias= parseInt(prompt("Error. coloque la cantidad de materia a las que esta inscripto entre 0 y 8"))
    }
    sexo = prompt("ingrese su sexo , masculino, femenino o no binario");
    while (sexo!= "masculino" && sexo != "femenino" && sexo != "no binario"){
      sexo = prompt("Error, ingrese su sexo , masculino, femenino o no binario");
    }
    notaPromedio = parseInt(prompt("ingrese su nota promedio"));
    while(notaPromedio <0 || notaPromedio> 10){
      notaPromedio = parseInt(prompt("Error, ingrese su nota promedio"));
    }
    edad = parseInt(prompt("ingrese su edad,positiva y numerica"));
    while (edad< 0 || isNaN(edad)) {
      edad = parseInt(prompt("Error, ingrese su edad positiva y numerica"));
    }

    if(sexo != "masculino"){

      if(FlagMejorPromedioNoMasculino || notaPromedio > FlagMejorPromedioNoMasculino){  //punto A 
    mejorPromedioNoMasculino = notaPromedio;
    FlagMejorPromedioNoMasculino =0;
    nombreMejorPromedioNoMasculino = nombre ;
    
      }
      
    }

    if()
    if(sexo== "femenino"){
      acumuladorF = acumuladorF + notaPromedio;
      contadorF++;
     

    }else if(sexo == "masculino"){
      acumuladorM = acumuladorM + notaPromedio;
      contadorM++;
    }else{
      acumNoBin = acumNoBin + notaPromedio;
      contadorNB++;
    }

    
    

    seguir= prompt("desea seguir , coloque si de asi serlo");
  }while(seguir == "si")
   promedioF = acumuladorF / contadorF;
   promedioM = acumuladorM / contadorM;
   promedioNB = acumNoBin / contadorNB ;
  
  document.write("A- El nombre del mejor promedio no masculino es " +  nombreMejorPromedioNoMasculino + "<br>");
 document.write( "C- proemdio masculino es " + promedioM + " femenino " + promedioF + "no binario " + promedioNB + "<br>");
 
 
 
 
 
  alert("dos");
}
