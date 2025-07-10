// Loads header.html into the #site-header div and re-initializes dropdown logic
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;
    // Dropdown logic
    const dropdown = document.querySelector('#site-header .dropdown');
    const submenu = document.querySelector('#site-header .submenu');
    const trigger = document.querySelector('#site-header .menu-education');
    if (dropdown && submenu && trigger) {
      // Toggle submenu on click
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      });
      // Hide submenu when clicking outside
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
          submenu.style.display = 'none';
        }
      });
      // Keyboard accessibility
      trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
      });
    }
  }); 