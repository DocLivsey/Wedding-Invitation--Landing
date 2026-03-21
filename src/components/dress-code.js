const colors = ["#A9A9A9", "#4A4A4A", "#8C2727", "#D2B48C", "#F5D0C5", "#FDF5E6"];

export function renderDressCode() {
  return `
    <section class="section section--white section--border-bottom dress-code" data-parallax-section>
      <div class="container">
        <h2 class="section-title">Дресс-код</h2>
        <div class="divider"></div>
        <p class="dress-code__text" data-anim-dress-text>
          Мы будем рады, если вы поддержите праздничную атмосферу и выберете нарядный, элегантный образ.
          Главное - чувствовать себя комфортно и выглядеть уместно! Будем признательны, если вы выберете
          наряды в следующих оттенках:
        </p>
        <div class="dress-code__palette">
          ${colors
            .map(
              (color, index) =>
                `<span class="dress-code__swatch" data-anim-dress-swatch style="background:${color}; --dress-delay:${index * 90}ms;"></span>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
