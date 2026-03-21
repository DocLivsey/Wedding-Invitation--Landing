export function renderVenue(config) {
  return `
    <section class="section section--cream venue" data-parallax-section>
      <div class="container">
        <h2 class="section-title" data-anim-fade-up>Локация</h2>
        <div class="divider" data-anim-fade-up style="--anim-delay:100ms;"></div>
        <p class="venue__lead" data-anim-fade-up style="--anim-delay:220ms;">Мы ждем вас в ресторане «${config.restaurant}»</p>
        <p class="venue__address" data-anim-fade-up style="--anim-delay:340ms;">${config.address}</p>

        <div class="venue__image" data-anim-fade-up style="--anim-delay:460ms;">
          <button
            type="button"
            class="venue__pin"
            aria-label="Увеличить фото локации"
          >
            📍
          </button>
        </div>

        <a
          href="${config.href}"
          target="_blank"
          rel="noopener noreferrer"
          class="button venue__route-button"
          data-anim-fade-up
          style="--anim-delay:580ms;"
        >
          Проложить маршрут
        </a>
      </div>
    </section>
  `;
}
