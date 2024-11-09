// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle fade-in effect
function handleFadeIn() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible'); // Add the visible class when in view
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', handleFadeIn);

// Initial check when the page loads
window.addEventListener('load', handleFadeIn);
