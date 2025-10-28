//Hamburger
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            body.classList.toggle('nav-active');
            const isExpanded = body.classList.contains('nav-active');
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
});

//SFX Logo
const logoRinoria = document.getElementById("logoRinoria");
  const clickSound = document.getElementById("clickSound");

  logoRinoria.addEventListener("mouseenter", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });

    