var randomNumber1 =(Math.random()*6);
randomNumber1 = Math.ceil(randomNumber1);
document.querySelector("img").setAttribute("src","dice"+(randomNumber1)+".png");

var randomNumber2 =(Math.random()*6);
randomNumber2 = Math.ceil(randomNumber2);
document.querySelector("img.img2").setAttribute("src","dice"+(randomNumber2)+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins !";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins ! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw !";
}