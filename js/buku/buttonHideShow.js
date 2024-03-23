document.querySelectorAll("#hideShow").forEach((button) => {
  button.addEventListener("click", function () {
    // document.querySelector(".box").style.display != "none" //uhtuk singgle

    if (this.parentNode.querySelector(".box").style.display != "none") {
      this.parentNode.querySelector(".box").style.display = "none";
    } else {
      this.parentNode.querySelector(".box").style.display = "flex";
    }
  });
});
