// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
console.log(scrollToTopBtn);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });

});
