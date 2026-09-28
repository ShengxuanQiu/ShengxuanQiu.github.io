(() => {
  const root = document.documentElement;
  const key = "sxqiu-theme";
  const saved = localStorage.getItem(key);
  if (saved) root.dataset.theme = saved;
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;
  const sync = () => { btn.textContent = root.dataset.theme === "dark" ? "☀" : "◐"; };
  sync();
  btn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(key, root.dataset.theme);
    sync();
  });
})();