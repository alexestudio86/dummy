  // SHARE BUTTONS
  // Desktop
  fbButton = document.querySelector('ul#shareButtons li a.fa-facebook-square');
  if(fbButton){
    fbButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(e.target.href, 'windowName', 'width=550, height=650, left=24, top=24, scrollbars, resizable');
    });
  }
  ttButton = document.querySelector('ul#shareButtons li a.fa-twitter-square');
  if(ttButton){
    ttButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(e.target.href, 'windowName', 'width=550, height=450, left=24, top=24, scrollbars, resizable');
    });
  }
  // Mobile
  waButton = document.querySelector('ul#shareButtons li a.fa-whatsapp-square');
  if(waButton){
    waButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(e.target.href, 'windowName', 'width=900, height=550, left=24, top=24, scrollbars, resizable');
    });
  }
