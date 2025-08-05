document.addEventListener('DOMContentLoaded', () => {

    const html = document.querySelector('html');
    const langButtons = document.querySelectorAll('.lang-btn');
    const defaultLang = 'en';

    // ---- Carousel Variables and Functions ----

    const galleryScroller = document.getElementById('gallery-scroller');
    const imageModal = document.getElementById('image-modal');
    const modalGalleryContainer = document.getElementById('modal-gallery-container');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalPrevBtn = document.querySelector('.modal-prev-btn');
    const modalNextBtn = document.querySelector('.modal-next-btn');
    // START of the new code for the automatic image slider
    const sliderImages = document.querySelectorAll('.image-slider .slider-image');
    let currentImageIndex = 0;


    // END of the new code for the automatic image slider
    let currentModalImageIndex = 0;
    let galleryImages = []; // Array to store image data from JSON

    const populateGallery = (images) => {
        galleryImages = images;

        // Create a new container for the scrolling images
        const scrollerInner = document.createElement('div');
        scrollerInner.classList.add('gallery-scroller-inner');

        // Use only the original images, no duplicates
        scrollerInner.innerHTML = images.map((image, index) => `
            <div class="gallery-item" data-index="${index}">
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `).join('');

        if (galleryScroller) {
            galleryScroller.innerHTML = '';
            galleryScroller.appendChild(scrollerInner);
        } else {
            console.warn("Element with ID 'gallery-scroller' not found.");
        }

        if (modalGalleryContainer) {
            modalGalleryContainer.innerHTML = images.map(image => `
                <img src="${image.src}" alt="${image.alt}" class="modal-image">
            `).join('');
        } else {
            console.warn("Element with ID 'modal-gallery-container' not found.");
        }
    };
    const nextImage = () => {
        // Remove 'active' class from the current image
        sliderImages[currentImageIndex].classList.remove('active');

        // Increment the index, and wrap around if at the end
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;

        // Add 'active' class to the next image
        sliderImages[currentImageIndex].classList.add('active');
    };

    // Set an interval to change the image every 5 seconds (5000 milliseconds)
    setInterval(nextImage, 5000);
    // Function to show a specific image in the modal
    const showModalImage = (index) => {
        const modalImages = document.querySelectorAll('.modal-image');
        if (modalImages.length > 0) {
            modalImages.forEach(img => img.classList.remove('active'));
            modalImages[index].classList.add('active');
            currentModalImageIndex = index;
        }
    };

    const loadLanguage = async (lang) => {
        try {
            const response = await fetch(`assets/data/${lang}.json`);
            if (!response.ok) {
                console.error(`Error: Failed to load ${lang}.json data file. Check the file path.`);
                throw new Error('Failed to load data file.');
            }
            const data = await response.json();
            updateContent(data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateTextContent = (selector, text) => {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        } else {
            console.warn(`Element with selector '${selector}' not found.`);
        }
    };

    const updatePlaceholder = (id, text) => {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = text;
        } else {
            console.warn(`Element with ID '${id}' not found.`);
        }
    };

    const updateInnerHTML = (selector, html) => {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = html;
        } else {
            console.warn(`Element with selector '${selector}' not found.`);
        }
    };

    const updateContent = (translations) => {
        // Update elements based on your HTML structure
        updateTextContent('title', translations.meta_title);
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const linkKey = link.dataset.link;
            if (translations.nav_links[linkKey]) {
                link.textContent = translations.nav_links[linkKey];
            }
        });
        // updateTextContent('.cover-photo h2', translations.header_title);
        // updateTextContent('.page-header h1', translations.header_title);
        updateTextContent('.disclaimer-text', translations.disclaimer_text);

        // Milestones
        updateTextContent('#milestones', translations.milestones_title);
        updateInnerHTML('.milestones ul', translations.milestones.map(item => `<li>${item}</li>`).join(''));

        // Upcoming Dates
        updateTextContent('#programs', translations.upcoming_dates_title);
        updateInnerHTML('.upcoming-dates .box-grid', translations.upcoming_dates.map(event => `
            <div class="box filled"><a href="${event.redirectUrl}" target="_blank">
    <img src="${event.src}" alt="Event Icon"></a>
    <div class="box-content">
        <p>${event.location}</p>
        <h3>${event.date}</h3>
    </div>
</div>
        `).join(''));

        // Physical Programs
        updateTextContent('.physical-programs h2', translations.physical_programs_title);
        updateInnerHTML('.physical-programs .box-grid', translations.physical_programs.map(program => `
             <div class="box filled"><a href="${program.redirectUrl}" target="_blank">
    <img src="${program?.src}" alt="Event Icon"></a>
    <div class="box-content">
        <p>${program.location}</p>
        <h3>${program.date}</h3>
    </div>
</div>
        `).join(''));

        // Regular Events
        updateTextContent('#events', translations.regular_events_title);
        updateInnerHTML('.regular-events .box-grid', translations.regular_events.map(event => `
        <div class="event-item">
    <h3>${event.name}</h3>
    <div class="box">
        <img src="${event?.src}" alt="Event Icon">
        <div class="box-content">
            <p>${event.location}</p>
            <h3>${event.date}</h3>
        </div>
    </div>
</div>
        `).join(''));

        // Gallery
        updateTextContent('#gallery-title', translations.gallery_title);
        populateGallery(translations.archives);

        // Social Media
        updateTextContent('.social-media h2', translations.social_media_title);

        // Corrected Contact Form Logic
        updateTextContent('.contact-form h2', translations.contact_form_title);
        updateTextContent('.contact-form label[for="name"]', translations.contact_form.name_label);
        updateTextContent('.contact-form label[for="email"]', translations.contact_form.email_label);
        updateTextContent('.contact-form label[for="subject"]', translations.contact_form.subject_label);
        updateTextContent('.contact-form label[for="message"]', translations.contact_form.message_label);
        updatePlaceholder('name', translations.contact_form.placeholder_name);
        updatePlaceholder('email', translations.contact_form.placeholder_email);
        updatePlaceholder('subject', translations.contact_form.placeholder_subject);
        updatePlaceholder('message', translations.contact_form.placeholder_message);
        updateTextContent('.contact-form .submit-btn', translations.contact_form.button);

        // Google Maps
        updateTextContent('#gmaps-title', translations.gmaps_title);
        updateInnerHTML('#gmaps-container', translations.gmaps_link);

        // Footer
        updateTextContent('.footer-bottom p', translations.footer.copyright);
        updateTextContent('.subscribe-section h3', translations.footer.subscribe_title);
        updateTextContent('.subscribe-section p', translations.footer.subscribe_text);
        updateTextContent('.subscribe-btn', translations.footer.subscribe_button);
        updateTextContent('.footer-section.contact-section h3', translations.footer.contact_title);
        updateInnerHTML('.contact-section address', translations.footer.contact_address);
        updateTextContent('.contact-info span', translations.footer.contact_phone);
        updateTextContent('.contact-info a', translations.footer.contact_email);
        updateTextContent('.other-centers', translations.footer.contact_other_centers);
        updateTextContent('.app-section h3', translations.footer.download_title);
        updateTextContent('.app-links .app-btn:nth-child(1) span', translations.footer.app_ios);
        updateTextContent('.app-links .app-btn:nth-child(2) span', translations.footer.app_android);
    };

    // New logic to handle language switching
    const setLanguage = (lang) => {
        if (html) {
            html.dataset.lang = lang;
        }
        localStorage.setItem('lang', lang);
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        loadLanguage(lang);
    };

    // ---- Event Listeners ----
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            setLanguage(lang);
        });
    });

    // Event listener for opening the modal
    if (galleryScroller) {
        galleryScroller.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) {
                const index = parseInt(item.dataset.index);
                if (imageModal) {
                    imageModal.style.display = 'block';
                }
                showModalImage(index);
            }
        });
    }

    // Event listeners for modal navigation
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            if (imageModal) {
                imageModal.style.display = 'none';
            }
        });
    }

    if (modalPrevBtn) {
        modalPrevBtn.addEventListener('click', () => {
            currentModalImageIndex = (currentModalImageIndex - 1 + galleryImages.length) % galleryImages.length;
            showModalImage(currentModalImageIndex);
        });
    }

    if (modalNextBtn) {
        modalNextBtn.addEventListener('click', () => {
            currentModalImageIndex = (currentModalImageIndex + 1) % galleryImages.length;
            showModalImage(currentModalImageIndex);
        });
    }

    window.onclick = function (event) {
        if (event.target === imageModal) {
            if (imageModal) {
                imageModal.style.display = "none";
            }
        }
    }

    // Load initial language on page load
    const savedLang = localStorage.getItem('lang') || (html ? html.dataset.lang : '') || defaultLang;
    setLanguage(savedLang);

    // Initial setups (unrelated to language)
    const fadeUpElements = document.querySelectorAll('.animate-fade-up');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    fadeUpElements.forEach(el => observer.observe(el));

    const coverPhotoTitle = document.querySelector('.cover-photo h2');
    window.addEventListener('scroll', () => {
        if (coverPhotoTitle) {
            if (window.scrollY > 100) {
                coverPhotoTitle.classList.add('hidden');
            } else {
                coverPhotoTitle.classList.remove('hidden');
            }
        }
    });

    const contactForm = document.getElementById('footer-contact-form');
    const formMessage = document.getElementById('form-message');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formMessage.style.display = 'block';
            formMessage.className = 'form-message';
            formMessage.textContent = "Sending...";
            const YOUR_BACKEND_ENDPOINT_URL = 'https://formspree.io/f/mwpqnjvq';
            try {
                const formData = new FormData(contactForm);
                const response = await fetch(YOUR_BACKEND_ENDPOINT_URL, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.ok) {
                    formMessage.textContent = "Message sent successfully! We will get back to you shortly.";
                    formMessage.classList.add('success');
                    contactForm.reset();
                } else {
                    const errorData = await response.json();
                    formMessage.textContent = `Error: Something went wrong. ${errorData.error || ''}`;
                    formMessage.classList.add('error');
                }
            } catch (error) {
                console.error('Submission error:', error);
                formMessage.textContent = "An unexpected error occurred. Please try again later.";
                formMessage.classList.add('error');
            }
        });
    }
});
