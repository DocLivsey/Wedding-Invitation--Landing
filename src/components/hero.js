export function renderHero(config) {
  return `
    <section class="hero section section--cream">
      <div class="hero__bg"></div>
      <div class="hero__content container">
        <p class="eyebrow">Приглашение на свадьбу</p>
        <h1 class="hero__title">${config.coupleNames}</h1>
        <div class="hero__date">
          <span>${String(config.weddingDate.day).padStart(2, '0')}</span>
          <span class="heart">❤</span>
          <span>${String(config.weddingDate.month.numeric).padStart(2, '0')}</span>
          <span class="heart">❤</span>
          <span>${config.weddingDate.year}</span>
        </div>
      </div>
    </section>
  `;
}
