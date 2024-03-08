// Ambil elemen container
var container = document.getElementById("treeContainer");

// Variabel untuk menyimpan posisi mouse awal dan posisi kiri atas container
var offsetX, offsetY;
var isDragging = false;

// Fungsi untuk memulai drag
function startDrag(e) {
  isDragging = true;
  // Simpan posisi awal mouse relatif terhadap posisi kiri atas container
  offsetX = e.clientX - container.getBoundingClientRect().left;
  offsetY = e.clientY - container.getBoundingClientRect().top;
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
