const countryFilter = document.querySelector("#route-country-filter");
const typeFilter = document.querySelector("#route-type-filter");
const cards = [...document.querySelectorAll(".route-source-card")];
const resultCount = document.querySelector("#route-result-count");
const emptyState = document.querySelector("#route-empty");
const routeImportDock = document.querySelector(".route-import-dock");
const routeSourceToolbar = document.querySelector(".route-source-toolbar");
const phoneQuery = window.matchMedia("(max-width: 560px)");
let dockObserver = null;

function filterRouteSources() {
  const country = countryFilter.value;
  const type = typeFilter.value;
  let visible = 0;

  cards.forEach((card) => {
    const countries = card.dataset.countries.split(" ");
    const matchesCountry = country === "all" || countries.includes(country);
    const matchesType = type === "all" || card.dataset.type === type;
    const show = matchesCountry && matchesType;
    card.hidden = !show;
    if (show) visible += 1;
  });

  resultCount.textContent = `${visible} ${visible === 1 ? "routebron" : "routebronnen"} zichtbaar`;
  emptyState.hidden = visible !== 0;
}

countryFilter.addEventListener("change", filterRouteSources);
typeFilter.addEventListener("change", filterRouteSources);
filterRouteSources();

function configureImportDock() {
  dockObserver?.disconnect();
  dockObserver = null;
  if (!phoneQuery.matches || !window.IntersectionObserver) {
    routeImportDock.classList.remove("is-hidden");
    return;
  }

  dockObserver = new IntersectionObserver(([entry]) => {
    routeImportDock.classList.toggle("is-hidden", entry.isIntersecting);
  }, { threshold: 0.05 });
  dockObserver.observe(routeSourceToolbar);
}

phoneQuery.addEventListener?.("change", configureImportDock);
configureImportDock();
