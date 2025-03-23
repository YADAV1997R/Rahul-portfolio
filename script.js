// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        const navHeight = document.querySelector('nav').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - navHeight - 10,
            behavior: 'smooth'
        });
    });
});

// Skills Fade-In Animation
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-item');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transition = 'opacity 0.5s ease-in';
        }, index * 200);
    });

    // Banner Interactivity
    const banner = document.querySelector('.banner');
    banner.addEventListener('click', () => {
        banner.style.transform = 'scale(1.05)';
        setTimeout(() => {
            banner.style.transform = 'scale(1)';
            alert('Welcome to Rahul\'s Portfolio!');
        }, 200);
    });
});