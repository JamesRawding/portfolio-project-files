var showHideTrigger = document.getElementsByClassName('showHideTrigger');

for (var i = showHideTrigger.length - 1; i >= 0; i--){
  showHideTrigger[i].onclick = function(){
    var showHideElement = this.nextElementSibling;
    if( showHideElement.classList.contains('showHide--active') ){
      showHideElement.classList.remove('showHide--active');
      this.setAttribute('aria-expanded', 'false');

    }else{
      showHideElement.classList.add('showHide--active');
      this.setAttribute('aria-expanded', 'true');
    }

    if(this.innerHTML === 'Design System Menu'){
      this.innerHTML = 'Close Menu';

    }else{
      this.innerHTML = 'Design System Menu';
    }

  }
}
