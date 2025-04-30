// src/components/AppScripts.js
import { useEffect } from 'react';

export default function AppScripts() {
  useEffect(() => {
    // ===== Header Scroll =====
    const header = document.getElementById('header1');
    let lastScrollPosition = 0;
    const scrollThreshold = 300;

    const onScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > scrollThreshold) {
        header.style.transform =
          currentScroll > lastScrollPosition
            ? 'translateY(-100%)'
            : 'translateY(0)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScrollPosition = currentScroll;
    };

    window.addEventListener('scroll', onScroll);

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
    const mobileMenu = document.querySelector('.mobile-menu');

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
    const track = document.querySelector('.slider-track');
    const images = document.querySelectorAll('.slider-track img');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    const updateSlide = () => {
      if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    };

    const next = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide();
    };

    const prev = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlide();
    };

    nextBtn?.addEventListener('click', next);
    prevBtn?.addEventListener('click', prev);

    updateSlide();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      nextBtn?.removeEventListener('click', next);
      prevBtn?.removeEventListener('click', prev);
      openMenuBtn?.removeEventListener('click', openMenu);
      closeMenuBtn?.removeEventListener('click', closeMenu);
      menuLinks.forEach((link) =>
        link.removeEventListener('click', closeMenu)
      );
    };
  }, []);

  return null; // Esse componente só existe pra rodar os scripts
}
