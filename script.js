// Typing Effect

const roles = [
    "Frontend Developer",
    "Web Development Enthusiast",
    "WordPress Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    let currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// Dark Light Mode

const toggleBtn = document.getElementById("theme-toggle");
const overlay = document.querySelector(".theme-overlay");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {

    overlay.classList.add("active");

    setTimeout(() => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

    }, 300);

    setTimeout(() => {
        overlay.classList.remove("active");
    }, 700);

});



// Scroll Progress Bar

window.addEventListener("scroll", () => {

    let scrollTop =
        document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";
});


// Back To Top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Contact Form

const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();  // ← this stops the redirect
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  });
  if (response.ok) {
    form.reset();
    alert("Thank you! Your message has been sent.");
  } else {
    alert("Oops! Something went wrong. Please try again.");
  }
});