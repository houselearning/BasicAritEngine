# BasicAritEngine

BasicAritEngine is a lightweight JavaScript arithmetic rendering engine —
inspired by MathJax, but designed for simplicity, speed, and education.

## Features
- + − × ÷ processing
- Stacked fractions
- Font switching (math / arial / code)
- Size and color control
- Right-click context menu
- Copy HTML or plain text
- Selection tooltip with RGB info

## Example
👉 

## Usage
```html
<link rel="stylesheet" href="engine.css">
<script src="menu.js"></script>
<script src="parse/engine.js"></script>

<p class="arit">3/4 + 2 * (5 - 1)</p>

<script>
BasicAritEngine.render(".arit", {
    size: "1.6em",
    color: "#222",
    font: "math"
});
</script>
