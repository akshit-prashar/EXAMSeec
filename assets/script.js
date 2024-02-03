var messageBox = document.querySelector('.js-message');
  var btn = document.querySelector('.js-message-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-message-close');

  btn.addEventListener('click',function (e) {
      e.preventDefault();
      card.classList.add('active');
  });

  closeBtn.forEach(function (element, index) {
     console.log(element);
      element.addEventListener('click',function (e) {
          e.preventDefault();
          card.classList.remove('active');
      });
  });





document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.profile-card-social__item');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const url = this.getAttribute('href');
      openPopup(url);
    });
  });

  // Close popup when clicking the close button
  document.querySelector('.close').addEventListener('click', function() {
    closePopup();
  });
});

function openPopup(url) {
  const popupContainer = document.getElementById('popupContainer');
  const popupIframe = document.getElementById('popupIframe');
  popupIframe.src = url;
  popupContainer.style.display = 'block';
}

function closePopup() {
  const popupContainer = document.getElementById('popupContainer');
  const popupIframe = document.getElementById('popupIframe');
  popupIframe.src = '';
  popupContainer.style.display = 'none';
}
