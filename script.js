// ========== Seletores ==========
const body = document.body;
const leituraBtn = document.createElement("button");
const themeBtn = document.createElement("button");

// ========== Estilos dos botões ==========
leituraBtn.textContent = "📖 Modo Leitura";
themeBtn.textContent = "🌙 Tema Escuro";

leituraBtn.style.position = themeBtn.style.position = "fixed";
leituraBtn.style.bottom = "20px";
themeBtn.style.bottom = "70px";
leituraBtn.style.right = themeBtn.style.right = "20px";

[leituraBtn, themeBtn].forEach(btn => {
    btn.style.padding = "10px 14px";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.background = "#c8102e";
    btn.style.color = "white";
    btn.style.fontSize = "14px";
    btn.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
    btn.style.transition = "0.3s";
    btn.onmouseover = () => btn.style.background = "#003478";
    btn.onmouseout = () => btn.style.background = "#c8102e";
});

// ========== Adiciona ao body ==========
document.body.appendChild(themeBtn);
document.body.appendChild(leituraBtn);

// ========== Função: Tema Claro/Escuro ==========
let darkMode = false;
themeBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    if (darkMode) {
        body.style.background = "#111";
        body.style.color = "#f1f1f1";
        themeBtn.textContent = "☀️ Tema Claro";
    } else {
        body.style.background = "linear-gradient(180deg, #ffffff, #f0f0f0)";
        body.style.color = "#111";
        themeBtn.textContent = "🌙 Tema Escuro";
    }
});

// ========== Função: Modo Leitura ==========
let leituraAtiva = false;
leituraBtn.addEventListener("click", () => {
    leituraAtiva = !leituraAtiva;
    const textos = document.querySelectorAll("#texto");
    textos.forEach(txt => {
        if (leituraAtiva) {
            txt.style.lineHeight = "2";
            txt.style.fontSize = "1.3rem";
        } else {
            txt.style.lineHeight = "1.6";
            txt.style.fontSize = "1rem";
        }
    });
});

// ========== Scroll suave nos links ==========
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        if (destino) {
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });
});
