
let menu=document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");
let m=document.querySelector(".main-body")
let count=0;
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    
    m.style.marginTop="200px";
    count++;
    if(count%2==0){
        m.style.marginTop="0px";

    }

    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});


GitHubCalendar(".calendar", "vaishkiyarminal001", { responsive: true });
GitHubCalendar(".calendar", "vaishkiyarminal001", { responsive: true });


function resume(){
    window.open("https://drive.google.com/file/d/1zPeYlOWDVSYlvMKQUz8AD8Y36Tl0RvKp/view?usp=sharing")
}