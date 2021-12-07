var count = 0
const decbtn = document.getElementById("dec");
const incbtn = document.getElementById("inc");
const cntr = document.querySelector("#value");
const resbtn = document.getElementById("res");

decbtn.addEventListener("click", function(){
    count -=1;
    cntr.textContent = count;
    cntr.classList = "neg";
});
resbtn.addEventListener("click", function(){
    if(count < 0){
        cntr.classList.remove("neg");
    }
    else if(count > 0)
    {
        cntr.classList.remove("pos");
    }
    count = 0;
    cntr.textContent = count;
    
});
incbtn.addEventListener("click", function(){
    count += 1;
    cntr.textContent = count;
    cntr.classList = "pos";
});