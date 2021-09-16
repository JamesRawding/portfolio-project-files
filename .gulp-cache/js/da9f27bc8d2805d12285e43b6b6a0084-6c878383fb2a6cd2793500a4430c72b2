document.getElementById('accessibilityOptionsTrigger').onclick = function(){
  document.getElementById('accessibilityOptions').classList.add('fullscreen-modal--active');
  this.setAttribute('aria-expanded', 'true');
}

document.getElementById('accessibilityOptionsTrigger').addEventListener("keydown",
  function(){
    document.getElementById('closeAccessibilityModal').focus();
  }
);

docReady(function () {
  var accessibilityOptionsLastBtn = document.getElementById('fontSizeExtraLarge');

    accessibilityOptionsLastBtn.addEventListener('blur', (event) => {
      document.getElementById('closeAccessibilityModal').focus();
    })

})


var body = document.body;


document.getElementById('colorDefault').onclick = function(){
  body.classList.remove('accessibility-color-dark');
  body.classList.remove('accessibility-color-light');
  body.classList.remove('accessibility-color-yellow');

  document.cookie = 'color_class=dark; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT';
  document.cookie = 'color_class=light; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT';
  document.cookie = 'color_class=yellow; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT';
}

document.getElementById('fontSizeDefault').onclick = function(){
  body.classList.remove('accessibility-font-l');
  body.classList.remove('accessibility-font-xl');

  document.cookie = 'font_class=l; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT';
  document.cookie = 'font_class=xl; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT';
}

document.getElementById('colorDark').onclick = function(){
  body.classList.add('accessibility-color-dark');
  body.classList.remove('accessibility-color-light');
  body.classList.remove('accessibility-color-yellow');

  document.cookie = "color_class=dark; Path=/; SameSite=None; Secure";

}

document.getElementById('colorLight').onclick = function(){
  body.classList.add('accessibility-color-light');
  body.classList.remove('accessibility-color-dark');
  body.classList.remove('accessibility-color-yellow');

  document.cookie = "color_class=light; Path=/; SameSite=None; Secure";
}

document.getElementById('colorYellow').onclick = function(){
  body.classList.add('accessibility-color-yellow');
  body.classList.remove('accessibility-color-dark');
  body.classList.remove('accessibility-color-light');

  document.cookie = "color_class=yellow; Path=/; SameSite=None; Secure";
}

document.getElementById('fontSizeLarge').onclick = function(){
  body.classList.add('accessibility-font-l');
  body.classList.remove('accessibility-font-xl');

  document.cookie = "font_class=l; Path=/; SameSite=None; Secure";
}

document.getElementById('fontSizeExtraLarge').onclick = function(){
  body.classList.add('accessibility-font-xl');
  body.classList.remove('accessibility-font-l');

  document.cookie = "font_class=xl; Path=/; SameSite=None; Secure";
}

docReady(function(){

  console.log(document.cookie)

  if (document.cookie.split(';').some((item) => item.includes('color_class=dark'))) {
    body.classList.add('accessibility-color-dark');
  }

  if (document.cookie.split(';').some((item) => item.includes('color_class=light'))) {
    body.classList.add('accessibility-color-light');
  }

  if (document.cookie.split(';').some((item) => item.includes('color_class=yellow'))) {
    body.classList.add('accessibility-color-yellow');
  }

  if (document.cookie.split(';').some((item) => item.includes('font_class=l'))) {
    body.classList.add('accessibility-font-l');
  }

  if (document.cookie.split(';').some((item) => item.includes('font_class=xl'))) {
    body.classList.add('accessibility-font-xl');
  }

})

/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   Simple accordion pattern example
*/

