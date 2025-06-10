document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const leftBtn = document.querySelector('.left-scroll-btn');
    const rightBtn = document.querySelector('.right-scroll-btn');

    leftBtn.addEventListener('click', () => {
      gallery.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      gallery.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Navigation between home, services and policy
    const homeLink = document.getElementById('home-link');
    const servicesLink = document.getElementById('services-link');
    const policyLink = document.getElementById('policy-link');
    const contactLink = document.getElementById('contact-link');

    const homeContent = document.getElementById('home-content');
    const servicesContent = document.getElementById('services-content');
    const policyContent = document.getElementById('policy-content');
    const contactContent = document.getElementById('contact-content');

    function showHome() {
      homeContent.style.display = 'block';
      servicesContent.style.display = 'none';
      policyContent.style.display = 'none';
      contactContent.style.display = 'none';
    }

    function showServices() {
      homeContent.style.display = 'none';
      servicesContent.style.display = 'block';
      policyContent.style.display = 'none';
      contactContent.style.display = 'none';
    }

    function showPolicy() {
      homeContent.style.display = 'none';
      servicesContent.style.display = 'none';
      policyContent.style.display = 'block';
      contactContent.style.display = 'none';
    }

    function showContact() {
      homeContent.style.display = 'none';
      servicesContent.style.display = 'none';
      policyContent.style.display = 'none';
      contactContent.style.display = 'block';
    }

    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      showHome();
    });

    servicesLink.addEventListener('click', (e) => {
      e.preventDefault();
      showServices();
    });

    policyLink.addEventListener('click', (e) => {
      e.preventDefault();
      showPolicy();
    });

    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      showContact();
    });

    // Initialize with home content shown
    showHome();

    // POPUP FUNCTIONALITY 
    const popupOverlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('closeBtn');

    // Only set up popup if elements exist
    if (popupOverlay && closeBtn) {
      // Function to close popup
      function closePopup() {
        popupOverlay.classList.add('hidden');
        // Store in sessionStorage that popup was closed
        sessionStorage.setItem('popupClosed', 'true');
      }

      // Function to show popup
      function showPopup() {
        popupOverlay.classList.remove('hidden');
      }

      // Close popup when X button is clicked
      closeBtn.addEventListener('click', closePopup);

      // Close popup when clicking outside the image
      popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
          closePopup();
        }
      });

      // Close popup with Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !popupOverlay.classList.contains('hidden')) {
          closePopup();
        }
      });

      // Show popup on page load (if not previously closed)
      if (!sessionStorage.getItem('popupClosed')) {
        showPopup();
      }
    }
});

// Facebook SDK initialization - separate from popup functionality
window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v18.0'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
