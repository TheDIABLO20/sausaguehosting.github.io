document.getElementById("btnPlanes")
.addEventListener("click", () => {

    document
    .getElementById("planes")
    .scrollIntoView({
        behavior: "smooth"
    });

});

const botones = document.querySelectorAll(".card button");

botones.forEach(btn => {

    btn.addEventListener("click", () => {

        alert(
            "Gracias por elegir Sausage Hosting 🌭"
        );

    });

});
