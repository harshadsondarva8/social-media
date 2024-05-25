$(document).ready(function () {
    $('.menu').click(function () {
        this.classList.toggle("change");
        document.getElementById("navbar").style.top = "0px";
    });
   
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-102px";
    }
    prevScrollpos = currentScrollPos;
}
console.log(prevScrollpos);
console.log(currentScrollPos);
//   <!-- Preloader -->
function myfunction() {
    document.getElementById('loading').style.display = 'none';
  }