//7-Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));

if(numero1 > numero2 && numero1 > numero3){
    document.write("El numero mayor es el numero 1:" + numero1);
}else{
if(numero2 > numero1 && numero2 > numero3)
        document.write("el numero mayor es el 2 :" + numero2);
}if(numero3 > numero1 && numero3 > numero2){
        document.write("El numero mayor es el 3:" + numero3);
    }
