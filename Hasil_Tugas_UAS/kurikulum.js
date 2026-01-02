function toggleKurikulum() {
    const detail = document.getElementById("kurikulumDetail");
    const button = document.querySelector(".btn-toggle");

    if(detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "block";
        button.textContent = "Tutup?";
    } else {
        detail.style.display = "none";
        button.textContent = "Selengkapnya...";
    }
}
