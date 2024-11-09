//Loader
document.addEventListener("DOMContentLoaded", function() {
  // Show the loader if loading takes longer than 2 seconds
  let loadTimeout = setTimeout(() => {
    document.getElementById("loader").style.display = "block";
  }, 2000); // time adjustment

  // Hide the loader once content is fully loaded
  window.addEventListener("load", () => {
    clearTimeout(loadTimeout);
    document.getElementById("loader").style.display = "none";
  });
});

//Popup
// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Automatically show the popup when the page loads
window.onload = function() {
  document.getElementById("popup").style.display = "flex";
};

//Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // If the link is to another HTML page, allow the default behavior
    if (href.endsWith('.html')) {
      // Let the link work normally
      return;
    }

    // Otherwise, handle smooth scrolling for internal links
    e.preventDefault();

    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

//Slogan
document.addEventListener("DOMContentLoaded", function () {
  const sloganElement = document.getElementById("slogan");
  const sloganText = "Connecting Heart and Mind...";
  let index = 0;

  function typeSlogan() {
    console.log("Typing:", sloganText.slice(0, index)); // Debug: Check each letter being typed
    sloganElement.textContent = sloganText.slice(0, index);
    index++;

    if (index <= sloganText.length) {
      setTimeout(typeSlogan, 150); // Adjust typing speed
    } else {
      setTimeout(() => {
        index = 0;
        typeSlogan();
      }, 3000); // Pause for 3 seconds before repeating
    }
  }

  sloganElement.style.fontFamily = "'Pacifico', cursive";
  sloganElement.style.fontSize = "24px";

  typeSlogan();
});

//Services

document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelectorAll(".service");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.3 } // Adjust the threshold to control when the animation triggers
  );

  services.forEach((service) => {
    observer.observe(service);
  });
});


//Slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Function to display the specified slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index); // Show only the active slide
  });

  // Update dot indicators
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Functions to navigate slides
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}

// Initialize the first slide as active
showSlide(currentSlideIndex);

// Auto SLide Timer
setInterval(nextSlide, 10000); 


//Hamburger Nav Bar
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}
