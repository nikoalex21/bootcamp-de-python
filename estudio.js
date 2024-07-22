/* for(var i=2023; i<2025;i++){
    console.log(i)
    for(var j=6; j < 9;j++){
        console.log("-----",j)
    }
} */

/* for (var i = 9; i < 10; i++) {
    for(var j = 0 ; j < 10; j++){
        console.log(i + " * " + j + " = " + i * j);
    }

} */
/* 
function ejemArray(uno,dos,tres){
    var arr=[uno,dos,tres]
    
return arr

}
var simp =ejemArray('man', true,'apple')
console.log(simp) */

/* var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
 */
/* 
try {
    throw new ReferenceError()
} catch (error) {
    console.log(error)
    console.log("este error refiere ")
}
console.log("mi prigrma no se detiene") */

/* try {
    throw new ReferenceError()    
} catch (usuario) {
    console.log(usuario)
    console.log("la variable usuario no esta definida")
}
console.log("el programa detecta un error") */

/* function addTwoNums(a,b){
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError('el primer argumento no es un numero');
        }
        else if(typeof(b)!='number'){
            throw new ReferenceError('el segundo argumento no es un numero')
        }
        else{
            console.log(a+b)
        }
        
    } catch (error) {
        console.log("Error!", error)
    }
    
    }
addTwoNums( 5 , '5' )
console.log("It still works")
 *//* 
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder('word', 'd') */
/* 
function letterFinder(word, match) {
    var condicion1 = typeof(word) == 'string' && word.length >= 2
    var condicion2 = typeof(match) == 'string' && match.length == 1
    if (condicion1 == true && condicion2==true){
         for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
            }
        }
    }else{
    console.log("por favor pase argumentos correctos a la funcion")
    }
}
letterFinder('cat','c') */
try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }

function calcRectArea(width, height) {
    return width * height;
}
calcRectArea(5, 6)