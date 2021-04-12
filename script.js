const btn = document.getElementById("btn"); 
const container = document.getElementById("container")

btn.addEventListener("click", (e)=>{
    clickNotification(); 
})

function clickNotification(){
    const notif = document.createElement("div"); 
    notif.classList.add("toast");
    
    notif.innerText = 'This is creazy challenge'; 

    container.appendChild(notif); 
    setTimeout(()=>{
        notif.remove(); 
    }, 3000); 
}