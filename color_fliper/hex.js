const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("mouseover", function (){

    var hexvar = "#";
    for(let i=0 ; i < 6; i++)
    {
        let a=Math.floor(Math.random()*15);
        hexvar +=hex[a];
    }
    document.body.style.backgroundColor = hexvar;
    color.textContent = hexvar;

});