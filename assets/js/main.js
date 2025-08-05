// // document.addEventListener('DOMContentLoaded', () => {

// //     const html = document.querySelector('html');
// //     const langButtons = document.querySelectorAll('.lang-btn');
// //     const defaultLang = 'en';

// //     const loadLanguage = async (lang) => {
// //         try {
// //             const response = await fetch(`assets/data/${lang}.json`);
// //             if (!response.ok) {
// //                 console.error(`Error: Failed to load ${lang}.json data file. Check the file path.`);
// //                 throw new Error('Failed to load data file.');
// //             }
// //             const data = await response.json();
// //             updateContent(data);
// //         } catch (error) {
// //             console.error(error);
// //         }
// //     };

// //     const setupImageSlider = () => {
// //         const images = document.querySelectorAll('.slider-image');
// //         let currentIndex = 0;
// //         if (images.length === 0) {
// //             console.warn("Image slider not found or has no images.");
// //             return;
// //         }
// //         const showNextImage = () => {
// //             images[currentIndex].classList.remove('active');
// //             currentIndex = (currentIndex + 1) % images.length;
// //             images[currentIndex].classList.add('active');
// //         };
// //         setInterval(showNextImage, 3000);
// //     };

// //     const updateTextContent = (selector, text) => {
// //         const element = document.querySelector(selector);
// //         if (element) {
// //             element.textContent = text;
// //         } else {
// //             console.warn(`Element with selector '${selector}' not found.`);
// //         }
// //     };

// //     const updatePlaceholder = (id, text) => {
// //         const element = document.getElementById(id);
// //         if (element) {
// //             element.placeholder = text;
// //         } else {
// //             console.warn(`Element with ID '${id}' not found.`);
// //         }
// //     };

// //     const updateInnerHTML = (selector, html) => {
// //         const element = document.querySelector(selector);
// //         if (element) {
// //             element.innerHTML = html;
// //         } else {
// //             console.warn(`Element with selector '${selector}' not found.`);
// //         }
// //     };

// //     const updateContent = (translations) => {
// //         // Update elements based on your HTML structure
// //         updateTextContent('title', translations.meta_title);
// //         const navLinks = document.querySelectorAll('.nav-links a');
// //         navLinks.forEach(link => {
// //             const linkKey = link.dataset.link;
// //             if (translations.nav_links[linkKey]) {
// //                 link.textContent = translations.nav_links[linkKey];
// //             }
// //         });
// //         updateTextContent('.cover-photo h2', translations.header_title);
// //         updateTextContent('.page-header h1', translations.header_title);
// //         updateTextContent('.disclaimer-text', translations.disclaimer_text);

// //         // Milestones
// //         updateTextContent('#milestones', translations.milestones_title);
// //         updateInnerHTML('.milestones ul', translations.milestones.map(item => `<li>${item}</li>`).join(''));

// //         // Upcoming Dates
// //         updateTextContent('#programs', translations.upcoming_dates_title);
// //         updateInnerHTML('.upcoming-dates .box-grid', translations.upcoming_dates.map(event => `
// //             <div class="box filled">
// //                 <img src="assets/images/event-icon-1.png" alt="Event Icon">
// //                 <h3>${event.date}</h3>
// //                 <p>${event.location}</p>
// //             </div>
// //         `).join(''));

// //         // Physical Programs
// //         updateTextContent('.physical-programs h2', translations.physical_programs_title);
// //         updateInnerHTML('.physical-programs .box-grid', translations.physical_programs.map(program => `
// //             <div class="box">
// //                 <img src="assets/images/program-icon-a.png" alt="Program Icon">
// //                 ${program}
// //             </div>
// //         `).join(''));

// //         // Regular Events
// //         updateTextContent('#events', translations.regular_events_title);
// //         updateInnerHTML('.regular-events .box-grid', translations.regular_events.map(event => `
// //             <div class="event-item">
// //                 <h3>${event.name}</h3>
// //                 <div class="box">
// //                     <img src="assets/images/event-icon-4.png" alt="Event Icon">
// //                     ${event.content}
// //                 </div>
// //             </div>
// //         `).join(''));

// //         // Gallery
// //         updateTextContent('#gallery-title', translations.gallery_title);
// //         updateInnerHTML('#gallery-container', translations.archives.map(image => `
// //             <div class="gallery-item">
// //                 <img src="${image.src}" alt="${image.alt}">
// //             </div>
// //         `).join(''));

