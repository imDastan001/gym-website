document.addEventListener("DOMContentLoaded", () => {
    let valuedisplays = document.querySelectorAll(".Customnum");
    let interval = 2000;


    const startCounting = (element) => {
        let startvalue = 0;
        let endvalue = parseInt(element.getAttribute("data-val"));
        let duration = Math.floor(interval / endvalue);
        let counter = setInterval(function () {
            startvalue += 1;
            element.textContent = startvalue + "+";
            if (startvalue >= endvalue) { 
                clearInterval(counter);
            }
        }, duration);
    };


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); 


    valuedisplays.forEach(valuedisplay => {
        observer.observe(valuedisplay);
    });
});
