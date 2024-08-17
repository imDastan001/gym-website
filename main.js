document.addEventListener("DOMContentLoaded", function() {
    fetch('Header.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('header').innerHTML = data;
      });
  
    fetch('Footer.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('footer').innerHTML = data;
      });
  });
     