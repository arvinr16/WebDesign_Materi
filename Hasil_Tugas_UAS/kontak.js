const collapseKontak = document.getElementById("collapseKontak");
const button = document.getElementById("btnCollapse");

collapseKontak.addEventListener("shown.bs.collapse", function () {
  button.textContent = "Tutup form Pendaftaran awal?";
});

collapseKontak.addEventListener("hidden.bs.collapse", function () {
  button.textContent = "Buka Form Pendaftaran awal?";
});
