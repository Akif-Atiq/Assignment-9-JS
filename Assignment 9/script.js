document.getElementById("name").onclick= function(){
    alert("Abu Ahmed Akif")
}
document.getElementById("number").onclick= function(){
    alert("7 is a number")
}
document.getElementById("variable").onclick = function(){
    let varAbdul;
    document.getElementById("statement").innerText = "Variable Name"
    document.getElementById("output").innerText = `varAki `
}
document.getElementById("camelCase").onclick = function(){
    document.getElementById("statement").innerText = "the example of camelCasing"
    document.getElementById("output").innerText = "camelCase, getElementById, JavaScript"
}
document.getElementById("sum").onclick = function(){
    let a, b;
    a = 10;
    b = 20;
    document.getElementById("statement").innerText = "a = 10 and b = 20"
    document.getElementById("output").innerText = `a + b = ${a+b}`
}
document.getElementById("subtract").onclick = function(){
    let a, b;
    a = 10;
    b = 20;
    document.getElementById("statement").innerText = "a = 10 and b = 20"
    document.getElementById("output").innerText = `a - b = ${b-a}`
}
document.getElementById("multiply").onclick = function(){
    let a, b;
    a = 10;
    b = 20;
    document.getElementById("statement").innerText = "a = 10 and b = 20"
    document.getElementById("output").innerText = `a * b = ${a*b}`
}
document.getElementById("divide").onclick = function(){
    let a, b;
    a = 10;
    b = 20;
    document.getElementById("statement").innerText = "a = 10 and b = 20"
    document.getElementById("output").innerText = `a / b = ${b/a}`
}
document.getElementById("calculate").onclick = function(){
    let a, b, c;
    a = 10;
    b = 20;
    c = 30;
    document.getElementById("statement").innerText = "a = 10 and b = 20 and c = 30"
    document.getElementById("output").innerText = `a * b + c = ${a*b+c}`
}