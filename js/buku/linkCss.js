 // Daftar URL file CSS yang ingin dimasukkan
 var cssFiles = [
    "../../../css/book/style.css",
    "../../../css/book/style1.css",
    // Tambahkan file CSS lainnya jika diperlukan
  ];

  // Loop melalui setiap URL file CSS dan sisipkan mereka ke dalam elemen head
  cssFiles.forEach(function (cssFile) {
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = cssFile;
    document.head.appendChild(cssLink);
  });