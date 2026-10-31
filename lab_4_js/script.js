function setupSystemInfo() {
  const browserData = `Платформа: ${navigator.platform} | Браузер: ${navigator.userAgent}`;
  localStorage.setItem('vanillaSystemInfo', browserData);

  const savedData = localStorage.getItem('vanillaSystemInfo');
  const footerElement = document.getElementById('systemInfo');
  if (footerElement) {
    footerElement.textContent = `Системна інформація: ${savedData}`;
  }
}


async function loadReviews() {
  const variant = 9;
  const container = document.getElementById('reviewsContainer');

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`);
    const comments = await response.json();

    if (container) {
      container.innerHTML = '';

      comments.forEach((comment) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
          <h4>${comment.name}</h4>
          <span class="email">${comment.email}</span>
          <p>${comment.body}</p>
        `;
        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error('Помилка завантаження відгуків:', error);
    if (container) {
      container.innerHTML = '<p>Не вдалося завантажити відгуки.</p>';
    }
  }
}


function setupModal() {
  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('closeModalBtn');

  setTimeout(() => {
    if (modal) modal.classList.remove('hidden');
  }, 60000);

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }
}


function setupTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  let isDark = true;

  function applyTheme() {
    if (isDark) {
      document.body.className = 'dark-theme';
      if (toggleBtn) toggleBtn.textContent = '☀️ Денний режим';
    } else {
      document.body.className = 'light-theme';
      if (toggleBtn) toggleBtn.textContent = '🌙 Нічний режим';
    }
  }

  applyTheme();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isDark = !isDark;
      applyTheme();
    });
  }
}

setupSystemInfo();
loadReviews();
setupModal();
setupTheme();