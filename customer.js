const dashboardTabs = document.querySelectorAll("[data-dashboard-tab]");
const dashboardViews = document.querySelectorAll("[data-dashboard-view]");
const dashboardTitle = document.querySelector("[data-dashboard-title]");

const dashboardTitles = {
  overview: "Overview",
  vehicles: "Vehicles",
  violations: "Violations",
  payments: "Payments",
  documents: "Documents",
  alerts: "Alerts",
  settings: "Settings",
  help: "Help",
};

const showDashboardView = (name) => {
  dashboardTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.dashboardTab === name);
  });

  dashboardViews.forEach((view) => {
    view.classList.toggle("active", view.dataset.dashboardView === name);
  });

  if (dashboardTitle) {
    dashboardTitle.textContent = dashboardTitles[name] || "Overview";
  }
};

dashboardTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showDashboardView(tab.dataset.dashboardTab);
  });
});
