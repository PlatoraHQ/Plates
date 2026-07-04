const partnerToast = document.querySelector("[data-toast]");

const showPartnerToast = (message) => {
  if (!partnerToast) return;
  partnerToast.textContent = message;
  partnerToast.classList.add("show");
  window.clearTimeout(showPartnerToast.timeout);
  showPartnerToast.timeout = window.setTimeout(() => partnerToast.classList.remove("show"), 3200);
};

document.querySelector("[data-partner-application]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  showPartnerToast("Partner application received. Approved partners receive portal login access.");
});

document.querySelector("[data-partner-login]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "./partner-dashboard.html";
});

document.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-copy-value]");
  if (!copyButton) return;

  const value = copyButton.dataset.copyValue;
  try {
    await navigator.clipboard.writeText(value);
    showPartnerToast("Copied to clipboard.");
  } catch {
    showPartnerToast(value);
  }
});
