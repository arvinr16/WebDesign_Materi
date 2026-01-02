// Logika untuk tombol 'Selengkapnya'
const collapseExample = document.getElementById("collapseExample");
const button = document.getElementById("btnCollapse");

collapseExample.addEventListener("shown.bs.collapse", function () {
    button.textContent = "Tutup?";
});

collapseExample.addEventListener("hidden.bs.collapse", function () {
    button.textContent = "Selengkapnya...";
});
