export function renderWishes(config) {
  return `
    <section class="section section--white section--border-bottom wishes" data-parallax-section>
      <div class="container">
        <h2 class="section-title" data-anim-fade-up>Детали и пожелания</h2>
        <div class="divider" data-anim-fade-up style="--anim-delay:120ms;"></div>
        <div class="wishes__text" data-anim-fade-up style="--anim-delay:360ms;">
          <p>
            Для нас самое главное — чтобы в этот день вы чувствовали себя легко и уютно. 
            Мы не устанавливаем строгих рамок дресс-кода: выбирайте наряд, 
            в котором вам будет комфортно веселиться и праздновать вместе с нами!
          </p>
          <p class="wishes__accent">
            Самый ценный подарок для нас — это ваше присутствие, искренние улыбки и радостные эмоции в этот важный день.
          </p>
          <p>
            Мы будем бесконечно признательны, если вы откажетесь от цветов, 
            чтобы ничто не обременяло вас на празднике и мы могли просто наслаждаться моментом вместе.
          </p>
        </div>
      </div>
    </section>
  `;
}