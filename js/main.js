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


//currentSlide
function currentSlide(pos){
    var imageL;
    imageL = document.getElementsByClassName("imageL");
    imageL[pos].style.display = "block";
}

//clear currentSlide when it close
function clearCurrentSlide(){
    var imageL;
    imageL = document.getElementsByClassName("imageL");
    
    for(var i = 0; i < imageL.length; i++){
        imageL[i].style.display = "none"; 
    }
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


