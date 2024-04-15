console.log ("HOLA MUNDO");

let mivariable = " hola mundo";

console.log(mivariable);

mivariable = 11;

console.log(mivariable);

const MICONSTANTE = "javascript";

console.log(MICONSTANTE);

function cualEsMayor(num1,num2,num3){
    if(num1 === num2 && num2 === num3){
        return 'Los tres numeros son iguales'
    }
    else if(num1 >= num2){
        return 'El numero mas grande es: ' + (num1 > num3 ? num1 : num3);
    }
    else {
        return 'El numero mas grande es: ' + (num2 > num3 ? num2 : num3);
    }
}

console.log(cualEsMayor(1, 2, 3))
