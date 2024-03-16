  // Data link untuk setiap buku
  const bookLinks = [
    { text: "UNITY", url: "z_bukus/unity/unity.html" },
    { text: "BLENDER", url: "z_bukus/blender/blender.html" },
    { text: "LINK WEB", url: "z_bukus/link_web/link_web.html" },
    { text: "TREE LINE", url: "z_bukus/structure_tree/tree_line.html" },
  ];

  // Membuat elemen <li> dan menambahkannya ke dalam <ul>
  const bukuList = document.getElementById("bukuList");
  bookLinks.forEach((book) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("boxAmenu");
    a.href = "javascript:void(0);";
    a.textContent = book.text;
    a.addEventListener("click", function () {
      console.log("tidak bisa di muatL: ", book.url); // Tambahkan pesan log
      loadIframe(book.url);
    });
    li.appendChild(a);
    bukuList.appendChild(li);
  });