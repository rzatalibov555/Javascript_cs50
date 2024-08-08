// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
    console.log(document.documentElement.scrollTop)
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

















//////////////////////////////////////////////////////////////////////////////////


// VanillaTilt.init(document.querySelector(".ch"), {
//     max: 55,
//     speed: 500,
//     glare: true,
//     gyroscope: true,
//     // perspective: 1000
//     reverse:true,
//     // reset: true
// });

// //It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".ch"));