const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("closeSearch");

searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("hidden");
});

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".tag-card");

    cards.forEach(card => {
        card.style.display =
            card.textContent.toLowerCase().includes(text)
            ? "grid"
            : "none";
    });
});

closeSearch.addEventListener("click", () => {
    searchInput.value = "";
    searchBox.classList.add("hidden");

    document.querySelectorAll(".tag-card").forEach(card => {
        card.style.display = "grid";
    });
});