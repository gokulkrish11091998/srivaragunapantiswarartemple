// Global Variables
let slideIndex = 1;
let isTamil = true;  // Track current language (false = English, true = Tamil)

const protectedElement = document.getElementById('protectedText');
const original = protectedElement.dataset.original;

setInterval(() => {
  if (protectedElement.innerText !== original) {
    console.error("Text has been tampered with!");
    alert("Unauthorized change detected!");
    protectedElement.innerText = original; // Restore the original text
  }
}, 1000);

// Function to show the current slide
function showSlide(index) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
}

// Change slide on clicking arrow
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Set the slide directly from the dot
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Toggle between English and Tamil content
function toggleLanguage() {
    const englishElements = document.querySelectorAll('.home-caption, .about-heading, .about-content, .location-heading, .location-content, .link-english,.gallery-heading,.donation-heading,.scan-heading');
    const tamilElements = document.querySelectorAll('.home-caption-tamil, .about-heading-tamil, .about-content-tamil, .location-heading-tamil, .location-content-tamil , .link-tamil , .gallery-heading-tamil,.donation-heading-tamil,.scan-heading-tamil');
    
    if (isTamil) {
        englishElements.forEach(el => el.style.display = 'block');
        tamilElements.forEach(el => el.style.display = 'none');
        document.getElementById('language-toggle').innerText = "Switch to Tamil";
    } else {
        englishElements.forEach(el => el.style.display = 'none');
        tamilElements.forEach(el => el.style.display = 'block');
        document.getElementById('language-toggle').innerText = "Switch to English";
    }

    isTamil = !isTamil;
}

// Handle Back to Top Button
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToDonation() {
   
	var donationv = document.getElementById("donation");
    donationv.scrollIntoView();
}


function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active'); // Toggle the active class to show/hide the menu
}

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function copyToClipboard() {
  const textToCopy = document.getElementById('copyText').value;
  navigator.clipboard.writeText(textToCopy)
    .then(() => alert('Text copied: ' + textToCopy))
    .catch(err => console.error('Failed to copy text: ', err));
}

function copyToClipboard() {
  const copyText = document.getElementById('copyText');
  navigator.clipboard.writeText(copyText.value)
    .then(() => {
      alert('Text copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}

// Initialize slider and language toggle state
showSlide(slideIndex);