// //         // Social Media
// //         updateTextContent('.social-media h2', translations.social_media_title);

// //         // Contact Form
// //         updateTextContent('.contact-form h2', translations.contact_form_title);
// //         updateTextContent('.contact-form label[for="name"]', translations.contact_form.name_label);
// //         updateTextContent('.contact-form label[for="email"]', translations.contact_form.email_label);
// //         updateTextContent('.contact-form label[for="subject"]', translations.contact_form.subject_label);
// //         updateTextContent('.contact-form label[for="message"]', translations.contact_form.message_label);
// //         updatePlaceholder('name', translations.contact_form.placeholder_name); 
// //         updatePlaceholder('email', translations.contact_form.placeholder_email);
// //         updatePlaceholder('subject', translations.contact_form.placeholder_subject);
// //         updatePlaceholder('message', translations.contact_form.placeholder_message);
// //         updateTextContent('.contact-form .submit-btn', translations.contact_form.button);

// //         // Google Maps
// //         updateTextContent('#gmaps-title', translations.gmaps_title);
// //         updateInnerHTML('#gmaps-container', translations.gmaps_link);

// //         // Footer
// //         updateTextContent('.footer-bottom p', translations.footer.copyright);
// //         updateTextContent('.subscribe-section h3', translations.footer.subscribe_title);
// //         updateTextContent('.subscribe-section p', translations.footer.subscribe_text);
// //         updateTextContent('.subscribe-btn', translations.footer.subscribe_button);
// //         updateTextContent('.footer-section.contact-section h3', translations.footer.contact_title);
// //         updateInnerHTML('.contact-section address', translations.footer.contact_address);
// //         updateTextContent('.contact-info span', translations.footer.contact_phone);
// //         updateTextContent('.contact-info a', translations.footer.contact_email);
// //         updateTextContent('.other-centers', translations.footer.contact_other_centers);
// //         updateTextContent('.app-section h3', translations.footer.download_title);
// //         updateTextContent('.app-links .app-btn:nth-child(1) span', translations.footer.app_ios);
// //         updateTextContent('.app-links .app-btn:nth-child(2) span', translations.footer.app_android);
// //     };

// //     // New logic to handle language switching
// //     const setLanguage = (lang) => {
// //         html.dataset.lang = lang;
// //         localStorage.setItem('lang', lang);
// //         langButtons.forEach(btn => {
// //             btn.classList.toggle('active', btn.dataset.lang === lang);
// //         });
// //         loadLanguage(lang);
// //     };

// //     langButtons.forEach(button => {
// //         button.addEventListener('click', () => {
// //             const lang = button.dataset.lang;
// //             setLanguage(lang);
// //         });
// //     });

// //     // Load initial language on page load
// //     const savedLang = localStorage.getItem('lang') || html.dataset.lang || defaultLang;
// //     setLanguage(savedLang);

// //     // Initial setups (unrelated to language)
// //     setupImageSlider();

// //     const fadeUpElements = document.querySelectorAll('.animate-fade-up');
// //     const observer = new IntersectionObserver(entries => {
// //         entries.forEach(entry => {
// //             if (entry.isIntersecting) {
// //                 entry.target.classList.add('visible');
// //                 observer.unobserve(entry.target);
// //             }
// //         });
// //     }, { threshold: 0.2 });
// //     fadeUpElements.forEach(el => observer.observe(el));

// //     const coverPhotoTitle = document.querySelector('.cover-photo h2');
// //     window.addEventListener('scroll', () => {
// //         if (window.scrollY > 100) {
// //             coverPhotoTitle.classList.add('hidden');
// //         } else {
// //             coverPhotoTitle.classList.remove('hidden');
// //         }
// //     });

