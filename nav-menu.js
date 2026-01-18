// Mobile Dropdown Menu Toggle
(function() {
    console.log('Navigation script loaded');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
    
    function initNavigation() {
        const userMenuBtn = document.getElementById('userMenuBtn');
        const mobileDropdown = document.getElementById('mobileDropdown');
        
        console.log('User Menu Button:', userMenuBtn);
        console.log('Mobile Dropdown:', mobileDropdown);
        
        if (!userMenuBtn || !mobileDropdown) {
            console.error('Navigation elements not found!');
            return;
        }
        
        // Toggle dropdown on button click
        userMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Button clicked!');
            mobileDropdown.classList.toggle('active');
            console.log('Active class toggled. Has active:', mobileDropdown.classList.contains('active'));
        });
        
        // Close dropdown when clicking a link
        const dropdownItems = mobileDropdown.querySelectorAll('.mobile-dropdown-item');
        dropdownItems.forEach(function(item) {
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
})();
