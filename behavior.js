
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
};


window.onload = () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Affichage d'un message de bienvenue dynamique
    const welcomeMessage = document.createElement("div");
    welcomeMessage.innerHTML = `<p>🎶 Bienvenue sur Guitare Express ! Prêt à apprendre ? 🎸</p>`;
    welcomeMessage.style.cssText = "background: #f39c12; color: white; padding: 10px; text-align: center;";
    document.body.prepend(welcomeMessage);
};


document.querySelectorAll("img.small").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.2)";
        img.style.transition = "0.3s";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", () => {
    const topButton = document.createElement("button");
    topButton.innerText = "🔝";
    topButton.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px;border-radius:50%;background:#222;color:white;border:none;cursor:pointer;font-size:20px;";
    
    topButton.onclick = scrollToTop;
    document.body.appendChild(topButton);
});
