//untuk ambil iframe
function loadIframe(url) {
  console.log("URL yang akan dimuat:", url);
  var iframe = document.getElementById("ambilIframe");
  iframe.src = url;
  document.querySelector(".menu").classList.toggle("active");
}
/*
//========================================================================================================================
saat layar dengan minimal 991px load iframenya*/

const mediaQuery = window.matchMedia("(min-width: 991px)");

function handleMediaQueryChange(event) {
  const iframeElement = document.getElementById("ambilIframe");
  const contentURL = "z_bukus/structure_tree/structure_tree.html"; // Ganti dengan alamat yang sesuai

  if (event.matches) {
    iframeElement.src = contentURL;
  }
}

mediaQuery.addEventListener(handleMediaQueryChange(mediaQuery)); // Panggil fungsi pertama kali saat halaman dimuat

//list html yang sedang di test
// z_bukus/structure_tree/structure_tree.html
// z_bukus/link_web/link_web.html

/*end*/