// //     const contactForm = document.getElementById('contact-form');
// //     const formMessage = document.getElementById('form-message');
// //     if (contactForm) {
// //         contactForm.addEventListener('submit', async (e) => {
// //             e.preventDefault();
// //             formMessage.style.display = 'block';
// //             formMessage.className = 'form-message';
// //             formMessage.textContent = "Sending...";
// //             const YOUR_BACKEND_ENDPOINT_URL = 'https://formspree.io/f/YOUR_FORM_ID';
// //             try {
// //                 const formData = new FormData(contactForm);
// //                 const response = await fetch(YOUR_BACKEND_ENDPOINT_URL, {
// //                     method: 'POST',
// //                     body: formData,
// //                     headers: {
// //                         'Accept': 'application/json'
// //                     }
// //                 });
// //                 if (response.ok) {
// //                     formMessage.textContent = "Message sent successfully! We will get back to you shortly.";
// //                     formMessage.classList.add('success');
// //                     contactForm.reset();
// //                 } else {
// //                     const errorData = await response.json();
// //                     formMessage.textContent = `Error: Something went wrong. ${errorData.error || ''}`;
// //                     formMessage.classList.add('error');
// //                 }
// //             } catch (error) {
// //                 console.error('Submission error:', error);
// //                 formMessage.textContent = "An unexpected error occurred. Please try again later.";
// //                 formMessage.classList.add('error');
// //             }
// //         });
// //     }
// // });
// // Add these variables to the top of your script
// const galleryScroller = document.getElementById('gallery-scroller');
// const imageModal = document.getElementById('image-modal');
// const modalGalleryContainer = document.getElementById('modal-gallery-container');
// const modalCloseBtn = document.querySelector('.modal-close-btn');
// const modalPrevBtn = document.querySelector('.modal-prev-btn');
// const modalNextBtn = document.querySelector('.modal-next-btn');

// let currentModalImageIndex = 0;
// let galleryImages = [];

// // Function to populate the marquee and the modal gallery
// // const populateGallery = (images) => {
// //     galleryImages = images;

// //     // Populate the marquee scroller
// //     const scrollerInner = document.createElement('div');
// //     scrollerInner.classList.add('gallery-scroller-inner');
// //     scrollerInner.innerHTML = images.map((image, index) => `
// //         <div class="gallery-item" data-index="${index}">
// //             <img src="${image.src}" alt="${image.alt}">
// //         </div>
// //     `).join('');
// //     galleryScroller.innerHTML = '';
// //     galleryScroller.appendChild(scrollerInner);

// //     // Populate the modal gallery
// //     modalGalleryContainer.innerHTML = images.map(image => `
// //         <img src="${image.src}" alt="${image.alt}" class="modal-image">
// //     `).join('');
// // };

// // const populateGallery = (images) => {
// //     galleryImages = images;

// //     // Create a new container for the scrolling images
// //     const scrollerInner = document.createElement('div');
// //     scrollerInner.classList.add('gallery-scroller-inner');

// //     // Duplicate the images to create a seamless loop
// //     const allImages = [...images, ...images]; 

// //     scrollerInner.innerHTML = allImages.map((image, index) => `
// //         <div class="gallery-item" data-index="${index % images.length}">
// //             <img src="${image.src}" alt="${image.alt}">
// //         </div>
// //     `).join('');

// //     galleryScroller.innerHTML = '';
// //     galleryScroller.appendChild(scrollerInner);

// //     // Populate the modal gallery (this part remains the same)
// //     modalGalleryContainer.innerHTML = images.map(image => `
// //         <img src="${image.src}" alt="${image.alt}" class="modal-image">
// //     `).join('');
// // };

// const populateGallery = (images) => {
//     galleryImages = images;

//     // Create a new container for the scrolling images
//     const scrollerInner = document.createElement('div');
//     scrollerInner.classList.add('gallery-scroller-inner');

//     // Use only the original images, no duplicates
//     scrollerInner.innerHTML = images.map((image, index) => `
//         <div class="gallery-item" data-index="${index}">
//             <img src="${image.src}" alt="${image.alt}">
//         </div>
//     `).join('');

//     galleryScroller.innerHTML = '';
//     galleryScroller.appendChild(scrollerInner);

//     // Populate the modal gallery (this part remains the same)
//     modalGalleryContainer.innerHTML = images.map(image => `
//         <img src="${image.src}" alt="${image.alt}" class="modal-image">
//     `).join('');
// };

// // Function to show a specific image in the modal
// const showModalImage = (index) => {
//     const modalImages = document.querySelectorAll('.modal-image');
//     modalImages.forEach(img => img.classList.remove('active'));
//     modalImages[index].classList.add('active');
//     currentModalImageIndex = index;
// };

