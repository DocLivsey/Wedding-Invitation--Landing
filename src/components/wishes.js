export function renderWishes(config) {
    return `
        <section class=" ${config.theme}">
            <h1>${config.title}</h1>
            ${
                config.showAfterparty
                    ? `<div class="afterparty">Afterparty included</div>`
                    : ''
            }
        </section>
    `;
}