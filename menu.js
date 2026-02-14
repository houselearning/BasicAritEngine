export class BAEContextMenu {
    static attach(el) {
        el.addEventListener("contextmenu", e => {
            e.preventDefault();
            this.remove();

            const menu = document.createElement("div");
            menu.className = "bae-menu";
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";

            menu.innerHTML = `
                <div data-action="about">About ▸</div>
                <div data-action="html">Copy HTML ▸</div>
                <div data-action="text">Copy Plain Text</div>
            `;

            menu.addEventListener("click", ev => {
                const action = ev.target.dataset.action;
                if (!action) return;

                if (action === "about") alert("BasicAritEngine v2 — Math Renderer with fractions, exponents, roots");
                if (action === "html") navigator.clipboard.writeText(el.innerHTML);
                if (action === "text") navigator.clipboard.writeText(el.dataset.raw);

                this.remove();
            });

            document.body.appendChild(menu);
        });

        document.addEventListener("click", this.remove);
    }

    static remove() { document.querySelectorAll(".bae-menu").forEach(m => m.remove()); }
}

export class BAESelection {
    static attach(el) {
        el.addEventListener("mouseup", () => {
            const sel = window.getSelection();
            if (!sel.toString()) return;

            this.removeTooltip();

            const rect = sel.getRangeAt(0).getBoundingClientRect();
            const tip = document.createElement("div");
            tip.className = "bae-tooltip";
            tip.style.left = rect.left + "px";
            tip.style.top = rect.top - 30 + "px";
            tip.textContent = "Highlight";

            tip.onclick = () => {
                const rgb = getComputedStyle(el).color;
                alert("RGB: " + rgb);
                this.removeTooltip();
            };

            document.body.appendChild(tip);
        });
    }

    static removeTooltip() { document.querySelectorAll(".bae-tooltip").forEach(t => t.remove()); }
}
