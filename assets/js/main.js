// // // This function will be called on page load
// // document.addEventListener('DOMContentLoaded', () => {
// //     // Function to fetch and render the page data
// //     const loadPageData = async () => {
// //         try {
// //             const response = await fetch('assets/data/en.json');
// //             if (!response.ok) {
// //                 throw new Error('Failed to load data file.');
// //             }
// //             const data = await response.json();
// //             updateContent(data);
// //         } catch (error) {
// //             console.error(error);
// //         }
// //     };
// //     // Function to handle the auto-scrolling image slider
// //     const setupImageSlider = () => {
// //         const images = document.querySelectorAll('.slider-image');
// //         let currentIndex = 0;

// //         const showNextImage = () => {
// //             // Hide the current active image
// //             images[currentIndex].classList.remove('active');

// //             // Calculate the next index, looping back to 0 if we're at the end
// //             currentIndex = (currentIndex + 1) % images.length;

// //             // Show the new active image
// //             images[currentIndex].classList.add('active');
// //         };

// //         // Start the slideshow, changing images every 2 seconds (2000 milliseconds)
// //         setInterval(showNextImage, 9000);
// //     };

// //     // Call the function to set up the slider when the DOM is loaded
// //     setupImageSlider();
// //     // Function to update the text content of the page
// //     const updateContent = (translations) => {
// //         // Update meta title
// //         document.getElementById('meta-title').textContent = translations.meta_title;

// //         // Update nav links
// //         document.getElementById('nav-home').textContent = translations.nav_links.home;
// //         document.getElementById('nav-about').textContent = translations.nav_links.about;
// //         document.getElementById('nav-programs').textContent = translations.nav_links.programs;
// //         document.getElementById('nav-events').textContent = translations.nav_links.events;
// //         document.getElementById('nav-contact').textContent = translations.nav_links.contact;

// //         // Update main content
// //         document.getElementById('page-header-title').textContent = translations.header_title;
// //         document.getElementById('page-header-title-2').textContent = translations.header_title;
// //         document.getElementById('disclaimer-text').textContent = translations.disclaimer_text;

// //         // Milestones
// //         document.getElementById('milestones-title').textContent = translations.milestones_title;
// //         const milestonesList = document.getElementById('milestones-list');
// //         milestonesList.innerHTML = translations.milestones.map(item => `<li>${item}</li>`).join('');

// //         // Upcoming Dates
// //         document.getElementById('upcoming-dates-title').textContent = translations.upcoming_dates_title;
// //         const upcomingDatesContainer = document.getElementById('upcoming-dates-container');
// //         upcomingDatesContainer.innerHTML = translations.upcoming_dates.map(event => `
// //             <div class="box filled">
// //                 <img src="assets/images/event-icon-1.png" alt="Event Icon">
// //                 <h3>${event.date}</h3>
// //                 <p>${event.location}</p>
// //             </div>
// //         `).join('');

// //         // Physical Programs
// //         document.getElementById('physical-programs-title').textContent = translations.physical_programs_title;
// //         const physicalProgramsContainer = document.getElementById('physical-programs-container');
// //         physicalProgramsContainer.innerHTML = translations.physical_programs.map(program => `
// //             <div class="box">
// //                 <img src="assets/images/program-icon-a.png" alt="Program Icon">
// //                 ${program}
// //             </div>
// //         `).join('');

// //         // Regular Events
// //         document.getElementById('regular-events-title').textContent = translations.regular_events_title;
// //         const regularEventsContainer = document.getElementById('regular-events-container');
// //         regularEventsContainer.innerHTML = translations.regular_events.map(event => `
// //             <div class="event-item">
// //                 <h3>${event.name}</h3>
// //                 <div class="box">
// //                     <img src="assets/images/event-icon-4.png" alt="Event Icon">
// //                     ${event.content}
// //                 </div>
// //             </div>
// //         `).join('');

// //         document.getElementById('social-media-title').textContent = translations.social_media_title;

// //         // Contact Form
// //         document.getElementById('contact-form-title').textContent = translations.contact_form_title;
// //         document.getElementById('name-label').textContent = translations.contact_form.name_label;
// //         document.getElementById('email-label').textContent = translations.contact_form.email_label;
// //         document.getElementById('subject-label').textContent = translations.contact_form.subject_label;
// //         document.getElementById('message-label').textContent = translations.contact_form.message_label;
// //         document.getElementById('name').placeholder = translations.contact_form.placeholder_name;
// //         document.getElementById('email').placeholder = translations.contact_form.placeholder_email;
// //         document.getElementById('subject').placeholder = translations.contact_form.placeholder_subject;
// //         document.getElementById('message').placeholder = translations.contact_form.placeholder_message;
// //         document.getElementById('submit-btn').textContent = translations.contact_form.button;

