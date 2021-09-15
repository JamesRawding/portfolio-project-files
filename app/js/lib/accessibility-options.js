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
