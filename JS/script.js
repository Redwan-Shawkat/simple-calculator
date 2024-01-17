let zero = document.getElementsByClassName("0")
let one = document.getElementsByClassName("1")
let two = document.getElementsByClassName("2")
let three = document.getElementsByClassName("3")
let four = document.getElementsByClassName("4")
let five = document.getElementsByClassName("5")
let six = document.getElementsByClassName("6")
let seven = document.getElementsByClassName("7")
let eight = document.getElementsByClassName("8")
let nine = document.getElementsByClassName("9")
let plus = document.getElementsByClassName("plus")
let minus = document.getElementsByClassName("minus")
let multiply = document.getElementsByClassName("multiply")
let divide = document.getElementsByClassName("divide")
let equal = document.getElementsByClassName("equal")

document.addEventListener("keypress", function(){
  if(event.key === "0"){
  zero[0].style.backgroundColor = (zero[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "1"){
  one[0].style.backgroundColor = (one[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "2"){
  two[0].style.backgroundColor = (two[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "3"){
  three[0].style.backgroundColor = (three[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "4"){
  four[0].style.backgroundColor = (four[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "5"){
 five[0].style.backgroundColor = (five[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "6"){
  six[0].style.backgroundColor = (six[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "7"){
  seven[0].style.backgroundColor = (seven[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "8"){
  eight[0].style.backgroundColor = (eight[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "9"){
  nine[0].style.backgroundColor = (nine[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "+"){
  plus[0].style.backgroundColor = (plus[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "-"){
  minus[0].style.backgroundColor = (minus[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "*"){
  multiply[0].style.backgroundColor = (multiply[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "/"){
  divide[0].style.backgroundColor = (divide[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});

document.addEventListener("keypress", function(){
  if(event.key === "="){
  equal[0].style.backgroundColor = (equal[0].style.backgroundColor === "red") ? "rgba(0,0,0,0.5)" : "red";
  }
});