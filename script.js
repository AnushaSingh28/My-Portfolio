// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add an event listener for each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link
        link.classList.add('active');

        // Get the section ID from the clicked link
        const sectionId = link.getAttribute('href').substring(1);

        // Scroll to the section smoothly
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
