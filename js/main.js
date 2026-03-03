const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

const dealGrid = document.getElementById("dealGrid");
const resultsMsg = document.getElementById("resultsMsg");
const noDealsMsg = document.getElementById("noDealsMsg");

function filterDeals() {
  const text = searchInput.value.trim().toLowerCase();
  const deals = dealGrid.querySelectorAll(".deal");

  let count = 0;

  deals.forEach((deal) => {
    const title = (deal.dataset.title || "").toLowerCase();

    if (title.includes(text)) {
      deal.style.display = "block";
      count++;
    } else {
      deal.style.display = "none";
    }
  });

  resultsMsg.textContent = `Showing ${count} deal(s).`;
  noDealsMsg.classList.toggle("hidden", count !== 0);
}

searchInput.addEventListener("input", filterDeals);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterDeals();
});

filterDeals();