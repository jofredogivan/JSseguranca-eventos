// Rolar suavemente até seções e mostrar animações
document.querySelectorAll('.link-section').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      target.classList.add('section-visible');
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Galeria
const gallery = document.querySelector('.gallery-images');
const nextBtn = document.querySelector('.gallery-next');
const prevBtn = document.querySelector('.gallery-prev');
let index = 0;

function updateGallery() {
  const width = gallery.clientWidth / gallery.children.length;
  gallery.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % gallery.children.length;
  updateGallery();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + gallery.children.length) % gallery.children.length;
  updateGallery();
});

window.addEventListener('resize', updateGallery);
updateGallery();
