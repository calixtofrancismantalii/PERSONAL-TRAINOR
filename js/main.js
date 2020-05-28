//for modal display
function a(tap){
    var modal, pic;
    modal = document.getElementById("modal");
    pic = document.getElementById("pic");
    
    
    modal.style.display = "block";
    pic.src = tap;
}








//for close modal
var close, modal;
close = document.getElementById("close");
modal = document.getElementById("modal");

close.onclick = function(){
    modal.style.display = "none";
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


