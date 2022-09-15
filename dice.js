var num1 = Math.floor(Math.random()*6)+1;
var diceImg1="dice"+num1+".png";
var imgSource1="images/"+diceImg1;//images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgSource1); 

var num2=Math.floor(Math.random()*6)+1;
var diceImg2="dice"+num2+".png";
var imgSource2="images/"+diceImg2;

document.querySelectorAll("img")[1].setAttribute("src",imgSource2);


if(num1>num2){
    document.querySelector("h1").textContent="Player 1 wins🏆";
}else if(num2>num1){
    document.querySelector("h1").textContent="Player 2 wins🏆";
}
else{
    document.querySelector("h1").textContent="Draw";
}