const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('wheel',function () {
    let a = Math.floor(Math.random()*4);
    document.body.style.backgroundColor = colors[a];
    color.textContent = colors[a];
});