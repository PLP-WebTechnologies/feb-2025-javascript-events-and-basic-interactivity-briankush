// Button click
const clickBtn = document.getElementById("clickBtn");
// Alert on button click
clickBtn.addEventListener("click", () => {
  alert("Button Clicked!");
});

// Hover effect
const hoverBox = document.getElementById("hoverBox");
// Scale up on mouse enter
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.transform = "scale(1.1)";
});
// Scale back on mouse leave
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.transform = "scale(1)";
});

// Keypress detection
const keyInput = document.getElementById("keyInput");
// Log key pressed to console
keyInput.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Secret action: double click or long press
const secretBtn = document.getElementById("secretBtn");
let longPressTimer;

// Alert on double click
secretBtn.addEventListener("dblclick", () => {
  alert("Double Click Activated!");
});

// Alert on long press (1 second)
secretBtn.addEventListener("mousedown", () => {
  longPressTimer = setTimeout(() => alert("Long Press Activated!"), 1000);
});

// Clear long press timer on mouse up
secretBtn.addEventListener("mouseup", () => clearTimeout(longPressTimer));

// Button that changes text or color
const changeBtn = document.getElementById("changeBtn");
let toggle = true;
// Toggle text and background color on click
changeBtn.addEventListener("click", () => {
  changeBtn.textContent = toggle ? "Changed!" : "Change Color/Text";
  changeBtn.style.backgroundColor = toggle ? "#28a745" : "#007bff";
  toggle = !toggle;
});

// Simple image slideshow with fade animation
const galleryImg = document.getElementById("galleryImg");
const nextImg = document.getElementById("nextImg");
const images = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=200&q=80",  // car
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=200&q=80",  // bike
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=200&q=80",  // car
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=200&q=80",  // bike
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&q=80"   // car
];
let currentImg = 0;
// Function to fade out and fade in image on change
function fadeImage(newSrc) {
  galleryImg.style.opacity = 0;
  setTimeout(() => {
    galleryImg.src = newSrc;
    galleryImg.style.opacity = 1;
  }, 300);
}
// Event listener for next image button
nextImg.addEventListener("click", () => {
  currentImg = (currentImg + 1) % images.length;
  fadeImage(images[currentImg]);
});

// Tabs functionality
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

// Add click event to each tab
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove("active"));
    // Hide all tab contents
    contents.forEach(c => (c.style.display = "none"));

    // Add active class to clicked tab and show its content
    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.target);
    target.style.display = "block";
  });
});

// Form validation
const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const feedback = document.getElementById("feedback");

// Validate form on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!/.+@.+\..+/.test(email.value)) {
    feedback.textContent = "Invalid email format";
  } else if (password.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters";
  } else {
    feedback.textContent = "Form Submitted Successfully!";
    feedback.style.color = "green";
  }
});

// Real-time feedback on password input
password.addEventListener("input", () => {
  feedback.textContent = password.value.length >= 8 ? "" : "Password too short";
});

// Real-time feedback for email input
email.addEventListener("input", () => {
  const emailValid = /.+@.+\..+/.test(email.value);
  feedback.textContent = emailValid ? "" : "Invalid email format";
});

// Real-time feedback for username input (check not empty)
const username = document.getElementById("username");
username.addEventListener("input", () => {
  feedback.textContent = username.value.trim() !== "" ? "" : "Username is required";
});
