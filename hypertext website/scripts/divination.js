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
    
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar.style.width === "0px" || sidebar.style.width === "") {
            sidebar.style.width = "250px"; 
        } else {
            sidebar.style.width = "0px";
        }
    }
    

    document.querySelector('.menu-icon').addEventListener('click', toggleSidebar);
});

document.addEventListener('click',function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.querySelector('.menu-icon');

    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.style.width = "0px";
    }
});
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.querySelector('.menu-icon');

    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.style.width = "0px";
    }
});
   
