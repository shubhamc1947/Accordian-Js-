const list=document.querySelector(".wrap");
console.log(list)
const ans=document.querySelectorAll(".answer");

//remove all show except 
function removeShow(tar){
    ans.forEach(a=>{
        if(a.classList.contains("show") && a!=tar){
            a.classList.remove("show");
        }
    })
}
list.addEventListener("click",function(ele){
    // remove all 
    removeShow(ele.target.nextElementSibling);
    if(ele.target.classList.contains("question")){
        if(ele.target.children[0].classList.contains("fa-plus")){
            ele.target.children[0].classList.remove("fa-plus");
            ele.target.children[0].classList.add("fa-minus");
        }else{
            ele.target.children[0].classList.remove("fa-minus");
            ele.target.children[0].classList.add("fa-plus");
        }
        ele.target.nextElementSibling.classList.toggle("show");
    }
})