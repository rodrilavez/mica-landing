// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById("signup");
    
    // Get the button that opens the modal
    const btn = document.querySelector(".btn-primary");
    
    // Get the <span> element that closes the modal
    const span = document.querySelector(".close");
    
    // Get the form
    const form = document.getElementById("signup-form");
    
    // When the user clicks on the button, open the modal
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Handle form submission
    form.onsubmit = function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your backend
        console.log(`Subscribed with email: ${email}`);
        
        // Show a thank you message
        form.innerHTML = '<p>Thank you for subscribing!</p>';
        
        // Close the modal after 2 seconds
        setTimeout(() => {
            modal.style.display = "none";
        }, 2000);
    }
});
