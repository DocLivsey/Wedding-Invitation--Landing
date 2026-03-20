export function renderHero(config) {
  return `
    <section class="hero section section--cream">
      <div class="hero__bg"></div>
      <div class="hero__content container">
        <p class="eyebrow">Приглашение на свадьбу</p>
        <h1 class="hero__title">${config.coupleNames}</h1>
        <div class="hero__date">
          <span>25</span>
          <span class="heart">❤</span>
          <span>09</span>
          <span class="heart">❤</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  `;
}
