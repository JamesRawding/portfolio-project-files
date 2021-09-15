
document.getElementById('navItem1').onclick = function(){
  var headerNavModal = document.getElementById('headerNavModal');
  headerNavModal.classList.add('fullscreen-modal--active');
  document.getElementById('nav-tab-1').classList.add('segmented-controls__btn--active');
  document.getElementById('nav-tab-2').classList.remove('segmented-controls__btn--active');
  document.getElementById('nav-tab-3').classList.remove('segmented-controls__btn--active');
  document.getElementById('nav-panel-1').hidden = false;
  document.getElementById('nav-panel-2').hidden = true;
  document.getElementById('nav-panel-3').hidden = true;
  this.setAttribute('aria-expanded', 'true')
}

document.getElementById('navItem2').onclick = function(){
  var headerNavModal = document.getElementById('headerNavModal');
  headerNavModal.classList.add('fullscreen-modal--active');
  document.getElementById('nav-tab-1').classList.remove('segmented-controls__btn--active');

  document.getElementById('nav-tab-2').classList.add('segmented-controls__btn--active');
  document.getElementById('nav-tab-3').classList.remove('segmented-controls__btn--active');
  document.getElementById('nav-panel-1').hidden = true;
  document.getElementById('nav-panel-2').hidden = false;
  document.getElementById('nav-panel-3').hidden = true;
  this.setAttribute('aria-expanded', 'true')

}

document.getElementById('headerNavTrigger').onclick = function(){
  document.getElementById('headerNavModal').classList.add('fullscreen-modal--active');
}



document.getElementById('navItem1').addEventListener("keydown",
  function(){
    firstFocusableElement.focus();
  }
);

document.getElementById('navItem2').addEventListener("keydown",
  function(){
    firstFocusableElement.focus();
  }
);

docReady(function () {
  var controlPanelLastLink = document.getElementsByClassName('segmented-control-panel__last-link');

  for (var i = controlPanelLastLink.length - 1; i >= 0; i--){
    controlPanelLastLink[i].addEventListener('blur', (event) => {
      document.getElementById('closeNavModal').focus();
    })
  }
})
