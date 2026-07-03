const typingElement = document.getElementById("typing");
const roles = [
    "Full Stack Developer",
    "React Developer",
    "Java Programmer",
    "Python Developer",
    "Final Year B.Tech Student"
];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
function typeEffect() {
    const currentRole = roles[roleIndex];
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
            roleIndex++;
            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }
    setTimeout(typeEffect, deleting ? 60 : 120);
}
typeEffect();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const revealElements = document.querySelectorAll(
".skill-card,.project-card,.education-card,.about-container,.hero-text,.hero-image,.contact-container"
);
function reveal() {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    }
    else {
        topBtn.style.display = "none";
    }
});
topBtn.onclick = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

const navbar=document.querySelector("nav");
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        navbar.style.background="#020617";
    }
    else{
     navbar.style.background="rgba(15,23,42,.95)";
    }
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        alert(result.message);

        contactForm.reset();

    } catch (error) {
        alert("Something went wrong!");
        console.log(error);
    }
});