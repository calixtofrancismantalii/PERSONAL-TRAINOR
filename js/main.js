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

//FOR STUDY

var slideIndex = 1;
showSlides(slideIndex); //showSlides (1);


function currentSlide(n){
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var smallImage = document.getElementsByClassName("smallImage");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < smallImage.length; i++) {
      smallImage[i].className = smallImage[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    smallImage[slideIndex-1].className += " active";
 
}
















////currentSlide
//function currentSlide(pos){
//    var imageL;
//    imageL = document.getElementsByClassName("imageL");
//    imageL[pos].style.display = "block";
//}











////clear currentSlide when it close
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