// //         // Footer
// //         document.getElementById('footer-copyright').textContent = translations.footer.copyright;
// //         document.getElementById('subscribe-title').textContent = translations.footer.subscribe_title;
// //         document.getElementById('subscribe-text').textContent = translations.footer.subscribe_text;
// //         document.getElementById('subscribe-button').textContent = translations.footer.subscribe_button;
// //         document.getElementById('contact-title').textContent = translations.footer.contact_title;
// //         document.getElementById('contact-address').innerHTML = translations.footer.contact_address;
// //         document.getElementById('contact-phone').textContent = translations.footer.contact_phone;
// //         document.getElementById('contact-email').textContent = translations.footer.contact_email;
// //         document.getElementById('contact-other-centers').textContent = translations.footer.contact_other_centers;
// //         document.getElementById('download-title').textContent = translations.footer.download_title;
// //         document.getElementById('app-ios').textContent = `iOS App`;
// //         document.getElementById('app-android').textContent = `Android App`;
// //     };

// //     // Call the function to load the data when the page loads
// //     loadPageData();

// //     // Intersection Observer for fade-up animations (this part remains the same)
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

// //     // Hide cover photo title on scroll (this part remains the same)
// //     const coverPhoto = document.querySelector('.cover-photo h2');
// //     window.addEventListener('scroll', () => {
// //         if (window.scrollY > 100) {
// //             coverPhoto.classList.add('hidden');
// //         } else {
// //             coverPhoto.classList.remove('hidden');
// //         }
// //     });

// //     // Form submission script (this part remains the same)
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


// // This function will be called on page load
// document.addEventListener('DOMContentLoaded', () => {

//     const langSwitcher = document.querySelector('.lang-switcher');
//     const langButtons = document.querySelectorAll('.lang-btn');

//     // Function to fetch and render the page data for a specific language
//     const loadPageData = async (lang) => {
//         try {
//             const response = await fetch(`assets/data/${lang}.json`);
//             if (!response.ok) {
//                 throw new Error('Failed to load data file.');
//             }
//             const data = await response.json();
//             updateContent(data);
//             localStorage.setItem('site-language', lang); // Save the language preference

//             // Update the active button class
//             langButtons.forEach(btn => {
//                 btn.classList.remove('active');
//                 if (btn.dataset.lang === lang) {
//                     btn.classList.add('active');
//                 }
//             });

//         } catch (error) {
//             console.error(error);
//         }
//     };

//     // Function to handle the auto-scrolling image slider
//     const setupImageSlider = () => {
//         const images = document.querySelectorAll('.slider-image');
//         let currentIndex = 0;

//         const showNextImage = () => {
//             // Check if images exist before trying to access them
//             if (images.length === 0) return;

//             // Hide the current active image
//             images[currentIndex].classList.remove('active');

//             // Calculate the next index, looping back to 0 if we're at the end
//             currentIndex = (currentIndex + 1) % images.length;

//             // Show the new active image
//             images[currentIndex].classList.add('active');
//         };

//         // Start the slideshow, changing images every 3 seconds (3000 milliseconds)
//         setInterval(showNextImage, 3000);
//     };


//     // Function to update the text content of the page
//     const updateContent = (translations) => {
//         // Update meta title
//         document.getElementById('meta-title').textContent = translations.meta_title;

//         // Update nav links using the data-link attributes
//         const navLinks = document.querySelectorAll('.nav-links a');
//         navLinks.forEach(link => {
//             const linkKey = link.dataset.link;
//             if (translations.nav_links[linkKey]) {
//                 link.textContent = translations.nav_links[linkKey];
//             }
//         });

//         // Update main content
//         document.getElementById('page-header-title').textContent = translations.header_title;
//         document.getElementById('page-header-title-2').textContent = translations.header_title;
//         document.getElementById('disclaimer-text').textContent = translations.disclaimer_text;

//         // Milestones
//         document.getElementById('milestones-title').textContent = translations.milestones_title;
//         const milestonesList = document.getElementById('milestones-list');
//         milestonesList.innerHTML = translations.milestones.map(item => `<li>${item}</li>`).join('');

