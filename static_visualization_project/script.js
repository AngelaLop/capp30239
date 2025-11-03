// Navigation and scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    const sidebarContents = document.querySelectorAll('.sidebar-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const rightSidebar = document.querySelector('.right-sidebar');
    const mainContent = document.querySelector('.main-content');
    
    let currentSectionIndex = 0;

    // Function to update active states
    function updateActiveStates() {
        const scrollPosition = window.scrollY + 200; // Offset for header

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            // Check if section is in view
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const previousIndex = currentSectionIndex;
                currentSectionIndex = index;
                
                // All sections behave the same - no special handling needed

                // Update sidebar content
                sidebarContents.forEach(content => {
                    content.classList.remove('active');
                });
                
                // Special handling for subnational inequalities section (index 3)
                if (index === 3) {
                    // Find which figure is currently in view
                    const figures = section.querySelectorAll('figure[data-graph-type]');
                    let activeGraphType = null;
                    const viewportCenter = window.innerHeight / 2 + window.scrollY;
                    
                    figures.forEach(figure => {
                        const rect = figure.getBoundingClientRect();
                        const figureCenter = rect.top + rect.height / 2 + window.scrollY;
                        
                        // Check if figure center is in viewport center area
                        if (Math.abs(figureCenter - viewportCenter) < window.innerHeight / 3) {
                            activeGraphType = figure.getAttribute('data-graph-type');
                        }
                    });
                    
                    // Fallback: check which figure is most in view
                    if (!activeGraphType && figures.length > 0) {
                        let closestFigure = null;
                        let closestDistance = Infinity;
                        
                        figures.forEach(figure => {
                            const rect = figure.getBoundingClientRect();
                            const figureTop = rect.top + window.scrollY;
                            const figureBottom = figureTop + rect.height;
                            const viewportTop = window.scrollY;
                            const viewportBottom = window.scrollY + window.innerHeight;
                            
                            // Check how much of figure is visible
                            const visibleTop = Math.max(figureTop, viewportTop);
                            const visibleBottom = Math.min(figureBottom, viewportBottom);
                            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                            
                            if (visibleHeight > rect.height * 0.3) { // At least 30% visible
                                const centerDistance = Math.abs((figureTop + figureBottom) / 2 - (viewportTop + viewportBottom) / 2);
                                if (centerDistance < closestDistance) {
                                    closestDistance = centerDistance;
                                    closestFigure = figure;
                                }
                            }
                        });
                        
                        if (closestFigure) {
                            activeGraphType = closestFigure.getAttribute('data-graph-type');
                        } else {
                            // Default to first figure type
                            activeGraphType = figures[0].getAttribute('data-graph-type');
                        }
                    }
                    
                    // Show corresponding sidebar content
                    if (activeGraphType === 'health') {
                        const healthContent = document.querySelector('[data-content="3-health"]');
                        if (healthContent) {
                            healthContent.classList.add('active');
                        }
                    } else if (activeGraphType === 'education') {
                        const educationContent = document.querySelector('[data-content="3-education"]');
                        if (educationContent) {
                            educationContent.classList.add('active');
                        }
                    }
                } else {
                    // Regular section handling
                    const correspondingContent = document.querySelector(`[data-content="${index}"]`);
                    if (correspondingContent) {
                        correspondingContent.classList.add('active');
                    }
                }

                // Update nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }


    // Update on scroll
    window.addEventListener('scroll', updateActiveStates);

    // Update on initial load
    updateActiveStates();

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
