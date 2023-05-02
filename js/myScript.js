let ip1 = document.getElementById("ip1")
let ip2 = document.getElementById("ip2")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let clear = document.getElementById("clear")
let result = document.getElementById("result")

add.addEventListener("click",function(){
        let r = Number(ip1.value) + Number(ip2.value)
        result.classList.remove("visually-hidden")
        if(Number.isNaN(r))
        {
            result.innerHTML="Plz Enter number"
        }else{
            result.innerHTML=r
        }
})
sub.addEventListener("click",function(){
    let r = Number(ip1.value) - Number(ip2.value)
    result.classList.remove("visually-hidden")
    if(Number.isNaN(r))
    {
        result.innerHTML="Plz Enter number"
    }else{
        result.innerHTML=r
    }
})
clear.addEventListener("click",function(){
    result.classList.add("visually-hidden")
    ip1.value=""
    ip2.value=""
})