//         // Upcoming Dates
//         document.getElementById('upcoming-dates-title').textContent = translations.upcoming_dates_title;
//         const upcomingDatesContainer = document.getElementById('upcoming-dates-container');
//         upcomingDatesContainer.innerHTML = translations.upcoming_dates.map(event => `
//             <div class="box filled">
//                 <img src="assets/images/event-icon-1.png" alt="Event Icon">
//                 <h3>${event.date}</h3>
//                 <p>${event.location}</p>
//             </div>
//         `).join('');

//         // Physical Programs
//         document.getElementById('physical-programs-title').textContent = translations.physical_programs_title;
//         const physicalProgramsContainer = document.getElementById('physical-programs-container');
//         physicalProgramsContainer.innerHTML = translations.physical_programs.map(program => `
//             <div class="box">
//                 <img src="assets/images/program-icon-a.png" alt="Program Icon">
//                 ${program}
//             </div>
//         `).join('');

//         // Regular Events
//         document.getElementById('regular-events-title').textContent = translations.regular_events_title;
//         const regularEventsContainer = document.getElementById('regular-events-container');
//         regularEventsContainer.innerHTML = translations.regular_events.map(event => `
//             <div class="event-item">
//                 <h3>${event.name}</h3>
//                 <div class="box">
//                     <img src="assets/images/event-icon-4.png" alt="Event Icon">
//                     ${event.content}
//                 </div>
//             </div>
//         `).join('');

//         document.getElementById('social-media-title').textContent = translations.social_media_title;

//         // Contact Form
//         document.getElementById('contact-form-title').textContent = translations.contact_form_title;
//         document.getElementById('name-label').textContent = translations.contact_form.name_label;
//         document.getElementById('email-label').textContent = translations.contact_form.email_label;
//         document.getElementById('subject-label').textContent = translations.contact_form.subject_label;
//         document.getElementById('message-label').textContent = translations.contact_form.message_label;
//         document.getElementById('name').placeholder = translations.contact_form.placeholder_name;
//         document.getElementById('email').placeholder = translations.contact_form.placeholder_email;
//         document.getElementById('subject').placeholder = translations.contact_form.placeholder_subject;
//         document.getElementById('message').placeholder = translations.contact_form.placeholder_message;
//         document.getElementById('submit-btn').textContent = translations.contact_form.button;

//         // Footer
//         document.getElementById('footer-copyright').textContent = translations.footer.copyright;
//         document.getElementById('subscribe-title').textContent = translations.footer.subscribe_title;
//         document.getElementById('subscribe-text').textContent = translations.footer.subscribe_text;
//         document.getElementById('subscribe-button').textContent = translations.footer.subscribe_button;
//         document.getElementById('contact-title').textContent = translations.footer.contact_title;
//         document.getElementById('contact-address').innerHTML = translations.footer.contact_address;
//         document.getElementById('contact-phone').textContent = translations.footer.contact_phone;
//         document.getElementById('contact-email').textContent = translations.footer.contact_email;
//         document.getElementById('contact-other-centers').textContent = translations.footer.contact_other_centers;
//         document.getElementById('download-title').textContent = translations.footer.download_title;
//         document.getElementById('app-ios').textContent = translations.footer.app_ios;
//         document.getElementById('app-android').textContent = translations.footer.app_android;
//     };

//     // Event listener for language buttons
//     langSwitcher.addEventListener('click', (event) => {
//         if (event.target.classList.contains('lang-btn')) {
//             const lang = event.target.dataset.lang;
//             loadPageData(lang);
//         }
//     });

//     // Load the saved language on initial page load, or default to 'en'
//     const savedLang = localStorage.getItem('site-language') || 'en';
//     loadPageData(savedLang);

//     // Call the function to set up the slider when the DOM is loaded
//     setupImageSlider();
    
//     // Intersection Observer for fade-up animations (this part remains the same)
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
    
