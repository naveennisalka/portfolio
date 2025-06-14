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

