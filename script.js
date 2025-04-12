// Dark mode toggle
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

