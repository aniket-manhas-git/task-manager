let btn1=document.querySelector(".btn1");
let ul=document.querySelector("ul");
let clear=document.querySelector(".clear");

btn1.addEventListener("click",()=>{
    let text=document.querySelector("input");

    if(text.value.trim()=="")
    {
        return;
    }

    let li=document.createElement("li");
    let btn=document.createElement("button");
    btn.innerText = "delete";
    btn.classList.add("btn2");
    li.innerText = text.value;
    text.value="";
    li.appendChild(btn);
    ul.appendChild(li); 

});

ul.addEventListener("click",(e)=>{
    if (e.target.classList.contains("btn2")) {
        e.target.parentElement.remove();
    }
});

clear.addEventListener("click",()=>{
    ul.innerHTML="";
});