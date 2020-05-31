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









//galing w3school copy paste lang boset
//medyo naiintindihan ko na

//MUST DECLARE FIRST SLIDEINDEX
var slideIndex = 1;

function currentSlide(n){          //ONCLICK = "currentSlide()"
    showSlides(slideIndex = n);
}

function showSlides(n) {           //SELF invoke FUNCTION
    var i;
    var slides = document.getElementsByClassName("slides");
    var smallImage = document.getElementsByClassName("smallImage");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    
    //Loop Repetition for array slides  display none;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex -1].style.display = "block";
     

 
}

function plusSlides(n) {           //ONCLICK = "plusSlide(-1); plusSlide(1)"
    showSlides(slideIndex += n);
}














////DISPLAY BLOCK CURRENT SLIDE ALWAYS

//function currentSlide(pos){
//    var imageL;
//    imageL = document.getElementsByClassName("imageL");
//    imageL[pos].style.display = "block";
//}


////CLEAR CURRENTSLIDE ALWAYS

//function clearCurrentSlide(){
//    var imageL;
//    imageL = document.getElementsByClassName("imageL");
//    
//    for(var i = 0; i < imageL.length; i++){
//        imageL[i].style.display = "none"; 
//    }
//}




































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


