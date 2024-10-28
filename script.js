// Efek animasi scroll muncul
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
  
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          section.classList.add("visible");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const skillItems = document.querySelectorAll(".skills-list li");
    const hobbyItems = document.querySelectorAll(".hobbies-list li");
  
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          section.classList.add("visible");
        }
      });
  
      // Tambahkan kelas visible untuk skill dan hobby items saat bergulir
      skillItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight * 0.8) {
          item.classList.add("visible");
        }
      });
  
      hobbyItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight * 0.8) {
          item.classList.add("visible");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector("header h1");
    
    // Tambahkan kelas 'animated' setelah halaman dimuat
    setTimeout(() => {
      nameElement.classList.add("animated");
    }, 500);
  });