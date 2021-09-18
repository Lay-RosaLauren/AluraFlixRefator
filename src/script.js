function Filmed() {
  video = document.querySelector("#filme").value;
  vFilme = [video.substring(0, 24), video.substring(32, 43)];
  filmeFav(video);
  filme.value = "";
}

function filmeFav(video) {
  if (video.includes("https://www.youtube.com/watch?v=")) {
    exibirNaTela(video);
  } else {
    alert("O Link Deve Ser de Um Vídeo no YouTube!");
    video = "";
  }
}

function exibirNaTela() {
  listaFilmes = document.querySelector("#listaFilmes");
  elementoFilme =
    "<iframe src=" +
    vFilme[0] +
    "embed/" +
    vFilme[1] +
    " frameborder='0' allowfullscreen></iframe>";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}
