document.addEventListener('DOMContentLoaded', () => {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.gap = '10px';
        
        Object.keys(notes).forEach(note => {
            const button = document.createElement('button');
            button.textContent = note;
            button.style.padding = '10px';
            button.style.fontSize = '16px';
            button.addEventListener('click', () => playNote(notes[note]));
            container.appendChild(button);
        });
        
        document.body.appendChild(container);
    });
    
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("mouseenter", () => img.style.transform = "scale(1.1)");
        img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
        img.style.transition = "transform 0.3s ease";
    });

   
    document.querySelectorAll("header ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

