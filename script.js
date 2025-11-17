// FAQ Toggle Function
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const isActive = answer.classList.contains('active');
    
    // Close all FAQ answers
    document.querySelectorAll('.faq-answer').forEach(item => {
        item.classList.remove('active');
    });
    
    // Remove active class from all questions
    document.querySelectorAll('.faq-question').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isActive) {
        answer.classList.add('active');
        button.classList.add('active');
    }
}

// About Section Toggle Function (kept for compatibility)
function toggleAbout() {
    const content = document.getElementById('aboutContent');
    const button = document.querySelector('.about-toggle');
    
    if (content && button) {
        content.classList.toggle('active');
        button.classList.toggle('active');
    }
}

// About Details Toggle Function
function toggleAboutDetails() {
    const content = document.getElementById('aboutDetailsContent');
    const button = document.querySelector('.about-details-toggle');
    
    content.classList.toggle('active');
    button.classList.toggle('active');
}

// Footer Toggle Function
function toggleFooter() {
    const content = document.getElementById('footerContent');
    const button = document.querySelector('.footer-toggle');
    
    content.classList.toggle('active');
    button.classList.toggle('active');
}

// Testimonials Toggle Function
function toggleTestimonials() {
    const moreTestimonials = document.getElementById('moreTestimonials');
    const button = document.getElementById('testimonialsBtn');
    const buttonText = document.getElementById('testimonialsBtnText');
    const buttonIcon = document.getElementById('testimonialsBtnIcon');
    
    const isActive = moreTestimonials.classList.contains('active');
    
    if (isActive) {
        moreTestimonials.classList.remove('active');
        button.classList.remove('active');
        buttonText.textContent = 'További vélemények';
    } else {
        moreTestimonials.classList.add('active');
        button.classList.add('active');
        buttonText.textContent = 'Kevesebb vélemény';
    }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
