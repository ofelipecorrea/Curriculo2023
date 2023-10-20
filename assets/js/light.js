document.addEventListener("DOMContentLoaded", function() {
               const themeIcon = document.querySelector(".theme__icon");
               const inicio = document.querySelector(".Inicio");
               const pElements = document.querySelectorAll("section p");
           
               themeIcon.addEventListener("click", function() {
                   inicio.style.backgroundColor = "#FFFFF9"; // Define o background color da classe .Inicio
                   pElements.forEach(p => p.style.color = "#000"); // Define a cor do texto das tags <p>
               });
           });