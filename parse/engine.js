export class BasicAritEngine {
    static render(selector = ".arit", options = {}) {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add("bae-root");

            el.style.fontSize = options.size || "1.4em";
            el.style.color = options.color || "#000";
            el.dataset.font = options.font || "math";

            const raw = el.textContent;
            el.dataset.raw = raw;
            el.innerHTML = this.parse(raw);

            this._menu.attach(el);
            this._selection.attach(el);
        });
    }

    static parse(expr) {
    let html = expr;

    // 1️⃣ Operators FIRST (only on raw text)
    html = html
        .replace(/\*/g, "×")
        .replace(/-/g, "−");

    // 2️⃣ Fractions LAST (so HTML is final)
    html = html.replace(/(\d+)\s*\/\s*(\d+)/g, `
        <span class="fraction">
            <span class="top">$1</span>
            <span class="bar"></span>
            <span class="bottom">$2</span>
        </span>
    `);

    return html;
}

}