// // Event listener for opening the modal
// if (galleryScroller) {
//     galleryScroller.addEventListener('click', (e) => {
//         const item = e.target.closest('.gallery-item');
//         if (item) {
//             const index = parseInt(item.dataset.index);
//             imageModal.style.display = 'block';
//             showModalImage(index);
//         }
//     });
// }

// // Event listeners for modal navigation
// if (modalCloseBtn) {
//     modalCloseBtn.addEventListener('click', () => {
//         imageModal.style.display = 'none';
//     });
// }
// if (modalPrevBtn) {
//     modalPrevBtn.addEventListener('click', () => {
//         currentModalImageIndex = (currentModalImageIndex - 1 + galleryImages.length) % galleryImages.length;
//         showModalImage(currentModalImageIndex);
//     });
// }
// if (modalNextBtn) {
//     modalNextBtn.addEventListener('click', () => {
//         currentModalImageIndex = (currentModalImageIndex + 1) % galleryImages.length;
//         showModalImage(currentModalImageIndex);
//     });
// }
// window.onclick = function (event) {
//     if (event.target === imageModal) {
//         imageModal.style.display = "none";
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {

//     const html = document.querySelector('html');
//     const langButtons = document.querySelectorAll('.lang-btn');
//     const defaultLang = 'en';

//     // ---- Carousel Variables and Functions ----
//     const carousel = document.getElementById('gallery-carousel');
//     const prevBtn = document.getElementById('prev-btn');
//     const nextBtn = document.getElementById('next-btn');
//     let currentIndex = 0;
//     let images = []; // Array to store image data from JSON

//     const populateCarousel = () => {
//         if (!carousel) {
//             console.warn("Carousel container with id 'gallery-carousel' not found.");
//             return;
//         }
//         carousel.innerHTML = '';
//         images.forEach(image => {
//             const img = document.createElement('img');
//             img.src = image.src;
//             img.alt = image.alt;
//             img.className = 'carousel-item';
//             carousel.appendChild(img);
//         });
//     };

//     const showImage = (index) => {
//         if (images.length === 0) return;

//         // Handle wrap-around for the carousel
//         if (index >= images.length) {
//             currentIndex = 0;
//         } else if (index < 0) {
//             currentIndex = images.length - 1;
//         } else {
//             currentIndex = index;
//         }

//         const offset = -currentIndex * 100;
//         carousel.style.transform = `translateX(${offset}%)`;
//     };

//     const loadLanguage = async (lang) => {
//         try {
//             const response = await fetch(`assets/data/${lang}.json`);
//             if (!response.ok) {
//                 console.error(`Error: Failed to load ${lang}.json data file. Check the file path.`);
//                 throw new Error('Failed to load data file.');
//             }
//             const data = await response.json();
//             updateContent(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const updateTextContent = (selector, text) => {
//         const element = document.querySelector(selector);
//         if (element) {
//             element.textContent = text;
//         } else {
//             console.warn(`Element with selector '${selector}' not found.`);
//         }
//     };

//     const updatePlaceholder = (id, text) => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.placeholder = text;
//         } else {
//             console.warn(`Element with ID '${id}' not found.`);
//         }
//     };

//     const updateInnerHTML = (selector, html) => {
//         const element = document.querySelector(selector);
//         if (element) {
//             element.innerHTML = html;
//         } else {
//             console.warn(`Element with selector '${selector}' not found.`);
//         }
//     };

//     const updateContent = (translations) => {
//         // Update elements based on your HTML structure
//         updateTextContent('title', translations.meta_title);
//         const navLinks = document.querySelectorAll('.nav-links a');
//         navLinks.forEach(link => {
//             const linkKey = link.dataset.link;
//             if (translations.nav_links[linkKey]) {
//                 link.textContent = translations.nav_links[linkKey];
//             }
//         });
//         updateTextContent('.cover-photo h2', translations.header_title);
//         updateTextContent('.page-header h1', translations.header_title);
//         updateTextContent('.disclaimer-text', translations.disclaimer_text);

//         // Milestones
//         updateTextContent('#milestones', translations.milestones_title);
//         updateInnerHTML('.milestones ul', translations.milestones.map(item => `<li>${item}</li>`).join(''));

//         // Upcoming Dates
//         updateTextContent('#programs', translations.upcoming_dates_title);
//         updateInnerHTML('.upcoming-dates .box-grid', translations.upcoming_dates.map(event => `
//             <div class="box filled">
//                 <img src="assets/images/event-icon-1.png" alt="Event Icon">
//                 <h3>${event.date}</h3>
//                 <p>${event.location}</p>
//             </div>
//         `).join(''));

//         // Physical Programs
//         updateTextContent('.physical-programs h2', translations.physical_programs_title);
//         updateInnerHTML('.physical-programs .box-grid', translations.physical_programs.map(program => `
//             <div class="box">
//                 <img src="assets/images/program-icon-a.png" alt="Program Icon">
//                 ${program}
//             </div>
//         `).join(''));

//         // Regular Events
//         updateTextContent('#events', translations.regular_events_title);
//         updateInnerHTML('.regular-events .box-grid', translations.regular_events.map(event => `
//             <div class="event-item">
//                 <h3>${event.name}</h3>
//                 <div class="box">
//                     <img src="assets/images/event-icon-4.png" alt="Event Icon">
//                     ${event.content}
//                 </div>
//             </div>
//         `).join(''));

//         // Gallery - Changed to carousel logic
//         updateTextContent('#gallery-title', translations.gallery_title);
//         updateInnerHTML('#gallery-container', translations.archives.map(
//             image => `
//     <div class="gallery-item">
//         <img src="${image.src}" alt="${image.alt}">
//     </div>
// `).join(''));
//         images = translations.archives; // Store image data for carousel
//         // populateCarousel();
//         populateGallery(translations.archives);
//         showImage(currentIndex);

//         // Social Media
//         updateTextContent('.social-media h2', translations.social_media_title);

//         updateTextContent('#contact-form-title', translations.contact_form_title);
//         updateTextContent('#name-label', translations.contact_form.name_label);
//         updateTextContent('#email-label', translations.contact_form.email_label);
//         updateTextContent('#subject-label', translations.contact_form.subject_label);
//         updateTextContent('#message-label', translations.contact_form.message_label);
//         updatePlaceholder('name', translations.contact_form.placeholder_name);
//         updatePlaceholder('email', translations.contact_form.placeholder_email);
//         updatePlaceholder('subject', translations.contact_form.placeholder_subject);
//         updatePlaceholder('message', translations.contact_form.placeholder_message);
//         updateTextContent('.contact-form .submit-btn', translations.contact_form.button);
//         // Contact Form
//         // updateTextContent('.contact-form h2', translations.contact_form_title);
//         // updateTextContent('.contact-form label[for="name"]', translations.contact_form.name_label);
//         // updateTextContent('.contact-form label[for="email"]', translations.contact_form.email_label);
//         // updateTextContent('.contact-form label[for="subject"]', translations.contact_form.subject_label);
//         // updateTextContent('.contact-form label[for="message"]', translations.contact_form.message_label);
//         // updatePlaceholder('name', translations.contact_form.placeholder_name);
//         // updatePlaceholder('email', translations.contact_form.placeholder_email);
//         // updatePlaceholder('subject', translations.contact_form.placeholder_subject);
//         // updatePlaceholder('message', translations.contact_form.placeholder_message);
//         // updateTextContent('.contact-form .submit-btn', translations.contact_form.button);

//         // Google Maps
//         updateTextContent('#gmaps-title', translations.gmaps_title);
//         updateInnerHTML('#gmaps-container', translations.gmaps_link);

//         // Footer
//         updateTextContent('.footer-bottom p', translations.footer.copyright);
//         updateTextContent('.subscribe-section h3', translations.footer.subscribe_title);
//         updateTextContent('.subscribe-section p', translations.footer.subscribe_text);
//         updateTextContent('.subscribe-btn', translations.footer.subscribe_button);
//         updateTextContent('.footer-section.contact-section h3', translations.footer.contact_title);
//         updateInnerHTML('.contact-section address', translations.footer.contact_address);
//         updateTextContent('.contact-info span', translations.footer.contact_phone);
//         updateTextContent('.contact-info a', translations.footer.contact_email);
//         updateTextContent('.other-centers', translations.footer.contact_other_centers);
//         updateTextContent('.app-section h3', translations.footer.download_title);
//         updateTextContent('.app-links .app-btn:nth-child(1) span', translations.footer.app_ios);
//         updateTextContent('.app-links .app-btn:nth-child(2) span', translations.footer.app_android);
//     };

//     // New logic to handle language switching
//     const setLanguage = (lang) => {
//         html.dataset.lang = lang;
//         localStorage.setItem('lang', lang);
//         langButtons.forEach(btn => {
//             btn.classList.toggle('active', btn.dataset.lang === lang);
//         });
//         loadLanguage(lang);
//     };

//     // ---- Event Listeners ----
//     langButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const lang = button.dataset.lang;
//             setLanguage(lang);
//         });
//     });

//     if (prevBtn && nextBtn) {
//         prevBtn.addEventListener('click', () => {
//             showImage(currentIndex - 1);
//         });

//         nextBtn.addEventListener('click', () => {
//             showImage(currentIndex + 1);
//         });
//     }

//     // Load initial language on page load
//     const savedLang = localStorage.getItem('lang') || html.dataset.lang || defaultLang;
//     setLanguage(savedLang);

//     // Initial setups (unrelated to language)
//     const fadeUpElements = document.querySelectorAll('.animate-fade-up');
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.2 });
//     fadeUpElements.forEach(el => observer.observe(el));

