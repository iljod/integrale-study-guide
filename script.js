// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            // Update active states
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Show target page, hide others
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.add('active');
                    // Smooth scroll to top
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    page.classList.remove('active');
                }
            });
        });
    });

    // Mobile menu toggle (if needed in future)
    function toggleMobileMenu() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + 1-4 for quick navigation
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    document.querySelector('[href="#home"]').click();
                    break;
                case '2':
                    e.preventDefault();
                    document.querySelector('[href="#basisconcepten"]').click();
                    break;
                case '3':
                    e.preventDefault();
                    document.querySelector('[href="#integratietechnieken"]').click();
                    break;
                case '4':
                    e.preventDefault();
                    document.querySelector('[href="#oefeningen"]').click();
                    break;
                case '5':
                    e.preventDefault();
                    document.querySelector('[href="#toepassingen"]').click();
                    break;
            }
        }
    });

    // Add smooth scrolling for anchor links within pages
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip navigation links that are handled above
            if (['#home', '#basisconcepten', '#integratietechnieken', '#oefeningen', '#toepassingen'].includes(href)) {
                return;
            }

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add search functionality (placeholder for future enhancement)
    function addSearchFunctionality() {
        // This could be implemented later to search within the content
        console.log('Search functionality ready for implementation');
    }

    // Initialize
    console.log('Integralen Study Gids loaded successfully');
});