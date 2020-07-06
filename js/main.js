//toggle
function openToggle(){
    var ul, header;
    ul = document.getElementById("ul");
    header = document.getElementById("header");
    
    if(ul.style.height === "0px"){
        ul.style.height = "360px";
        header.style.backgroundColor = "rgba(0,0,0,0.50)";
    }
    else{
        ul.style.height = "0px";
        header.style.backgroundColor = "rgba(0,0,0,0.0)";
    }
}

//close dropdown after click
function closeLinks(){
    var ul, header;
    ul = document.getElementById("ul");
    header = document.getElementById("header");
    ul.style.height = "0px";
    header.style.backgroundColor = "rgba(0,0,0,0.0)";
}

//openModal
function openModal(num){
    var modal;
    modal = document.getElementById("modal");
    modal.style.display = "block"
}

//for close modal
function cls(){
    var modal;
    modal = document.getElementById("modal");
    modal.style.display = "none";
}


//hide and show navbar on scroll up and scroll down

var lastScrollTop, header;
lastScrollTop = 0;
header = document.getElementById("header");

window.addEventListener("scroll", function(){
    var scrollTop = pageYOffset || document.getElement.scrollTop;
    
    if(scrollTop > lastScrollTop){
        header.style.top = "-85px";
    }
    else{
        header.style.top = "0px";
        header.style.backgroundColor = "rgba(0,0,0,0.50)";//header background show when top equal to 0px
    }
    lastScrollTop = scrollTop;
})














//thanks god I finaly understand the process flow <3 <3 <3

//you need first to declare initial index position of array equals to 1
var slideIndex = 1;
//this function execute the showSlides function with parameter and the result is to display the selected image as currentSlide;
function currentSlide(n){         
    showSlides(slideIndex = n);
}

//this fucntion contains following codes to execute:
function showSlides(n) {  
    //declarations
    var i;
    var slides = document.getElementsByClassName("slides");
    //if condition
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    //Loop Repetition for array slides  display none;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //display the value of array index position;
    slides[slideIndex -1].style.display = "block";
}

//this function add parameter value 1 to slideIndex and execute the showSlides function
function plusSlides(n) {          
    showSlides(slideIndex += n);
}











































//foraccordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