//     const coverPhotoTitle = document.querySelector('.cover-photo h2');
//     window.addEventListener('scroll', () => {
//         if (coverPhotoTitle) {
//             if (window.scrollY > 100) {
//                 coverPhotoTitle.classList.add('hidden');
//             } else {
//                 coverPhotoTitle.classList.remove('hidden');
//             }
//         }
//     });

//     const contactForm = document.getElementById('contact-form');
//     const formMessage = document.getElementById('form-message');
//     if (contactForm) {
//         contactForm.addEventListener('submit', async (e) => {
//             e.preventDefault();
//             formMessage.style.display = 'block';
//             formMessage.className = 'form-message';
//             formMessage.textContent = "Sending...";
//             const YOUR_BACKEND_ENDPOINT_URL = 'https://formspree.io/f/YOUR_FORM_ID';
//             try {
//                 const formData = new FormData(contactForm);
//                 const response = await fetch(YOUR_BACKEND_ENDPOINT_URL, {
//                     method: 'POST',
//                     body: formData,
//                     headers: {
//                         'Accept': 'application/json'
//                     }
//                 });
//                 if (response.ok) {
//                     formMessage.textContent = "Message sent successfully! We will get back to you shortly.";
//                     formMessage.classList.add('success');
//                     contactForm.reset();
//                 } else {
//                     const errorData = await response.json();
//                     formMessage.textContent = `Error: Something went wrong. ${errorData.error || ''}`;
//                     formMessage.classList.add('error');
//                 }
//             } catch (error) {
//                 console.error('Submission error:', error);
//                 formMessage.textContent = "An unexpected error occurred. Please try again later.";
//                 formMessage.classList.add('error');
//             }
//         });
//     }
// });


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
        updateTextContent('.cover-photo h2', translations.header_title);
        updateTextContent('.page-header h1', translations.header_title);
        updateTextContent('.disclaimer-text', translations.disclaimer_text);

        // Milestones
        updateTextContent('#milestones', translations.milestones_title);
        updateInnerHTML('.milestones ul', translations.milestones.map(item => `<li>${item}</li>`).join(''));

        // Upcoming Dates
        updateTextContent('#programs', translations.upcoming_dates_title);
        updateInnerHTML('.upcoming-dates .box-grid', translations.upcoming_dates.map(event => `
            <div class="box filled">
                <img src="assets/images/event-icon-1.png" alt="Event Icon">
                <h3>${event.date}</h3>
                <p>${event.location}</p>
            </div>
        `).join(''));

        // Physical Programs
        updateTextContent('.physical-programs h2', translations.physical_programs_title);
        updateInnerHTML('.physical-programs .box-grid', translations.physical_programs.map(program => `
            <div class="box">
                <img src="assets/images/program-icon-a.png" alt="Program Icon">
                ${program}
            </div>
        `).join(''));

        // Regular Events
        updateTextContent('#events', translations.regular_events_title);
        updateInnerHTML('.regular-events .box-grid', translations.regular_events.map(event => `
            <div class="event-item">
                <h3>${event.name}</h3>
                <div class="box">
                    <img src="assets/images/event-icon-4.png" alt="Event Icon">
                    ${event.content}
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

    const contactForm = document.getElementById('contact-form');
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