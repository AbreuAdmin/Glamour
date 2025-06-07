import { useEffect } from 'react';

export default function AppScripts() {
  useEffect(() => {
    // ===== Theme Toggle =====
    const themeContainer = document.getElementById('theme');
    if (themeContainer) {
      const lightBtn = themeContainer.querySelector('.light');
      const darkBtn = themeContainer.querySelector('.dark');

      const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      };

      const savedTheme = localStorage.getItem('theme') || 'light';
      applyTheme(savedTheme);

      lightBtn?.addEventListener('click', () => applyTheme('light'));
      darkBtn?.addEventListener('click', () => applyTheme('dark'));
    }

    // ===== Menu Mobile =====
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('menu');

    const openMenu = () => {
      mobileMenu?.classList.add('active');
      document.body.classList.add('no-scroll');
    };
    
    const closeMenu = () => {
      mobileMenu?.classList.remove('active');
      document.body.classList.remove('no-scroll');
    };

    openMenuBtn?.addEventListener('click', openMenu);
    closeMenuBtn?.addEventListener('click', closeMenu);

    const menuLinks = mobileMenu?.querySelectorAll('a') || [];
    menuLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // ===== Slider =====
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleNext = () => {
      const items = document.querySelectorAll('.item');
      const slide = document.querySelector('.slide');
      if (items.length > 0 && slide) {
        slide.appendChild(items[0]);
      }
    };

    const handlePrev = () => {
      const items = document.querySelectorAll('.item');
      const slide = document.querySelector('.slide');
      if (items.length > 0 && slide) {
        slide.prepend(items[items.length - 1]);
      }
    };

    next?.addEventListener('click', handleNext);
    prev?.addEventListener('click', handlePrev);

    // Cleanup
    return () => {
      next?.removeEventListener('click', handleNext);
      prev?.removeEventListener('click', handlePrev);
      openMenuBtn?.removeEventListener('click', openMenu);
      closeMenuBtn?.removeEventListener('click', closeMenu);
      menuLinks.forEach((link) =>
        link.removeEventListener('click', closeMenu)
      );
    };
  }, []);

  return null;
}
