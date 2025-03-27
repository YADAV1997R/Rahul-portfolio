// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        const navHeight = document.querySelector('nav').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - navHeight - 20,
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
            skill.style.transform = 'translateY(0)';
            skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            skill.style.opacity = '0';
            skill.style.transform = 'translateY(20px)';
            setTimeout(() => {
                skill.style.opacity = '1';
                skill.style.transform = 'translateY(0)';
            }, 50);
        }, index * 150);
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

    // Project Card Animation on Scroll
    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
});
