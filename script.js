// script.js
$(document).ready(function () {
    // Navigation scroll effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.nav').addClass('navScrolled');
            $('.header').addClass('headerScrolled');
        } else {
            $('.nav').removeClass('navScrolled');
            $('.header').removeClass('headerScrolled');
        }
    });

    // Mobile menu toggle
    $('.navToggle').click(function () {
        const isOpen = $(this).hasClass('open');
        $(this).toggleClass('open');
        $('.modal').toggleClass('open');
        $('.overlay').toggleClass('active');

        // Toggle icon between bars and times
        $(this).find('i').toggleClass('fa-bars fa-times');

        // If in modal header, keep the times icon
        if ($(this).hasClass('modalClose')) {
            $(this).find('i').removeClass('fa-bars').addClass('fa-times');
        }
    });

    $('.modalClose, .overlay').click(function () {
        $('.navToggle').removeClass('open');
        $('.modal').removeClass('open');
        $('.overlay').removeClass('active');
        $('.navToggle').find('i').removeClass('fa-times').addClass('fa-bars');
    });

    // Smooth scrolling for nav links
    $('.navLinks a, .modalLinks a').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);

        // Close mobile menu if open
        $('.navToggle').removeClass('open');
        $('.modal').removeClass('open');
        $('.overlay').removeClass('active');
        $('.navToggle').find('i').removeClass('fa-times').addClass('fa-bars');
    });

    // CTA button hover effect
    $('.cta').hover(
        function () {
            $(this).addClass('hoverScale');
        },
        function () {
            $(this).removeClass('hoverScale');
        }
    );
    $('.readMore').click(function (e) {
        e.preventDefault(); // Prevent any default button behavior
        console.log("Read More clicked"); // Debug log
        const $cardInner = $(this).closest('.cardInner');
        const isExpanded = $cardInner.hasClass('expanded');

        $cardInner.toggleClass('expanded');

        // Update all Read More/Less buttons within this card
        $cardInner.find('.readMore').text(isExpanded ? 'Read More' : 'Read Less');
    });

    $('.projectsSlider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    // Form validation and submission
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        // Reset error messages
        $('.error').hide();

        // Get form data
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();

        // Validation flags
        let isValid = true;

        // Name validation
        if (!name) {
            $('#nameError').text('Name is required').show();
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            $('#nameError').text('Name can only contain letters and spaces').show();
            isValid = false;
        } else if (name.length > 50) {
            $('#nameError').text('Name must be less than 50 characters').show();
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            $('#emailError').text('Email is required').show();
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text('Please enter a valid email address').show();
            isValid = false;
        } else if (email.length > 100) {
            $('#emailError').text('Email must be less than 100 characters').show();
            isValid = false;
        }

        // Message validation
        if (!message) {
            $('#messageError').text('Message is required').show();
            isValid = false;
        } else if (message.length > 500) {
            $('#messageError').text('Message must be less than 500 characters').show();
            isValid = false;
        }

        // Sanitize input to prevent XSS
        name = sanitizeInput(name);
        email = sanitizeInput(email);
        message = sanitizeInput(message);

        // Check for potential SQL injection (basic client-side check)
        if (checkForSQLInjection(name) || checkForSQLInjection(email) || checkForSQLInjection(message)) {
            alert('Suspicious input detected. Please avoid using special characters or SQL commands.');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission (log to console for demo)
            console.log('Form submitted:', { name, email, message });
            alert('Thank You!');
            $('#contactForm')[0].reset();
        }
    });

    // Sanitize input function to prevent XSS
    function sanitizeInput(input) {
        const temp = document.createElement('div');
        temp.textContent = input;
        return temp.innerHTML;
    }

    // Basic SQL injection check (client-side approximation)
    function checkForSQLInjection(input) {
        const sqlPatterns = [
            /DROP\s+TABLE/i,
            /SELECT\s+.*\s+FROM/i,
            /INSERT\s+INTO/i,
            /UPDATE\s+.*\s+SET/i,
            /DELETE\s+FROM/i,
            /UNION\s+SELECT/i,
            /--/i,
            /;/i
        ];
        return sqlPatterns.some(pattern => pattern.test(input));
    }

    const currentYear = new Date().getFullYear().toString();
    $('#copyright').text(`© ${currentYear} Sangamesh Myageri. All rights reserved.`);

    // Scroll to top functionality
    $('.backToTop').on('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
