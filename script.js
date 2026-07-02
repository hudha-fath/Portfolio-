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
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=form.querySelector("input[type='text']").value.trim();
    const email=form.querySelector("input[type='email']").value.trim();
    const message=form.querySelector("textarea").value.trim();
    if(name==="" || email==="" || message===""){
        alert("Please fill all the fields.");
        return;
    }
    alert("Thank you! Your message has been received.");
    form.reset();
});
const navbar=document.querySelector("nav");
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        navbar.style.background="#020617";
    }
    else{
     navbar.style.background="rgba(15,23,42,.95)";
    }
});