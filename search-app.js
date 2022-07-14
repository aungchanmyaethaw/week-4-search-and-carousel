const inputItem = document.querySelector("[data-search-text]");
const itemArr = document.querySelectorAll(".item-name");

inputItem.addEventListener("keyup", function (e) {
  const inputValue = e.target.value.toLowerCase();

  itemArr.forEach(function (item) {
    const textItem = item.textContent.toLowerCase();
    if (textItem.includes(inputValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
