export function renderVenue(config) {
  return `
    <section class="section section--cream venue">
      <div class="container">
        <h2 class="section-title">Локация</h2>
        <div class="divider"></div>
        <p class="venue__lead">Мы ждем вас в ресторане «${config.restaurant}»</p>
        <p class="venue__address">${config.address}</p>

        <div class="venue__image">
          <span class="venue__pin">📍</span>
        </div>

        <a
          href="${config.href}"
          target="_blank"
          rel="noopener noreferrer"
          class="button"
        >
          Проложить маршрут
        </a>
      </div>
    </section>
  `;
}
