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

        // 1️⃣ Escape HTML
        html = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // 2️⃣ Operators first
        html = html
            .replace(/\*/g, "×")
            .replace(/-/g, "−")
            .replace(/\+/g, "+");

        // 3️⃣ Exponents: a^b -> a<sup>b</sup>
        html = html.replace(/(\d+|\w+)\^(\d+|\w+)/g, "$1<sup>$2</sup>");

        // 4️⃣ Roots: sqrt(...) -> √(...)
        html = html.replace(/sqrt\((.*?)\)/g, "√($1)");

        // 5️⃣ Fractions: a/b -> stacked
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
