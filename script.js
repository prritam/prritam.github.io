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
const marquee = document.querySelector('.cert-marquee');
const track = document.querySelector('.cert-track');

let isDragging = false;
let startX;
let scrollLeft;

marquee.addEventListener('mousedown', (e) => {
  isDragging = true;
  track.style.cursor = 'grabbing';
  startX = e.pageX - marquee.offsetLeft;
  scrollLeft = marquee.scrollLeft;
});

marquee.addEventListener('mouseleave', () => {
  isDragging = false;
  track.style.cursor = 'grab';
});

marquee.addEventListener('mouseup', () => {
  isDragging = false;
  track.style.cursor = 'grab';
});

marquee.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - marquee.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  marquee.scrollLeft = scrollLeft - walk;
});

// For touch support
marquee.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - marquee.offsetLeft;
  scrollLeft = marquee.scrollLeft;
});

marquee.addEventListener('touchend', () => {
  isDragging = false;
});

marquee.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - marquee.offsetLeft;
  const walk = (x - startX) * 2;
  marquee.scrollLeft = scrollLeft - walk;
});

