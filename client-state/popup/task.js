const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = subscribeModal.querySelector('.modal__close');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
      if (parts.length === 2) {
          return parts
            .pop()
            .split(";")
            .shift();
      }
}

document.addEventListener('DOMContentLoaded', function() {
    if (getCookie('popupClosed') != 'yes') {
        subscribeModal.classList.add('modal_active');
    }
});

modalClose.addEventListener('click', function(event) {
    event.preventDefault();
    document.cookie = 'popupClosed=yes';    
    subscribeModal.classList.remove('modal_active');
});