docReady(function(){

  'use strict';

  Array.prototype.slice.call(document.querySelectorAll('.accordion')).forEach(function (accordion) {

    // Allow for multiple accordion sections to be expanded at the same time
    var allowMultiple = accordion.hasAttribute('data-allow-multiple');
    // Allow for each toggle to both open and close individually
    var allowToggle = (allowMultiple) ? allowMultiple : accordion.hasAttribute('data-allow-toggle');

    // Create the array of toggle elements for the accordion group
    var triggers = Array.prototype.slice.call(accordion.querySelectorAll('.accordion__trigger'));
    var panels = Array.prototype.slice.call(accordion.querySelectorAll('.accordion__panel'));


    accordion.addEventListener('click', function (event) {
      var target = event.target;

      if (target.classList.contains('accordion__trigger')) {
        // Check if the current toggle is expanded.
        var isExpanded = target.getAttribute('aria-expanded') == 'true';
        var active = accordion.querySelector('[aria-expanded="true"]');

        // without allowMultiple, close the open accordion
        if (!allowMultiple && active && active !== target) {
          // Set the expanded state on the triggering element
          active.setAttribute('aria-expanded', 'false');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document.getElementById(active.getAttribute('aria-controls')).setAttribute('hidden', '');

          // When toggling is not allowed, clean up disabled state
          if (!allowToggle) {
            active.removeAttribute('aria-disabled');
          }
        }

        if (!isExpanded) {
          // Set the expanded state on the triggering element
          target.setAttribute('aria-expanded', 'true');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document.getElementById(target.getAttribute('aria-controls')).removeAttribute('hidden');

          // If toggling is not allowed, set disabled state on trigger
          if (!allowToggle) {
            target.setAttribute('aria-disabled', 'true');
          }
        }
        else if (allowToggle && isExpanded) {
          // Set the expanded state on the triggering element
          target.setAttribute('aria-expanded', 'false');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document.getElementById(target.getAttribute('aria-controls')).setAttribute('hidden', '');
        }

        event.preventDefault();
      }
    });

    // Bind keyboard behaviors on the main accordion container
    accordion.addEventListener('keydown', function (event) {
      var target = event.target;
      var key = event.which.toString();

      var isExpanded = target.getAttribute('aria-expanded') == 'true';
      var allowToggle = (allowMultiple) ? allowMultiple : accordion.hasAttribute('data-allow-toggle');

      // 33 = Page Up, 34 = Page Down
      var ctrlModifier = (event.ctrlKey && key.match(/33|34/));

      // Is this coming from an accordion header?
      if (target.classList.contains('accordion__trigger')) {
        // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
        // 38 = Up, 40 = Down
        if (key.match(/38|40/) || ctrlModifier) {
          var index = triggers.indexOf(target);
          var direction = (key.match(/34|40/)) ? 1 : -1;
          var length = triggers.length;
          var newIndex = (index + length + direction) % length;

          triggers[newIndex].focus();

          event.preventDefault();
        }
        else if (key.match(/35|36/)) {
          // 35 = End, 36 = Home keyboard operations
          switch (key) {
            // Go to first accordion
            case '36':
              triggers[0].focus();
              break;
              // Go to last accordion
            case '35':
              triggers[triggers.length - 1].focus();
              break;
          }
          event.preventDefault();

        }

      }
    });

    // These are used to style the accordion when one of the buttons has focus
    accordion.querySelectorAll('.accordion__trigger').forEach(function (trigger) {

      trigger.addEventListener('focus', function (event) {
        accordion.classList.add('focus');
      });

      trigger.addEventListener('blur', function (event) {
        accordion.classList.remove('focus');
      });

    });

    // Minor setup: will set disabled state, via aria-disabled, to an
    // expanded/ active accordion which is not allowed to be toggled close
    if (!allowToggle) {
      // Get the first expanded/ active accordion
      var expanded = accordion.querySelector('[aria-expanded="true"]');

      // If an expanded/ active accordion is found, disable
      if (expanded) {
        expanded.setAttribute('aria-disabled', 'true');
      }
    }

  });
})


// add all the elements inside modal which you want to make focusable
const  focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector('#headerNavModal'); // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();


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

