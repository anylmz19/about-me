// Modal elemanları
const modal = document.getElementById("resimModal");
const modalResim = document.getElementById("modalResim");
const modalKapat = document.getElementById("modalKapat");
const buyukResim = document.getElementById("buyukResim");

// Resme tıklandığında popup göster
buyukResim?.addEventListener("click", () => {
  modal.style.display = "block";
  modalResim.src = buyukResim.src;
});

// Kapatma butonu
modalKapat?.addEventListener("click", () => {
  modal.style.display = "none";
});

// Modal dışında tıklanırsa kapat
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
function runDemo() {
  const html = document.getElementById("htmlCode").value;
  const css = "<style>" + document.getElementById("cssCode").value + "</style>";
  const js = "<script>" + document.getElementById("jsCode").value + "<\/script>";

  const output = document.getElementById("output");
  const content = html + css + js;

  output.srcdoc = content;
}
