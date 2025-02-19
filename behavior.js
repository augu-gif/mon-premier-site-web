document.addEventListener("DOMContentLoaded", function(event) {

});
var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.addEventListener("click", function() {
  alert("I saw you click!")
});
var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.className;""
if (thumbnailElement.className == "") {
	// write here the code that will execute if the image is big
}
var disqus_config = function () {
                    this.page.url = 'https://votre-site.com'; // URL de votre page
                    this.page.identifier = 'guitare-express'; // Identifiant unique de votre page
                };

                (function() {
                    var d = document, s = d.createElement('script');
                    s.src = 'https://votre-disqus-shortname.disqus.com/embed.js'; // Remplacez par votre shortname
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
function showResult() {
        const q1 = document.querySelector('input[name="q1"]:checked').value;
        const q2 = document.querySelector('input[name="q2"]:checked').value;
        let result = "";

        if (q1 === "rock" && q2 === "100") {
            result = "Nous vous recommandons une guitare électrique d'entrée de gamme.";
        } else if (q1 === "classique" && q2 === "300") {
            result = "Une guitare classique de milieu de gamme serait parfaite pour vous.";
        } else {
            result = "Une guitare acoustique polyvalente serait un bon choix.";
        }

        document.getElementById("result").innerText = result;
    }
