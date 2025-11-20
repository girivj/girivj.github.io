document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navigation links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        // Close mobile menu if open
        const navList = document.querySelector('.nav-list');
        const menuToggle = document.querySelector('.menu-toggle');
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
            menuToggle.classList.remove('active'); // Optional: animate hamburger back
        }

        window.scrollTo({
          top: target.offsetTop - 80, // Adjusted offset for fixed header
          behavior: "smooth"
        });
      }
    });
  });

  // Navbar scroll effect (glassmorphism activation)
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
    // Optional: Add animation class to hamburger here if desired
  });

  // Typing Effect
  const typingText = document.querySelector(".typing-text");
  const words = ["AI Developer", "ML Enthusiast", "Data Scientist", "Innovator"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before next word
    }

    setTimeout(type, typeSpeed);
  }

  // Start typing effect
  if(typingText) {
      type();
  }

  // Scroll Animations (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    observer.observe(section);
  });
});
