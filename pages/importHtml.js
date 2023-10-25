document.addEventListener("DOMContentLoaded", function () {
    const bookItem = document.getElementsByClassName("cardBookItem")[0];

    if (bookItem) {
        fetch("/reusableContent/cardBookItem/bookItem.html")
            .then((response) => response.text())
            .then((cardItemHtml) => {
                bookItem.innerHTML = cardItemHtml;
            })
            .catch((error) => {
                console.error("Error loading the card item:", error);
            });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementsByClassName("navigationHeader")[0];

    if (navbar) {
        fetch("../../reusableContent/navbar/navbarHeader.html")
            .then((response) => response.text())
            .then((navHeaderHtml) => {
                navbar.innerHTML = navHeaderHtml;
            })
            .catch((error) => {
                console.error("Error loading the navigation bar:", error);
            });
    }
});