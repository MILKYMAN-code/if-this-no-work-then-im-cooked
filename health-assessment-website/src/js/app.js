// This file contains the main functionality of the website, including navigation and interactive elements for the landing page.

document.addEventListener('DOMContentLoaded', function() {
    const assessmentLink = document.getElementById('assessment-link');
    const resourcesLink = document.getElementById('resources-link');

    if (assessmentLink) {
        assessmentLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'assessment.html';
        });
    }

    if (resourcesLink) {
        resourcesLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'resources.html';
        });
    }
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling DOWN - hide header
        header.classList.add('hide');
    } else {
        // Scrolling UP - show header
        header.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});