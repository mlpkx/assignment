let main = document.querySelector('.main_box'); 
let mouse = document.querySelector('.mouse'); 
  
main.addEventListener('mousemove',  
 (e) => { 
  
  mouse.style.clipPath =  
    `circle(10em at ${e.offsetX}px ${e.offsetY}px)`; 
});