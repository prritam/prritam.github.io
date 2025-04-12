// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
  }
  
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }
  