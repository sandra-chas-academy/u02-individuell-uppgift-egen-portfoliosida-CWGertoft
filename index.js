let currentScroll = window.scrollY; // Store the current scroll position
let targetScroll = currentScroll; // Target scroll position for smooth scrolling
const scrollSpeed = 0.1; // Speed factor for smooth scrolling
const rotationSpeed = 2; // Speed factor for logo rotation

let isManualScroll = true; // Track if the scroll is manual

// Detect manual scroll events (scroll wheel or keyboard)
window.addEventListener("wheel", (e) => {
  isManualScroll = true;
  targetScroll = window.scrollY;
});

// Detect manual scroll on touch devices (mobile touch-scroll)
window.addEventListener("touchmove", () => {
  isManualScroll = true;
  targetScroll = window.scrollY;
});

// Prevent smooth scroll effect when manually scrolling (e.g., clicking on navbar links)
window.addEventListener("scroll", () => {
  if (!isManualScroll) return;
  targetScroll = window.scrollY;
});

// Handle clicks on internal links to temporarily disable smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    isManualScroll = false; // Temporarily disable smooth scroll

    const targetId = this.getAttribute("href").substring(1); // Get the target element ID
    const targetElement = document.getElementById(targetId); // Find the target element

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the target element

      // Re-enable smooth scroll after a short delay
      setTimeout(() => {
        isManualScroll = true;
        targetScroll = window.scrollY;
      }, 1000); // 1-second delay, adjust as needed
    }
  });
});

// Function for smooth scrolling and rotating the logo
function smoothScrollAndRotate() {
  if (isManualScroll) {
    // Smoothly adjust current scroll position toward target
    currentScroll += (targetScroll - currentScroll) * scrollSpeed;
    window.scrollTo(0, currentScroll); // Update window scroll position
  }

  // Calculate the rotation angle based on scroll position and rotationSpeed
  const rotationAngle = currentScroll / rotationSpeed;
  document.querySelector(".rotating-logo").style.transform = `rotate(${rotationAngle}deg)`; // Apply rotation to logo

  requestAnimationFrame(smoothScrollAndRotate); // Continuously call this function
}

// Start the combined smooth scroll and rotation function
smoothScrollAndRotate();
