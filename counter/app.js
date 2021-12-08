var count = 0
const decbtn = document.getElementById("dec");
const incbtn = document.getElementById("inc");
const cntr = document.querySelector("#value");
const resbtn = document.getElementById("res");
// my Approach
// decbtn.addEventListener("click", function(){
//     count -=1;
//     cntr.textContent = count;
//     cntr.classList = "neg";
// });
// resbtn.addEventListener("click", function(){
//     if(count < 0){
//         cntr.classList.remove("neg");
//     }
//     else if(count > 0)
//     {
//         cntr.classList.remove("pos");
//     }
//     count = 0;
//     cntr.textContent = count;
    
// });
// incbtn.addEventListener("click", function(){
//     count += 1;
//     cntr.textContent = count;
//     cntr.classList = "pos";
// });
// Effective Approach
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn){
    btn.addEventListener('click',function(eve){
        const styclass = eve.currentTarget.classList;
        if(styclass.contains('decrease')){
            count -= 1;
        }
        else if(styclass.contains('increase')){
            count +=1;
        }
        else if(styclass.contains('reset')){
            count = 0;
        }
        if(count > 0){
            cntr.style.color = "green";
        }
        else if(count < 0){
            cntr.style.color = "red";
        }
        cntr.textContent = count;
    });
});