function showTable() {
  document
    .getElementById("mostrarTabela")
    .addEventListener("click", function () {
      var tabela = document.getElementById("tabelaTamanhos");
      if (tabela.style.display === "none") {
        tabela.style.display = "table";
      } else {
        tabela.style.display = "none";
      }
    });
}

let slideIndex = 0;

function slide() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(slide, 2000);
}
