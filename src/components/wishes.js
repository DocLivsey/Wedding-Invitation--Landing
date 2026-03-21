export function renderWishes(config) {
  return `
    <section class="section section--white section--border-bottom wishes">
      <div class="container">
        <h2 class="section-title">Детали и пожелания</h2>
        <div class="divider"></div>
        <div class="wishes__grid">
          <article class="wine-card wine-card--white">
            <div class="wine-card__overlay">
              <span>Белое</span>
              <small>Мальчик</small>
            </div>
          </article>
          <div class="wishes__text">
            <p>
              Мы будем благодарны, если вместо традиционных цветов вы подарите нам бутылочку хорошего вина,
              которая скрасит один из наших будущих семейных вечеров.
            </p>
            <p class="wishes__accent">У нас есть традиция-сюрприз!</p>
            <p class="wishes__hint">
              Если вы думаете, что, в будущем, первым у молодоженов родится мальчик, подарите им белое вино.
              Если вы уверены, что это будет девочка - подарите красное!
            </p>
          </div>
          <article class="wine-card wine-card--red">
            <div class="wine-card__overlay">
              <span>Красное</span>
              <small>Девочка</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}