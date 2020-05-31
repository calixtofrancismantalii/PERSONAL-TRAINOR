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







//thanks god I finaly understand the process flow <3 <3 <3
//MUST DECLARE FIRST SLIDEINDEX
var slideIndex = 1;

function currentSlide(n){         
    showSlides(slideIndex = n);
}

function showSlides(n) {          
    var i;
    var slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    //Loop Repetition for array slides  display none;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex -1].style.display = "block";
}

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


