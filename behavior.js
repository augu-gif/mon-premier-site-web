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