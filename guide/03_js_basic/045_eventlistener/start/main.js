const h1Element  = document.querySelector('h1')
h1Element.textContent = "text"
console.log(h1Element.textContent)

const addClick = document.getElementById("addClick")
addClick.addEventListener('click',()=>{
    console.log("hello")
})