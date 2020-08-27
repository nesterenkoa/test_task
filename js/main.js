'use strict';
let mediaQuery = window.matchMedia("(min-width: 992px)");
mediaQuery.addListener(myFunc);
function myFunc(mq) {
  if (mq.matches) {
    const logo = document.queruySelector("logo");
    logo.classList.add("tablet-logo");
    // document.body.style.backgroundColor = '#060';
  } else {
    document.body.style.width = '900px';
  }
}
myFunc(mediaQuery);
