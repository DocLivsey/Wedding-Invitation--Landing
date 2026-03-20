export function renderVenue() {
  return `
    <section class="section section--cream venue">
      <div class="container">
        <h2 class="section-title">Локация</h2>
        <div class="divider"></div>
        <p class="venue__lead">Мы ждем вас в ресторане «Соляная Биржа»</p>
        <p class="venue__address">г. Нижний Новгород, ул. Сибирская, 3</p>

        <div class="venue__image">
          <span class="venue__pin">📍</span>
        </div>

        <a
          href="https://yandex.ru/maps/-/CDu~mZNW"
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
