docReady(function(){
  var pathArray = window.location.pathname.split('/');
  var secondLevelLocation = pathArray[2];

  if(secondLevelLocation == 'design'){
    document.getElementById('accordion1id').setAttribute('aria-expanded', 'true');
    document.getElementById('sect1').hidden = false;
  }
  if(secondLevelLocation == 'components'){
    document.getElementById('accordion2id').setAttribute('aria-expanded', 'true');
    document.getElementById('sect2').hidden = false;
  }
  if(secondLevelLocation == 'utilities'){
    document.getElementById('accordion3id').setAttribute('aria-expanded', 'true');
    document.getElementById('sect3').hidden = false;
  }


  (function () {
      var current = location.pathname.split('/')[3];
      if (current === "") return;
      var menuItems = document.querySelectorAll('.sidebar-nav a');
      for (var i = 0, len = menuItems.length; i < len; i++) {
          if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
              menuItems[i].classList.add('sidebar-nav-item--active');
          }
      }
  })();
})
