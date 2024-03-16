const searchInput = document.getElementById("searchInput");
const bukuListItems = document.getElementById("bukuList").getElementsByTagName("li");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    Array.from(bukuListItems).forEach((li) => {
        const tagText = li.textContent.toLowerCase();
        if (tagText.includes(searchTerm)) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
});
