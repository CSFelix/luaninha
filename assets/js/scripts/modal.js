//  *************************
//  ** Moments Image Modal **
//  *************************
const momentsImageModal = document.getElementById('momentsImageModal');
const modalImage = document.getElementById('modalImage');
const captionText = document.getElementById('modalCaption');

document.querySelectorAll('.contentMomentsImage').forEach((image, index) => {
  image.addEventListener('click', () => {
    momentsImageModal.style.display = 'block';
    modalImage.src = image.src;
    captionText.innerHTML = image.alt;
  });
});

const closeButton = document.getElementsByClassName('modalClose')[0];
closeButton.onclick = () => momentsImageModal.style.display = 'none';

window.onclick = function(event) {
  const modalsArray = [momentsImageModal];

  if (modalsArray.includes(event.target)) { 
    event.target.style.display = 'none'; 
  }
}