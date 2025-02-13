document.addEventListener("DOMContentLoaded", function() {
    // Ascunde contactele inițial
    let hiddenContacts = document.querySelector(".hidden-contacts");
    hiddenContacts.style.display = "none";

    // Adaugă evenimentul pentru buton
    document.getElementById("show-more").addEventListener("click", function() {
        if (hiddenContacts.style.display === "none" || hiddenContacts.style.display === "") {
            hiddenContacts.style.display = "flex"; // Afișează contactele
            this.innerHTML = 'Show Less <i class="fa fa-arrow-up"></i>';
        } else {
            hiddenContacts.style.display = "none"; // Ascunde contactele
            this.innerHTML = 'Show More <i class="fa fa-arrow-down"></i>';
        }
    });
});