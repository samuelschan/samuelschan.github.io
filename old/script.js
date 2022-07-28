var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var collcontent = this.nextElementSibling;
        if (collcontent.style.display === "block") {
          collcontent.style.display = "none";
        } else {
          collcontent.style.display = "block";
        }
    });
}
