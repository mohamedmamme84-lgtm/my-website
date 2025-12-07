function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusText.textContent = "Message Sent! (demo only)";
    statusText.style.color = "green";
    form.reset();
  });
}
