let check = document.querySelector(".inputValue");

check.addEventListener("click", ()=>{
    if(check.checked == true){
        console.log("Checked");
    }else{
        console.log("unchecked")
    }
})
