document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const cards = document.querySelectorAll(".career-card");

  function filterCareers() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    cards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      const category = card.getAttribute("data-category");

      const matchesSearch = title.includes(searchText);
      const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterCareers);
  categoryFilter.addEventListener("change", filterCareers);
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const cards = document.querySelectorAll(".career-card");

  const modal = document.getElementById("careerModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close-btn");

  function filterCareers() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    cards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      const category = card.getAttribute("data-category");

      const matchesSearch = title.includes(searchText);
      const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

      card.style.display = matchesSearch && matchesCategory ? "block" : "none";
    });
  }

  // Filter listeners
  searchInput.addEventListener("input", filterCareers);
  categoryFilter.addEventListener("change", filterCareers);

  // Modal event listeners
  cards.forEach((card) => {
    const btn = card.querySelector(".btn");
    btn.addEventListener("click", () => {
      const title = card.querySelector("h2").textContent;
      const description = card.querySelector("p").textContent;

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
