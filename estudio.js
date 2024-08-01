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
/* try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }

function calcRectArea(width, height) {
    return width * height;
}
calcRectArea(5, 6) */

/* var velocidad = 19
var tiempo = 10.4
var distancia = 0
function calcularDistancia(vel, tim){
    return vel*tim
}
distancia = calcularDistancia(velocidad, tiempo)
consolelog(distancia)
 */
/* let contador = 3;
function ejemplo(){
    console.log(contador)
    contador= contador-1;
    if (contador===0) return;
    ejemplo();
    
} */

// Task 1: Build a function-based console log message generator
// Task 1: Build a function-based console log message generator
/* function consoleStyler(color,background,fontSize,txt) {

    var mensaje = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background}`;
    style += `font-size: ${fontSize}`;
    console.log(mensaje, style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    
    fontStyle = "color: tomato; font-size: 50px"
    if (reason == "cumpleaños")
    {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions")
    {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else
    {
         console.log("Unknown reason", fontStyle);
    }
    
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63','#ede6db','40px', 'Congrats!')
celebrateStyler('birthday')

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
    consoleStyler('ef7c8e', 'fae8e0', '30px', 'You made it!');  
    celebrateStyler('champions');
}
// Call styleAndCelebrate
styleAndCelebrate() */

/* function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);
 */
/* class Persona{
    piernas(){
        console.log("caminar")
    }
}
class Deportista extends Persona{
    piernas(){
        super.piernas()
        console.log("correr")
    }
}
class Bailarina{
    piernas(){
        console.log("bailar")
    }
}

var myDeportista = new Deportista
var myBailarina = new Bailarina
    myDeportista.piernas()
    myBailarina.piernas() */

/*     class Train {
        constructor(color, lightsOn) {
            this.color = color;
            this.lightsOn = lightsOn;
        }
        toggleLights() {
            this.lightsOn = !this.lightsOn;
        }
        lightsStatus() {
            console.log('Lights on?', this.lightsOn);
        }
        getSelf() {
            console.log(this);
        }
        getPrototype() {
            var proto = Object.getPrototypeOf(this);
            console.log(proto);
        }
    } */


/*         class Animal {
            constructor(lg) {
                this.legs = lg;
            }
        }
    
        class Dog extends Animal {
            constructor() {
                super(4);
            }
        }
    
        var result = new Dog();
        console.log(result.legs); */

        class Animal {

        }
    
        class Cat extends Animal {
          constructor() {
            super();
            this.noise = "meow";
          }
        }
    
        var result = new Animal();
        console.log(result.noise);
        class Cake {
            constructor(lyr) {
                this.layers = lyr + 1;
            }
        }
    
        var result = new Cake(1);
        console.log(result.layers);
    