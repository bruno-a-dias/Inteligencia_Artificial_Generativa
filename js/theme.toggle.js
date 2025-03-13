document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const themeToggleButton = document.getElementById("themeToggle");

  // Recuperar tema salvo no localStorage ou definir padrão como "light"
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-bs-theme", savedTheme);

  // Atualizar ícone do botão com base no tema salvo
  themeToggleButton.innerHTML =
    savedTheme === "dark"
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-stars-fill"></i>';

  // Alternar tema ao clicar no botão
  themeToggleButton.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Aplicar novo tema e salvar no localStorage
    html.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Atualizar ícone do botão
    themeToggleButton.innerHTML =
      newTheme === "dark"
        ? '<i class="bi bi-sun-fill"></i>'
        : '<i class="bi bi-moon-stars-fill"></i>';
  });
});
