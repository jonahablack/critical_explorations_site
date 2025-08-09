fetch('/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;

    // Dropdown (Education)
    const dropdown = document.querySelector('#site-header .dropdown');
    const submenu  = document.querySelector('#site-header .submenu');
    const trigger  = document.querySelector('#site-header .menu-education');
    if (dropdown && submenu && trigger) {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        submenu.style.display =
          submenu.style.display === 'block' ? 'none' : 'block';
      });
      document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)) submenu.style.display = 'none';
      });
      window.addEventListener('scroll', () => submenu.style.display = 'none');
      window.addEventListener('resize', () => submenu.style.display = 'none');
    }

    // Mobile nav & animated hamburger toggle
    const ham    = document.querySelector('#site-header #hamburger-menu');
    const overlay= document.querySelector('#site-header #mobile-nav-overlay');
    if (ham && overlay) {
      ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        overlay.classList.toggle('open');
      });
    }
  });





