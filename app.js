
const listItems1 = document.getElementById("listItems1");
const icons = document.querySelectorAll("#icon");
const pic = document.getElementById("menu");
let check = false
function myCall(){
    const screenWidth = window.innerWidth;
    if(screenWidth < 780){
        listItems1.style.display = `none`
        pic.style.display = `block` 
        icons.forEach(function(val){
            val.style.display = 'none'
            check = true
           
        })
    } else {
        listItems1.style.display = `flex`
        pic.style.display = `none` 
        icons.forEach(function(val){
            val.style.display = 'flex'
        })
        
    }
  
}
window.addEventListener('resize',myCall)
