const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
const status = document.querySelector("#filter-status");
const emptyState = document.querySelector("#empty-state");

const categoryLabels = {
  all: "menu item",
  coffee: "coffee drink",
  tea: "tea",
  bakes: "baked good",
};

function countLabel(count, category) {
  const label = categoryLabels[category] || "item";
  return `${count} ${label}${count === 1 ? "" : "s"}`;
}

function applyFilter(category) {
  let visible = 0;

  cards.forEach((card) => {
    const matches = category === "all" || card.dataset.category === category;
    card.hidden = !matches;
    if (matches) {
      visible += 1;
    }
  });

  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === category));
  });

  status.textContent = `Showing ${countLabel(visible, category)}.`;
  emptyState.hidden = visible !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});
