document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      // Only enable click-toggle on small screens
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;

        // Close other open dropdowns (optional)
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdownMenu) menu.classList.remove('visible');
        });

        dropdownMenu.classList.toggle('visible');
      }
    });
  });

  // Optional: Close dropdown if clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.dropdown-menu.visible').forEach(menu =>
        menu.classList.remove('visible')
      );
    }
  });
});
