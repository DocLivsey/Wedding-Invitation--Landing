export function renderDateSection(config) {
  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const dates = [10, 11, 12, 13, 14, 15, 16];

  return `
    <section class="section section--cream section--bordered date-section">
      <div class="container">
        <h2 class="section-title">${config.weddingDate.month.string} ${config.weddingDate.year}</h2>
        <p class="section-subtitle">Наше «навсегда» начнется...</p>

        <div class="calendar">
          ${days.map((day) => `<div class="calendar__weekday">${day}</div>`).join("")}
          ${dates
            .map(
              (date) => `
              <div class="calendar__day">
                <span class="${date === config.weddingDate.day ? "calendar__day--special" : ""}">
                  ${date}
                </span>
                ${date === config.weddingDate.day ? '<span class="calendar__heart">❤</span>' : ""}
              </div>
            `,
            )
            .join("")}
        </div>

        <p class="date-section__note">Не стройте планы на ${config.weddingDate.month.string} - мы ждем вас на нашей свадьбе!</p>

        <div class="countdown" data-countdown>
          <div class="countdown__cell"><span data-days>0</span><small>дней</small></div>
          <span class="countdown__separator">:</span>
          <div class="countdown__cell"><span data-hours>00</span><small>часов</small></div>
          <span class="countdown__separator">:</span>
          <div class="countdown__cell"><span data-minutes>00</span><small>минут</small></div>
          <span class="countdown__separator">:</span>
          <div class="countdown__cell"><span data-seconds>00</span><small>секунд</small></div>
        </div>
      </div>
    </section>
  `;
}
