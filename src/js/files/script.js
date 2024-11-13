// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const isTouchScreen = window.matchMedia("(any-hover:none)").matches;

window.addEventListener("load", windowLoaded);

function windowLoaded() {
  // Closed catalog with key "Escape"
  let keypressActions = (e) => {
    if (e.key === "Escape") {
      document.documentElement.classList.remove("catalog-open");
    }
  };

  let documentActions = (e) => {
    const targetElement = e.target;
    const typeEvent = e.type;
    const targetTag = targetElement.tagName;

    if (isTouchScreen) {
      if (targetElement.closest(".lang-header")) {
        const langHeader = targetElement.closest(".lang-header");
        langHeader.classList.toggle("--active");
      } else {
        document.querySelector(".lang-header").classList.remove("--active");
      }
      if (targetElement.closest(".items-catalog-header__more")) {
        const targetItem = targetElement.closest(".items-catalog-header__item");
        const targeActivetItem = document.querySelector(
          ".items-catalog-header__item.--active"
        );
        targetItem.classList.toggle("--active");

        if (targetItem !== targeActivetItem) {
          targeActivetItem.classList.remove("--active");
        }
      }
    }
  };

  document.addEventListener("click", documentActions);
}
