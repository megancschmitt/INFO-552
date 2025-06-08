// Confirm JavaScript is loading
console.log("JavaScript is connected!");

document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.dropdown-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent navigation
      const menu = this.nextElementSibling;
      menu.classList.toggle('hidden');
    });
  });
});
