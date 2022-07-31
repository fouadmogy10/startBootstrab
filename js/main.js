const navbar = document.querySelector(".navbar");
window.onscroll = ()=> {
    if(window.scrollY > 500){
        navbar.classList.add("fixed-top")
    }else{
        navbar.classList.remove("fixed-top")
    }
}