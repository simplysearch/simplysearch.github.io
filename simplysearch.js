const runBtn = document.getElementById("run");
const searchInput = document.getElementById("searchInput");

runBtn.disabled = searchInput.value.trim() === "";

searchInput.addEventListener("input", () => {
  runBtn.disabled = searchInput.value.trim() === "";
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !runBtn.disabled) {
    event.preventDefault();
    runBtn.click();
  }
});

runBtn.addEventListener("click", () => {
  window.open("https://www.google.com/search?q=" + encodeURIComponent(searchInput.value + " -noai"));
  searchInput.focus();
});