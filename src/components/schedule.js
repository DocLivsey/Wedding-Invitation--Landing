const events = [
  { time: "16:00", title: "Сбор гостей", description: "Фуршет и приветственный напиток", icon: "👥" },
  { time: "16:30", title: "Выездная регистрация", description: "Самый трогательный момент и обмен кольцами", icon: "🤍" },
  { time: "17:00", title: "Праздничный банкет", description: "Вкусная еда, танцы и поздравления", icon: "🥂" },
  { time: "22:00", title: "Свадебный торт", description: "Сладкое завершение вечера", icon: "🎂" },
];

export function renderSchedule() {
  return `
    <section class="section section--white schedule" data-parallax-section>
      <div class="container container--narrow">
        <h2 class="section-title">Тайминг дня</h2>
        <div class="divider"></div>
        <div class="timeline">
          ${events
            .map(
              (event, index) => `
              <div class="timeline__item" data-anim-timeline-item style="--timeline-delay: ${index * 140}ms;">
                <div class="timeline__icon">${event.icon}</div>
                <div class="timeline__time">${event.time}</div>
                <h3 class="timeline__title">${event.title}</h3>
                <p class="timeline__description">${event.description}</p>
              </div>
            `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
