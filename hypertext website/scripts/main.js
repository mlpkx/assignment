document.addEventListener("DOMContentLoaded", function() {
    let timeElement = document.querySelector(".current-time");

    function updateTime() {
        let d = new Date();
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        timeElement.innerHTML = d.toLocaleDateString('en-US', options) 
    }
    
    updateTime();
    setInterval(updateTime, 1000);  
    

   
})
