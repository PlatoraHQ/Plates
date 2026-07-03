const header = document.querySelector("[data-header]");
const mobileToggle = document.querySelector("[data-mobile-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]"); 
const toast = document.querySelector("[data-toast]");
const plateForm = document.querySelector("[data-plate-form]");
const resultTitle = document.querySelector("[data-result-title]");
const plateInput = plateForm?.querySelector('input[name="plate"]');

document.querySelectorAll(".modal[open]").forEach((modal) => {
  modal.close?.();
  modal.removeAttribute("open");
});

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 3200);
};

const openModal = (name) => {
  const modal = document.querySelector(`[data-modal="${name}"]`);
  if (!modal) return;
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
};

const closeMobileNav = () => {
  mobileNav?.classList.remove("open");
};

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
});

mobileToggle?.addEventListener("click", () => {
  mobileNav?.classList.toggle("open");
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.matches("a, button")) closeMobileNav();
});

menuToggle?.addEventListener("click", () => {
  menu?.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  const modalButton = event.target.closest("[data-open-modal]");
  if (modalButton) {
    openModal(modalButton.dataset.openModal);
  }

  const startCheckButton = event.target.closest("[data-start-check]");
  if (startCheckButton) {
    closeMobileNav();
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => plateInput?.focus(), 450);
    showToast("Enter a plate and state to start the limited free check.");
  }

  if (menu && menuToggle && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("open");
  }
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
});

plateForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(plateForm);
  const plate = String(formData.get("plate") || "").trim().toUpperCase();
  const state = String(formData.get("state") || "").trim();

  if (!plate || !state) {
    showToast("Enter a plate number and state to start the free check.");
    return;
  }

  resultTitle.textContent = `Plate ${plate} is ready for account review.`;
  openModal("plate");
});

document.querySelector("[data-result-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.closest("dialog")?.close();
  openModal("signup");
});

document.querySelectorAll("[data-signup-form], [data-login-form], [data-support-form], [data-enterprise-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dialog = event.currentTarget.closest("dialog");
    dialog?.close();

    if (event.currentTarget.matches("[data-login-form]")) {
      showToast("Login flow connected for the frontend demo.");
      return;
    }

    if (event.currentTarget.matches("[data-support-form], [data-enterprise-form]")) {
      showToast("Thanks. Platora support request captured for the frontend demo.");
      return;
    }

    showToast("Free account flow captured. Plate monitoring setup comes next.");
  });
});
