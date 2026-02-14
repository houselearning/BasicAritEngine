import { BasicAritEngine } from "./parse/engine.js";
import { BAEContextMenu, BAESelection } from "./menu.js";

/* ---------- Inject CSS ---------- */
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./engine.css";
document.head.appendChild(link);

/* ---------- Wire dependencies ---------- */
BasicAritEngine._menu = BAEContextMenu;
BasicAritEngine._selection = BAESelection;

/* ---------- Auto-render support ---------- */
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".arit")) {
        BasicAritEngine.render(".arit");
    }
});

/* ---------- Export globally (optional but nice) ---------- */
window.BasicAritEngine = BasicAritEngine;

export default BasicAritEngine;
