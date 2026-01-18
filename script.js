document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Reset error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.style.display = 'none');

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Validate Full Name
    if (!fullName) {
        document.getElementById('fullNameError').textContent = 'Full Name is required.';
        document.getElementById('fullNameError').style.display = 'block';
        isValid = false;
    } else if (fullName.length < 2) {
        document.getElementById('fullNameError').textContent = 'Full Name must be at least 2 characters long.';
        document.getElementById('fullNameError').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email Address is required.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate Message
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If valid, you can proceed with form submission (e.g., send to a server)
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset(); // Reset the form
    }
});


class IntersectionObserverList {
    mapping;
    observer;
    constructor() {
        this.mapping = new Map();
        this.observer = new IntersectionObserver(
            (entries) => {
                for (var entry of entries) {
                    var callback = this.mapping.get(entry.target);

                    callback && callback(entry.isIntersecting);
                }
            },
            {
                rootMargin: "300px 0px 300px 0px"
            }
        );
    }
    add(element, callback) {
        this.mapping.set(element, callback);
        this.observer.observe(element);
    }
    ngOnDestroy() {
        this.mapping.clear();
        this.observer.disconnect();
    }
    remove(element) {
        this.mapping.delete(element);
        this.observer.unobserve(element);
    }
}
const observer = new IntersectionObserverList();

$(window).mousemove(function (e) {
    $(".ring").css(
        "transform",
        `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
    );
});

$('[data-animate="true"]').each(function (i) {
    console.log("$(this)", $(this));
    var element = $(this)[0];
    observer.add(element, (isIntersecting) => {
        if (isIntersecting) {
            $(this).addClass("animate-slide-down");
        } else {
            $(this).removeClass("animate-slide-down");
        }
    });
});


  function toggleMenu() {
    const menu = document.getElementById("menuBar");
    menu.classList.toggle("show");
  }


// Hamburger Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburgerMenu \u0026\u0026 navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            // Toggle active class on hamburger for animation
            hamburgerMenu.classList.toggle('active');
            
            // Toggle active class on nav links for dropdown
            navLinks.classList.toggle('active');
        });
        
        // Close dropdown when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item =\u003e {
            item.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = hamburgerMenu.contains(event.target) || navLinks.contains(event.target);
            
            if (!isClickInsideMenu \u0026\u0026 navLinks.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});


// Scroll-triggered Navbar (Hide on scroll down, show on scroll up)
let lastScrollTop = 0;
let scrollTimeout;
const navbar = document.querySelector('.menu-bar');
const scrollThreshold = 100; // px to scroll before hiding

window.addEventListener('scroll', function() {
    // Clear the timeout if it exists
    clearTimeout(scrollTimeout);
    
    // Add a small delay to prevent too frequent updates
    scrollTimeout = setTimeout(function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Don't hide navbar when at the very top
        if (currentScroll \u003c scrollThreshold) {
            navbar.classList.remove('nav-hidden');
            navbar.classList.add('nav-visible');
            lastScrollTop = currentScroll;
            return;
        }
        
        if (currentScroll \u003e lastScrollTop) {
            // Scrolling down - hide navbar
            navbar.classList.add('nav-hidden');
            navbar.classList.remove('nav-visible');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('nav-hidden');
            navbar.classList.add('nav-visible');
        }
        
        lastScrollTop = currentScroll \u003c= 0 ? 0 : currentScroll;
    }, 10);
}, false);

// Floating Navbar Scroll Animation
window.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.floating-navbar');
    const scrollThreshold = 100;
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll \u003c scrollThreshold) {
                navbar.classList.remove('nav-hidden');
                lastScrollTop = currentScroll;
                return;
            }
            
            if (currentScroll \u003e lastScrollTop) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            
            lastScrollTop = currentScroll \u003c= 0 ? 0 : currentScroll;
        }, false);
    }
});

// Mobile Navigation Toggle
window.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navItems = document.getElementById('navItems');
    
    if (navToggle && navItems) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navItems.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const links = navItems.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navItems.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navItems.contains(event.target)) {
                navToggle.classList.remove('active');
                navItems.classList.remove('active');
            }
        });
    }
});


// Custom Navigation Dropdown Menu
document.addEventListener('DOMContentLoaded', function() {
    const navMenuBtn = document.getElementById('navMenuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (navMenuBtn && dropdownMenu) {
        navMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenuBtn.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });
        
        // Close dropdown when clicking a link
        const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                navMenuBtn.classList.remove('active');
                dropdownMenu.classList.remove('active');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                navMenuBtn.classList.remove('active');
                dropdownMenu.classList.remove('active');
            }
        });
    }
});


// Mobile Menu Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    const userMenuBtn = document.getElementById('userMenuBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');
    
    if (userMenuBtn && mobileDropdown) {
        userMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking a link
        const dropdownItems = mobileDropdown.querySelectorAll('.mobile-dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileDropdown.classList.remove('active');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!userMenuBtn.contains(event.target) && !mobileDropdown.contains(event.target)) {
                mobileDropdown.classList.remove('active');
            }
        });
    }
});
