// Dark Magic Cyber Security JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');
            
            const targetUrl = new URL(this.href);
            const currentUrl = new URL(window.location.href);

            // Check if the link is to a section on the current page or index.html
            if (targetUrl.pathname === currentUrl.pathname || (targetUrl.pathname === '/index.html' && currentUrl.pathname === '/') || (targetUrl.pathname === '/' && currentUrl.pathname === '/index.html')) {
                if (targetUrl.hash) {
                    e.preventDefault(); // Prevent default jump
                    const targetElement = document.getElementById(targetUrl.hash.substring(1));

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });

                        // Update active nav link
                        navLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                    }
                }
            } else if (targetHref.endsWith('.html')) {
                // Allow default navigation for .html files to other pages
                // No e.preventDefault() needed here
            }
        });
    });

    

    // Enhanced mouse movement magic effect
    document.addEventListener('mousemove', function(e) {
        // Throttle the effect for performance
        if (Math.random() > 0.7) {
            const cursor = document.createElement('div');
            cursor.className = 'magic-cursor';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Random colors for cursor trail
            const colors = ['#8A2BE2', '#9370DB', '#FF6B35', '#00FF00'];
            cursor.style.background = colors[Math.floor(Math.random() * colors.length)];
            cursor.style.boxShadow = `0 0 10px ${cursor.style.background}`;
            
            document.body.appendChild(cursor);
            
            setTimeout(() => {
                cursor.remove();
            }, 1000);
        }
    });

    // Scroll-based navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
        
        
    });

    // Enhanced mystical orb interaction
    const orbCore = document.querySelector('.orb-core');
    const orbRings = document.querySelectorAll('.orb-ring');
    
    if (orbCore) {
        orbCore.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease-in-out infinite';
            this.style.boxShadow = '0 0 150px #8A2BE2, 0 0 200px #8A2BE2';
            
            orbRings.forEach((ring, index) => {
                ring.style.borderColor = '#8A2BE2';
                ring.style.animation = `rotate ${1 + index}s linear infinite`;
                ring.style.borderWidth = '3px';
            });
            
            // Create energy burst effect
            createEnergyBurst(this);
        });
        
        orbCore.addEventListener('mouseleave', function() {
            this.style.animation = 'pulse 2s ease-in-out infinite';
            this.style.boxShadow = '0 0 100px #8A2BE2';
            
            orbRings.forEach((ring, index) => {
                ring.style.borderColor = 'rgba(138, 43, 226, 0.5)';
                ring.style.animation = `rotate ${8 + index * 4}s linear infinite`;
                ring.style.borderWidth = '2px';
            });
        });
        
        orbCore.addEventListener('click', function() {
            // Orb explosion effect
            const explosion = document.createElement('div');
            explosion.className = 'magic-explosion';
            explosion.style.position = 'absolute';
            explosion.style.width = '300px';
            explosion.style.height = '300px';
            explosion.style.background = 'radial-gradient(circle, rgba(138, 43, 226, 0.8), transparent)';
            explosion.style.borderRadius = '50%';
            explosion.style.top = '50%';
            explosion.style.left = '50%';
            explosion.style.transform = 'translate(-50%, -50%)';
            explosion.style.animation = 'explode 1s ease-out forwards';
            
            this.parentElement.appendChild(explosion);
            
            setTimeout(() => {
                explosion.remove();
            }, 1000);
        });
    }

    // Enhanced arsenal cards hover effects
    const arsenalCards = document.querySelectorAll('.arsenal-card');
    arsenalCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(138, 43, 226, 0.2)';
            this.style.borderColor = '#8A2BE2';
            this.style.boxShadow = '0 20px 40px rgba(138, 43, 226, 0.4)';
            
            // Add magical sparkles
            createSparkles(this);
            
            // Animate card icon
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.animation = 'float 0.5s ease-in-out infinite';
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(138, 43, 226, 0.1)';
            this.style.borderColor = 'rgba(138, 43, 226, 0.3)';
            this.style.boxShadow = 'none';
            
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.animation = 'float 3s ease-in-out infinite';
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Enhanced sparkle effect
    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 10; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = (window.scrollX + rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (window.scrollY + rect.top + Math.random() * rect.height) + 'px';
            
            // Random sparkle colors
            const colors = ['#8A2BE2', '#9370DB', '#FF6B35', '#00FF00'];
            sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }
    }

    // Energy burst effect
    function createEnergyBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 12; i++) {
            const energy = document.createElement('div');
            energy.style.position = 'fixed';
            energy.style.width = '3px';
            energy.style.height = '20px';
            energy.style.background = 'linear-gradient(0deg, #8A2BE2, transparent)';
            energy.style.left = centerX + 'px';
            energy.style.top = centerY + 'px';
            energy.style.transformOrigin = 'bottom';
            energy.style.transform = `rotate(${i * 30}deg)`;
            energy.style.animation = 'energyBurst 0.8s ease-out forwards';
            energy.style.pointerEvents = 'none';
            energy.style.zIndex = '1000';
            
            document.body.appendChild(energy);
            
            setTimeout(() => {
                energy.remove();
            }, 800);
        }
    }

    // Enhanced stats counter animation
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            const duration = 3000;
            const startTime = performance.now();
            
            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(easeOutQuart * finalValue);
                
                stat.textContent = currentValue + (stat.textContent.includes('+') ? '+' : '');
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    // Add final glow effect
                    stat.style.textShadow = '';
                    setTimeout(() => {
                        stat.style.textShadow = '';
                    }, 500);
                }
            }
            
            stat.textContent = '0' + (stat.textContent.includes('+') ? '+' : '');
            requestAnimationFrame(updateCounter);
        });
    }

    // Enhanced intersection observer for stats animation
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }

    // Enhanced hero buttons interaction
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Create magical explosion effect
            const explosion = document.createElement('div');
            explosion.className = 'magic-explosion';
            explosion.style.position = 'absolute';
            explosion.style.width = '150px';
            explosion.style.height = '150px';
            explosion.style.background = 'radial-gradient(circle, #8A2BE2, transparent)';
            explosion.style.borderRadius = '50%';
            explosion.style.left = '50%';
            explosion.style.top = '50%';
            explosion.style.transform = 'translate(-50%, -50%)';
            explosion.style.animation = 'explode 0.8s ease-out forwards';
            explosion.style.pointerEvents = 'none';
            explosion.style.zIndex = '1000';
            
            this.style.position = 'relative';
            this.appendChild(explosion);
            
            // Button shake effect
            this.style.animation = 'shake 0.5s ease-in-out';
            
            setTimeout(() => {
                explosion.remove();
                this.style.animation = '';
            }, 800);
        });
    });

    // Enhanced Time Stone interaction
    const timeStone = document.querySelector('.time-stone');
    if (timeStone) {
        timeStone.addEventListener('click', function() {
            const core = this.querySelector('.time-stone-core');
            const aura = this.querySelector('.time-stone-aura');
            const particles = this.querySelectorAll('.time-particle');
            
            // Time manipulation effect
            core.style.animation = 'timeGlow 0.2s ease-in-out infinite';
            core.style.transform = 'scale(1.2)';
            aura.style.animation = 'auraExpand 0.5s ease-in-out infinite';
            
            particles.forEach((particle, index) => {
                particle.style.animation = `timeParticleFloat 0.5s ease-in-out infinite`;
                particle.style.animationDelay = `${index * 0.1}s`;
            });
            
            // Create time ripples
            createTimeRipples(this);
            
            // Reset after 5 seconds
            setTimeout(() => {
                core.style.animation = 'timeGlow 2s ease-in-out infinite alternate';
                core.style.transform = 'scale(1)';
                aura.style.animation = 'auraExpand 3s ease-in-out infinite';
                
                particles.forEach((particle, index) => {
                    particle.style.animation = `timeParticleFloat 4s ease-in-out infinite`;
                    particle.style.animationDelay = `${index}s`;
                });
            }, 5000);
        });
    }

    // Enhanced Darkhold book interaction
    const darkholdBook = document.querySelector('.darkhold-book');
    if (darkholdBook) {
        darkholdBook.addEventListener('click', function() {
            const cover = this.querySelector('.book-cover');
            const symbol = this.querySelector('.book-symbol');
            const runes = this.querySelectorAll('.rune');
            const energyLines = this.querySelectorAll('.energy-line');
            const aura = this.parentElement.querySelector('.darkhold-aura');
            
            // Dark magic activation
            cover.style.boxShadow = '0 0 80px rgba(255, 0, 0, 0.9)';
            cover.style.transform = 'scale(1.1)';
            symbol.style.animation = 'symbolPulse 0.3s ease-in-out infinite';
            symbol.style.transform = 'scale(1.3)';
            
            runes.forEach((rune, index) => {
                rune.style.animation = `runePulse 0.3s ease-in-out infinite`;
                rune.style.animationDelay = `${index * 0.05}s`;
                rune.style.transform = 'scale(1.2)';
            });
            
            energyLines.forEach((line, index) => {
                line.style.animation = `energyFlow 0.5s ease-in-out infinite`;
                line.style.animationDelay = `${index * 0.1}s`;
            });
            
            if (aura) {
                aura.style.animation = 'darkholdAura 1s ease-in-out infinite';
            }
            
            // Create dark energy burst
            createDarkEnergyBurst(this);
            
            // Reset after 3 seconds
            setTimeout(() => {
                cover.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.6)';
                cover.style.transform = 'scale(1)';
                symbol.style.animation = 'symbolPulse 3s ease-in-out infinite';
                symbol.style.transform = 'scale(1)';
                
                runes.forEach((rune, index) => {
                    rune.style.animation = 'runePulse 2s ease-in-out infinite';
                    rune.style.animationDelay = `${index * 0.5}s`;
                    rune.style.transform = 'scale(1)';
                });
                
                energyLines.forEach((line, index) => {
                    line.style.animation = `energyFlow 2s ease-in-out infinite`;
                    line.style.animationDelay = `${index * 0.7}s`;
                });
                
                if (aura) {
                    aura.style.animation = 'darkholdAura 4s ease-in-out infinite';
                }
            }, 3000);
        });
    }

    // Create time ripples effect
    function createTimeRipples(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 5; i++) {
            const ripple = document.createElement('div');
            ripple.style.position = 'fixed';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.border = '2px solid #00FF00';
            ripple.style.borderRadius = '50%';
            ripple.style.left = centerX + 'px';
            ripple.style.top = centerY + 'px';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'rippleExpand 2s ease-out forwards';
            ripple.style.animationDelay = `${i * 0.3}s`;
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '1000';
            
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 2000 + (i * 300));
        }
    }

    // Create dark energy burst effect
    function createDarkEnergyBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 16; i++) {
            const energy = document.createElement('div');
            energy.style.position = 'fixed';
            energy.style.width = '2px';
            energy.style.height = '30px';
            energy.style.background = 'linear-gradient(0deg, #FF0000, transparent)';
            energy.style.left = centerX + 'px';
            energy.style.top = centerY + 'px';
            energy.style.transformOrigin = 'bottom';
            energy.style.transform = `rotate(${i * 22.5}deg)`;
            energy.style.animation = 'energyBurst 1s ease-out forwards';
            energy.style.pointerEvents = 'none';
            energy.style.zIndex = '1000';
            
            document.body.appendChild(energy);
            
            setTimeout(() => {
                energy.remove();
            }, 1000);
        }
    }

    // Inject missing keyframes
    function addKeyframes() {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes energyBurst {
                from {
                    transform: scaleY(0) rotate(var(--angle, 0deg));
                    opacity: 1;
                }
                to {
                    transform: scaleY(1) rotate(var(--angle, 0deg));
                    opacity: 0;
                }
            }

            @keyframes rippleExpand {
                from {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                to {
                    transform: translate(-50%, -50%) scale(20);
                    opacity: 0;
                }
            }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Create magical dust effect
    function createMagicDust() {
        const container = document.getElementById('magic-dust-container');
        if (!container) return;

        for (let i = 0; i < 100; i++) {
            const dust = document.createElement('div');
            dust.className = 'dust-particle';
            dust.style.left = `${Math.random() * 100}vw`;
            dust.style.top = `${Math.random() * 100}vh`;
            dust.style.animationDuration = `${Math.random() * 10 + 10}s`;
            dust.style.animationDelay = `${Math.random() * 10}s`;
            container.appendChild(dust);
        }
    }

    // Initialize everything
    createMagicDust();
    addKeyframes();

    // Search functionality for HTB writeups
    const writeupSearchInput = document.getElementById('writeup-search');
    if (writeupSearchInput) {
        writeupSearchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const writeupBoxes = document.querySelectorAll('.writeup-box');

            writeupBoxes.forEach(box => {
                const title = box.querySelector('.writeup-box-title').textContent.toLowerCase();
                const subtitle = box.querySelector('.writeup-box-subtitle').textContent.toLowerCase();

                if (title.includes(searchTerm)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }

    // Add this new function for the ripple effect
    document.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.className = 'magic-ripple';
        document.body.appendChild(ripple);

        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;

        ripple.addEventListener('animationend', () => {
            document.body.removeChild(ripple);
        });
    });

    });
