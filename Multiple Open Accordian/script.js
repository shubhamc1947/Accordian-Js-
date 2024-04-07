const list=document.querySelector(".wrap");
console.log(list)


list.addEventListener("click",function(ele){
    console.log(ele.target)
    console.log()
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