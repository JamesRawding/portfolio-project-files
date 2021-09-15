docReady(function () {
  var closeModalBtns = document.getElementsByClassName('closeModalBtn');
  var fullScreenModals = document.getElementsByClassName('fullscreen-modal');
  var modalTrigger = document.getElementsByClassName('modalTrigger')

  for (var i = closeModalBtns.length - 1; i >= 0; i--){
    closeModalBtns[i].onclick = function(){
      for (var i = fullScreenModals.length - 1; i >= 0; i--){
        fullScreenModals[i].classList.remove('fullscreen-modal--active');
      }

      for (var i = modalTrigger.length - 1; i >= 0; i--){
        modalTrigger[i].setAttribute('aria-expanded', 'false')
      }
    }
  }
});

//close modal ons ESC keydown
document.addEventListener("keydown",
  function(){
    if (event.keyCode == 27) {
      var fullScreenModals = document.getElementsByClassName('fullscreen-modal');

      for (var i = fullScreenModals.length - 1; i >= 0; i--){
        fullScreenModals[i].classList.remove('fullscreen-modal--active');
      }

      for (var i = modalTrigger.length - 1; i >= 0; i--){
        modalTrigger[i].setAttribute('aria-expanded', 'false')
      }

    }
  }
);
