import { useEffect } from 'react';

const useTilt = (selector = '.tilt-card', maxTilt = 12) => {
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const cards = document.querySelectorAll(selector);
    const handlers = [];

    cards.forEach(card => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;   // 0..1
        const y = (e.clientY - rect.top) / rect.height;    // 0..1
        const rotateY = (x - 0.5) * maxTilt * 2;           // -maxTilt..+maxTilt
        const rotateX = (0.5 - y) * maxTilt * 2;
        const glareX = 50 + (x - 0.5) * 60;
        const glareY = 50 + (y - 0.5) * 60;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
        card.style.backgroundImage = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.10) 0%, transparent 60%)`;
        card.style.transition = 'none';
      };

      const onLeave = () => {
        card.style.transition = 'transform 0.4s ease-out, background-image 0.4s ease-out';
        card.style.transform = '';
        card.style.backgroundImage = '';
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      handlers.push({ card, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
        card.style.transform = '';
        card.style.backgroundImage = '';
      });
    };
  }, [selector, maxTilt]);
};

export default useTilt;
