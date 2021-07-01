function addHtml() {
    document.querySelector(".form-vertical").innerHTML += 
    "<div class='container'><div <div class='we-recommend'>We Recommend</div><p class='p-tag' >Beautify your Canvas by adding a black frame</p><div class='checkbox'><input class='inputValue' type='checkbox'> <label >Add for $20</label></div><a class='link' href='View this Canvas with Black Frame'>View this Canvas with Black Frame</a><img class='image' src='//cdn.shopify.com/s/files/1/1944/7205/products/MAMBA_MENTALITY_RAJ_MOCK_FRAME_1_grande.jpg?v=1605645149'</div>";
    let check = document.querySelector(".inputValue");
        let price = document.querySelector("#ProductPrice .money");
        check.addEventListener("click", ()=>{
            if(check.checked == true){
                console.log("Checked");
                price.innerHTML = "$174.99 USD"    
            }else{
                console.log("unchecked")
                price.innerHTML = "$154.99 USD"
            }
        })       
}
// var head = document.getElementsByTagName('HEAD')[0]; 
  
//         var link = document.createElement('link');
//         link.rel = 'stylesheet'; 
//         link.type = 'text/css';
//         link.href = 'style.css'; 
//         head.appendChild(link); 