//     // Hide cover photo title on scroll (this part remains the same)
//     const coverPhotoTitle = document.querySelector('.cover-photo h2');
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 100) {
//             coverPhotoTitle.classList.add('hidden');
//         } else {
//             coverPhotoTitle.classList.remove('hidden');
//         }
//     });

//     // Form submission script (this part remains the same)
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

    const langSwitcher = document.querySelector('.lang-switcher');
    const langButtons = document.querySelectorAll('.lang-btn');

    // Function to fetch and render the page data for a specific language
    const loadPageData = async (lang) => {
        try {
            const response = await fetch(`assets/data/${lang}.json`);
            if (!response.ok) {
                console.error(`Error: Failed to load data file for language '${lang}'. Check the file path.`);
                throw new Error('Failed to load data file.');
            }
            const data = await response.json();
            updateContent(data);
            localStorage.setItem('site-language', lang); // Save the language preference

            langButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    // Function to handle the auto-scrolling image slider
    const setupImageSlider = () => {
        const images = document.querySelectorAll('.slider-image');
        let currentIndex = 0;
        if (images.length === 0) {
            console.warn("Image slider not found or has no images.");
            return;
        }

        const showNextImage = () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        };

        setInterval(showNextImage, 3000);
    };

    // Function to safely update content, logging an error if an element is not found
    const updateTextContent = (id, text) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        } else {
            console.error(`Element with ID '${id}' not found.`);
        }
    };

    // Function to safely update inner HTML
    const updateInnerHTML = (id, html) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = html;
        } else {
            console.error(`Element with ID '${id}' not found.`);
        }
    };
    
    const updateContent = (translations) => {
        updateTextContent('meta-title', translations.meta_title);

        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const linkKey = link.dataset.link;
            if (translations.nav_links[linkKey]) {
                link.textContent = translations.nav_links[linkKey];
            }
        });

        updateTextContent('page-header-title', translations.header_title);
        updateTextContent('page-header-title-2', translations.header_title);
        updateTextContent('disclaimer-text', translations.disclaimer_text);
        updateTextContent('milestones-title', translations.milestones_title);
        updateInnerHTML('milestones-list', translations.milestones.map(item => `<li>${item}</li>`).join(''));
        updateTextContent('upcoming-dates-title', translations.upcoming_dates_title);
        updateInnerHTML('upcoming-dates-container', translations.upcoming_dates.map(event => `
            <div class="box filled">
                <img src="assets/images/event-icon-1.png" alt="Event Icon">
                <h3>${event.date}</h3>
                <p>${event.location}</p>
            </div>
        `).join(''));
        updateTextContent('physical-programs-title', translations.physical_programs_title);
        updateInnerHTML('physical-programs-container', translations.physical_programs.map(program => `
            <div class="box">
                <img src="assets/images/program-icon-a.png" alt="Program Icon">
                ${program}
            </div>
        `).join(''));
        updateTextContent('regular-events-title', translations.regular_events_title);
        updateInnerHTML('regular-events-container', translations.regular_events.map(event => `
            <div class="event-item">
                <h3>${event.name}</h3>
                <div class="box">
                    <img src="assets/images/event-icon-4.png" alt="Event Icon">
                    ${event.content}
                </div>
            </div>
        `).join(''));
        updateTextContent('social-media-title', translations.social_media_title);
        updateTextContent('contact-form-title', translations.contact_form_title);
        updateTextContent('name-label', translations.contact_form.name_label);
        updateTextContent('email-label', translations.contact_form.email_label);
        updateTextContent('subject-label', translations.contact_form.subject_label);
        updateTextContent('message-label', translations.contact_form.message_label);
        updateInnerHTML('name', translations.contact_form.placeholder_name); // Placeholder update
        updateInnerHTML('email', translations.contact_form.placeholder_email);
        updateInnerHTML('subject', translations.contact_form.placeholder_subject);
        updateInnerHTML('message', translations.contact_form.placeholder_message);
        updateTextContent('submit-btn', translations.contact_form.button);
        updateTextContent('footer-copyright', translations.footer.copyright);
        updateTextContent('subscribe-title', translations.footer.subscribe_title);
        updateTextContent('subscribe-text', translations.footer.subscribe_text);
        updateTextContent('subscribe-button', translations.footer.subscribe_button);
        updateTextContent('contact-title', translations.footer.contact_title);
        updateInnerHTML('contact-address', translations.footer.contact_address);
        updateTextContent('contact-phone', translations.footer.contact_phone);
        updateTextContent('contact-email', translations.footer.contact_email);
        updateTextContent('contact-other-centers', translations.footer.contact_other_centers);
        updateTextContent('download-title', translations.footer.download_title);
        updateTextContent('app-ios', translations.footer.app_ios);
        updateTextContent('app-android', translations.footer.app_android);
    };

    // Event listener for language buttons
    langSwitcher.addEventListener('click', (event) => {
        if (event.target.classList.contains('lang-btn')) {
            const lang = event.target.dataset.lang;
            loadPageData(lang);
        }
    });
    
    const savedLang = localStorage.getItem('site-language') || 'en';
    loadPageData(savedLang);
    setupImageSlider();

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
        if (window.scrollY > 100) {
            coverPhotoTitle.classList.add('hidden');
        } else {
            coverPhotoTitle.classList.remove('hidden');
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

            const YOUR_BACKEND_ENDPOINT_URL = 'https://formspree.io/f/YOUR_FORM_ID';

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