/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
(function () {
  var tablist = document.querySelectorAll('[role="tablist"]')[0];
  var tabs;
  var panels;
  var delay = determineDelay();

  generateArrays();

  function generateArrays () {
    tabs = document.querySelectorAll('[role="tab"]');
    panels = document.querySelectorAll('[role="tabpanel"]');
  };

  // For easy reference
  var keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46
  };

  // Add or substract depending on key pressed
  var direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
  };

  // Bind listeners
  for (i = 0; i < tabs.length; ++i) {
    addListeners(i);
  };

  function addListeners (index) {
    tabs[index].addEventListener('click', clickEventListener);
    tabs[index].addEventListener('keydown', keydownEventListener);
    tabs[index].addEventListener('keyup', keyupEventListener);

    // Build an array with all tabs (<button>s) in it
    tabs[index].index = index;
  };

  // When a tab is clicked, activateTab is fired to activate it
  function clickEventListener (event) {
    var tab = event.target;
    activateTab(tab, false);
  };

  // Handle keydown on tabs
  function keydownEventListener (event) {
    var key = event.keyCode;

    switch (key) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        activateTab(tabs[0]);
        break;

      // Up and down are in keydown
      // because we need to prevent page scroll >:)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    };
  };

  // Handle keyup on tabs
  function keyupEventListener (event) {
    var key = event.keyCode;

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
    };
  };

  // When a tablistâ€™s aria-orientation is set to vertical,
  // only up and down arrow should function.
  // In all other cases only left and right arrow function.
  function determineOrientation (event) {
    var key = event.keyCode;
    var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
    var proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      };
    }
    else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      };
    };

    if (proceed) {
      switchTabOnArrowPress(event);
    };
  };

  // Either focus the next, previous, first, or last tab
  // depening on key pressed
  function switchTabOnArrowPress (event) {
    var pressed = event.keyCode;

    for (x = 0; x < tabs.length; x++) {
      tabs[x].addEventListener('focus', focusEventHandler);
    };

    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        }
        else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        }
        else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        };
      };
    };
  };

  // Activates any given tab panel
  function activateTab (tab, setFocus) {
    setFocus = setFocus || true;
    // Deactivate all other tabs
    deactivateTabs();

    // Remove tabindex attribute
    tab.removeAttribute('tabindex');

    // Set the tab as selected
    tab.setAttribute('aria-selected', 'true');

    // Get the value of aria-controls (which is an ID)
    var controls = tab.getAttribute('aria-controls');

    // Remove hidden attribute from tab panel to make it visible
    document.getElementById(controls).removeAttribute('hidden');

    // Set focus when required
    if (setFocus) {
      tab.focus();
    };
  };

  // Deactivate all tabs and tab panels
  function deactivateTabs () {
    for (t = 0; t < tabs.length; t++) {
      tabs[t].setAttribute('tabindex', '-1');
      tabs[t].setAttribute('aria-selected', 'false');
      tabs[t].removeEventListener('focus', focusEventHandler);
    };

    for (p = 0; p < panels.length; p++) {
      panels[p].setAttribute('hidden', 'hidden');
    };
  };

  // Make a guess
  function focusFirstTab () {
    tabs[0].focus();
  };

  // Make a guess
  function focusLastTab () {
    tabs[tabs.length - 1].focus();
  };

  // Detect if a tab is deletable
  function determineDeletable (event) {
    target = event.target;

    if (target.getAttribute('data-deletable') !== null) {
      // Delete target tab
      deleteTab(event, target);

      // Update arrays related to tabs widget
      generateArrays();

      // Activate the closest tab to the one that was just deleted
      if (target.index - 1 < 0) {
        activateTab(tabs[0]);
      }
      else {
        activateTab(tabs[target.index - 1]);
      };
    };
  };

  // Deletes a tab and its panel
  function deleteTab (event) {
    var target = event.target;
    var panel = document.getElementById(target.getAttribute('aria-controls'));

    target.parentElement.removeChild(target);
    panel.parentElement.removeChild(panel);
  };

  // Determine whether there should be a delay
  // when user navigates with the arrow keys
  function determineDelay () {
    var hasDelay = tablist.hasAttribute('data-delay');
    var delay = 0;

    if (hasDelay) {
      var delayValue = tablist.getAttribute('data-delay');
      if (delayValue) {
        delay = delayValue;
      }
      else {
        // If no value is specified, default to 300ms
        delay = 300;
      };
    };

    return delay;
  };

  //
  function focusEventHandler (event) {
    var target = event.target;

    setTimeout(checkTabFocus, delay, target);
  };

  // Only activate tab on focus if it still has focus after the delay
  function checkTabFocus (target) {
    focused = document.activeElement;

    if (target === focused) {
      activateTab(target, false);
    };
  };
}());


docReady(function () {
  var segmentedControlBtns = document.getElementsByClassName('segmented-controls__btn');

  for (var i = segmentedControlBtns.length - 1; i >= 0; i--){

    segmentedControlBtns[i].onclick = function(){
      for (let sibling of this.parentNode.children) {
        if (sibling !== this) sibling.classList.remove('segmented-controls__btn--active');
      }

      if( this.classList.contains("segmented-controls__btn--active") ){
        //this.classList.remove("segmented-controls__btn--active");
        this.blur();
      }
      else{
        this.classList.add("segmented-controls__btn--active");
        this.blur();
      }
    };
  }
});

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
