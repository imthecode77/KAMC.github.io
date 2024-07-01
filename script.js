//responsive navabar section
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    nav.classList.toggle("active");
  });

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();

    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("active");
        burger.classList.remove("toggle");
      }
    });
  });
});

//working of Rating and review section
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelector(".testimonial-content");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  let index = 0;

  nextButton.addEventListener("click", () => {
    if (index < testimonials.children.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateTestimonial();
  });

  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = testimonials.children.length - 1;
    }
    updateTestimonial();
  });

  function updateTestimonial() {
    testimonials.style.transform = `translateX(${-index * 100}%)`;
  }

  setInterval(() => {
    nextButton.click();
  }, 6500);
});

//Working of Get In Touch section
document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();

  var form = event.target;
  var formData = new FormData(form);
  let submitBTN = document.querySelector(".submitBTN");
  submitBTN.innerHTML = "Please Wait...";

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      localStorage.setItem("formSubmitted", "true");
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
      submitBTN.innerHTML = "Submit Now";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Message Send Failed!",
      });
    });
});

window.addEventListener("load", function () {
  let submitBTN = document.querySelector(".submitBTN");

  if (localStorage.getItem("formSubmitted") === "true") {
    submitBTN.innerHTML = "Submit Now";
    Swal.fire({
      title: "Good job!",
      text: "Message sent successfully!",
      icon: "success",
    });
    localStorage.removeItem("formSubmitted");
  }
});
