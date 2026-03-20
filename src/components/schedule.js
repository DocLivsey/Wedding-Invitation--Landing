const events = [
  { time: "14:00", title: "Сбор гостей", description: "Фуршет и приветственный напиток", icon: "👥" },
  { time: "15:00", title: "Выездная регистрация", description: "Самый трогательный момент и обмен кольцами", icon: "🤍" },
  { time: "16:00", title: "Праздничный банкет", description: "Вкусная еда, танцы и поздравления", icon: "🥂" },
  { time: "21:00", title: "Свадебный торт", description: "Сладкое завершение вечера", icon: "🎂" },
];

export function renderSchedule() {
  return `
    <section class="section section--white schedule">
      <div class="container container--narrow">
        <h2 class="section-title">Тайминг дня</h2>
        <div class="divider"></div>
        <div class="timeline">
          ${events
            .map(
              (event) => `
              <div class="timeline__item">
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
