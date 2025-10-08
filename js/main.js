// Main JavaScript functionality for Pablo Recio's portfolio

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var href = anchor.getAttribute('href');
        if (!href || href === '#') { return; }
        var target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Project buttons (no :contains selector; filter by text)
Array.prototype.forEach.call(document.querySelectorAll('button'), function (button) {
    var text = (button.textContent || '').trim();
    if (text === 'View Project' || text.indexOf('View Project') !== -1) {
        button.addEventListener('click', function () {
            var card = button.closest('.rounded-lg');
            var title = card ? card.querySelector('h3') : null;
            var projectName = title ? title.textContent.trim() : 'Project';
            alert('Opening project: ' + projectName + '\n\nDirect link coming soon!');
        });
    }
});

// Experience cards accordion functionality
function initExperienceAccordion() {
    const cards = document.querySelectorAll('.experience-card');
    const STORAGE_KEY = 'experience-open-card';

    // Get last opened card from localStorage
    const lastOpenCard = localStorage.getItem(STORAGE_KEY);
    let currentOpenCard = lastOpenCard ? parseInt(lastOpenCard) : 0;

    // Initialize cards
    cards.forEach((card, index) => {
        const content = card.querySelector('.experience-content');
        const toggle = card.querySelector('.experience-toggle');

        if (index === currentOpenCard) {
            content.classList.add('open');
            toggle.classList.add('open');
        } else {
            content.classList.remove('open');
            toggle.classList.remove('open');
        }

        // Add click handler ONLY on the toggle arrow
        if (toggle) {
            toggle.addEventListener('click', function (e) {
                e.stopPropagation();
                // Close all other cards
                cards.forEach((otherCard, otherIndex) => {
                    if (otherIndex !== index) {
                        const otherContent = otherCard.querySelector('.experience-content');
                        const otherToggle = otherCard.querySelector('.experience-toggle');
                        if (otherContent) otherContent.classList.remove('open');
                        if (otherToggle) otherToggle.classList.remove('open');
                    }
                });

                // Toggle current card
                const isOpen = content.classList.contains('open');
                if (isOpen) {
                    content.classList.remove('open');
                    toggle.classList.remove('open');
                    currentOpenCard = -1; // No card open
                } else {
                    content.classList.add('open');
                    toggle.classList.add('open');
                    currentOpenCard = index;
                }

                // Save to localStorage
                localStorage.setItem(STORAGE_KEY, currentOpenCard.toString());
            });
        }
    });
}

// Initialize accordion when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExperienceAccordion);
} else {
    initExperienceAccordion();
}
