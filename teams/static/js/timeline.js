const stages = document.querySelectorAll('.timeline');
console.log(stages);
for(i=0;i<stages.length;i++){
    stages[i].addEventListener('onclick',()=>{
        console.log("focus");
        stages.style.display = "none";
    });
}
