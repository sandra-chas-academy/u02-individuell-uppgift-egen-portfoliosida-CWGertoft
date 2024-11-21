let currentScroll = window.scrollY; // Store the current scroll position
let targetScroll = currentScroll; // Target scroll position for smooth scrolling
const scrollSpeed = 1; // Speed factor for smooth scrolling
const rotationSpeed = 2; // Speed factor for logo rotation

let isManualScroll = true; // Track if the scroll is manual

// Detect manual scroll events
window.addEventListener("wheel", (e) => {
  isManualScroll = true;
  targetScroll = window.scrollY;
});

// Detect manual scroll on touch devices
window.addEventListener("touchmove", () => {
  isManualScroll = true;
  targetScroll = window.scrollY;
});

// Prevent smooth scroll effect when manually scrolling
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
      }, 1000); // 1-second delay
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


// Popup modal cv section
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalPdf = document.createElement('iframe'); // Dynamically handle PDFs
modalPdf.id = 'modalPdf';
modalPdf.style.display = 'none'; // Initially hidden
modal.appendChild(modalPdf); // Append to modal
const closeModal = document.getElementById('closeModal');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const externalLink = document.getElementById('externalLink');

// Media items (images and PDFs)
const mediaItems = [
  {
    type: 'image',
    src: "images/resume.svg",
    alt: "Mitt CV",
    link: null
  },
  {
    type: 'pdf',
    src: "images/examensbevis.pdf",
    alt: "Examensbevis",
    link: "https://verify.trueoriginal.com/4D3B0FD6-3C77-87B2-59B3-60D37CE95EAE/?ref=direct-copy"
  }
];

let currentIndex = 0;

// Show modal with appropriate content
function showModal(index) {
  currentIndex = index;
  const item = mediaItems[currentIndex];

  if (item.type === 'image') {
    modalPdf.style.display = 'none'; // Hide PDF
    modalImage.style.display = 'block'; // Show image
    modalImage.src = item.src;
    modalImage.alt = item.alt;
  } else if (item.type === 'pdf') {
    modalImage.style.display = 'none'; // Hide image
    modalPdf.style.display = 'block'; // Show PDF
    modalPdf.src = item.src;
    modalPdf.style.width = '80%'; // Make it responsive
    modalPdf.style.height = '80vh';
    modalPdf.style.border = 'none'; // No border
  }

  // Show external link if available
  if (item.link) {
    externalLink.href = item.link;
    externalLink.removeAttribute('hidden');
  } else {
    externalLink.setAttribute('hidden', '');
  }

  modal.removeAttribute('hidden'); // Show the modal
}

// Close modal
function closeModalHandler() {
  modal.setAttribute('hidden', '');
  modalImage.style.display = 'none';
  modalPdf.style.display = 'none';
}

// Navigate to the next media item
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % mediaItems.length;
  showModal(currentIndex);
});

// Navigate to the previous media item
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
  showModal(currentIndex);
});

// Add event listeners for opening the modal
document.getElementById('cvPreview').addEventListener('click', () => showModal(0));
document.getElementById('examPreview').addEventListener('click', () => showModal(1));

// Close modal with the close button
closeModal.addEventListener('click', closeModalHandler);

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === "Escape" && !modal.hasAttribute('hidden')) {
    closeModalHandler();
  }
});


// Mail functionality

const mailLink = document.getElementById('mail-link');
const mailPopup = document.getElementById('mail-popup');
const closeMailPopup = document.getElementById('close-mail-popup');

// Show the popup when the "Mail" link is clicked
mailLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  mailPopup.hidden = false; // Show the popup
});

// Close the popup
closeMailPopup.addEventListener('click', () => {
  mailPopup.hidden = true; // Hide the popup
});

// Close the popup if clicking outside of the form
window.addEventListener('click', (event) => {
  if (event.target === mailPopup) {
    mailPopup.hidden = true;
  }
});
