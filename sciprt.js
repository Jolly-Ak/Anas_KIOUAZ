function toggleImage(card) {
    const img = card.querySelector('.project-image');
    if (img.classList.contains('show')) {
      img.classList.remove('show');
      setTimeout(() => img.classList.add('hidden'), 500);
    } else {
      img.classList.remove('hidden');
      setTimeout(() => img.classList.add('show'), 10);
    }
  }
  