// Follow along with the examples here

/*function sayHello() {
    console.log("Hello!");
}
sayHello();


function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
sayHelloToLiz();

function sayHelloToSamip (){
    console.log("Hello, Samip!");
}

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

*/


//
/* function doSomething(thing) {
    console.log(thing);
}

doSomething("anything"); */ //passing the argument 'anything' into our function

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);


function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}`);
}
say("Goodbye", "Julio")

say("Julio", "Hello")


//Order of Arguments

function say(greeting, firstName) {
    console.log("firstName:", firstName);
    console.log("greeting:", greeting);
    console.log(`${greeting}, ${firstName}`);
}


//Return Values 

function add(x, y) {
    return x + y;
}
add(1, 3);
console.log(add(1,3));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}`;
}

console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}`);
}

//Return

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}`;
}
console.log(say("Howdy", "partner"));