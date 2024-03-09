// Ambil elemen container
var container = document.getElementById("treeContainer");

// Variabel untuk menyimpan posisi mouse awal dan posisi kiri atas container
var offsetX, offsetY;
var zoomFactor = 0.4;
container.style.transform = "scale(" + zoomFactor + ")";
var isDragging = false;

// Variabel untuk menyimpan faktor zoom
var zoomFactor = 1;

// Fungsi untuk memulai drag
function startDrag(e) {
  isDragging = true;
  // Simpan posisi awal mouse relatif terhadap posisi kiri atas container
  offsetX = e.clientX - container.getBoundingClientRect().left;
  offsetY = e.clientY - container.getBoundingClientRect().top;

  console.log(`offsetX => ${offsetX}`);
  console.log("offsetY => " + offsetY);
}

// Fungsi untuk menghentikan drag
function stopDrag() {
  isDragging = false;
}

// Fungsi untuk menangani pergerakan drag
function drag(e) {
  if (isDragging) {
    // Hitung perbedaan antara posisi mouse saat ini dan posisi awal
    var dx = e.clientX - offsetX;
    var dy = e.clientY - offsetY;

    // Atur posisi container sesuai perbedaan
    container.style.left = dx + "px";
    container.style.top = dy + "px";
  }
}

// Fungsi untuk menangani zoom
function zoom(e) {
  e.preventDefault();
  var delta = e.deltaY || e.detail || e.wheelDelta;

  // Menyesuaikan faktor zoom
  if (delta > 0) {
    zoomFactor *= 0.9;
  } else {
    zoomFactor *= 1.1;
  }

  // Simpan posisi awal mouse relatif terhadap posisi kiri atas container
  var rect = container.getBoundingClientRect();
  var prevX = e.clientX - rect.left;
  var prevY = e.clientY - rect.top;

  // Mengatur transformasi scale CSS pada container
  container.style.transformOrigin = "top left";
  container.style.transform = "scale(" + zoomFactor + ")";

  // Mendapatkan posisi mouse relatif terhadap container setelah zoom
  rect = container.getBoundingClientRect();
  var newX = e.clientX - rect.left;
  var newY = e.clientY - rect.top;

  // Menyesuaikan offsetX dan offsetY berdasarkan perubahan skala
  offsetX -= (newX - prevX) * (1 - 1 / zoomFactor);
  offsetY -= (newY - prevY) * (1 - 1 / zoomFactor);

  // Atur ulang transformasi translate CSS untuk mengkompensasi perubahan skala
  container.style.transform =
    "scale(" + zoomFactor + ") translate(" + offsetX + "px, " + offsetY + "px)";
}

// Variabel untuk menyimpan posisi awal sentuhan dan posisi kiri atas container
var initialX, initialY;

// Fungsi untuk memulai drag
function startDragTouch(e) {
  isDragging = true;
  // Simpan posisi awal sentuhan relatif terhadap posisi kiri atas container
  initialX = e.touches[0].clientX - container.getBoundingClientRect().left;
  initialY = e.touches[0].clientY - container.getBoundingClientRect().top;
}

// Fungsi untuk menangani pergerakan drag
function dragTouch(e) {
  if (isDragging) {
    // Hitung perbedaan antara posisi sentuhan saat ini dan posisi awal
    var dx = e.touches[0].clientX - initialX;
    var dy = e.touches[0].clientY - initialY;

    // Atur posisi container sesuai perbedaan
    container.style.left = dx + "px";
    container.style.top = dy + "px";
  }
}

// Tambahkan event listener untuk menangani drag saat mouse ditekan
container.addEventListener("mousedown", startDrag);

// Tambahkan event listener untuk menghentikan drag saat mouse dilepas
document.addEventListener("mouseup", stopDrag);

// Tambahkan event listener untuk menangani pergerakan drag
document.addEventListener("mousemove", drag);

// Tambahkan event listener untuk menangani drag saat sentuhan dimulai
container.addEventListener("touchstart", startDragTouch);

// Tambahkan event listener untuk menghentikan drag saat sentuhan berakhir
document.addEventListener("touchend", stopDrag);

// Tambahkan event listener untuk menangani pergerakan drag
document.addEventListener("touchmove", dragTouch);

// Tambahkan event listener untuk menangani zoom dengan mouse wheel
container.addEventListener("wheel", zoom);

// Tambahkan event listener untuk menangani zoom dengan trackpad
container.addEventListener("DOMMouseScroll", zoom);

